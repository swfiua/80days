'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'ngCookies',
  'myApp.home',
]).

config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]).

config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
}).

run(function($http, $cookies) {
    $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
});

app.config(function($httpProvider) {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
});

app.controller('PanelController', function() {
    
    this.panel = 1;
    
    this.selectPanel = function(setPanel){
	this.panel = setPanel;
    };

    this.isSelected = function(checkPanel) {
	return this.panel === checkPanel;
    };
});


app.controller('CompetitionsController', [ '$http', function($http) {
    var view = this;
    view.predicate = "-start"
    view.competitions = [];
    view.competitors = [];
    view.user_info = {competitions: [], competitors: [], teams: []};

    $http.get('/eighty/competitions/').success(function(data){
	view.competitions = data;
    });


    this.startDate = function(competition) {
	return new Date(competition.start);
    };

    this.endDate = function(competition) {
	var start = this.startDate(competition);
	var end = new Date();

	//end.setDate(start.getDate() + competition.days);
	end.setTime(start.getTime() + (competition.days * 3600 * 24 * 1000));
		
	return end;
    };
	    
    this.started = function(competition) {
	// check if competition has started
	var today = new Date();
	var start = this.startDate(competition);

	return start < today;
    };

    this.finished = function(competition) {
	// check if competition has started
	var today = new Date();
	var end = this.endDate(competition);
	    
	return end < today;
    };
		
    this.inProgress = function(competition) {
	
	return this.started(competition) && !this.finished(competition);
    };

}]);

app.controller('CompetitorController', [ '$scope', '$http', function($scope, $http) {
    var view = this;
    view.competitors = [];
    view.me = {};

    $http.get('/eighty/competitors/?competition=' + $scope.competition.id).success(function(data){
	view.competitors = data;
    });

    $http.get('/eighty/everything_for_user/' + $scope.competition.id + '/').success(function(data){
	$scope.me = view.me = data.competitor;
    });

    this.enrol = function() {
	view.me.competition = $scope.competition.id;

	console.log('enrol' + $scope.me.competition);

	$http.post('/eighty/create_competitor/', $scope.me).
	    success(function(competitor, status, headers, config) {
		view.competitors.push(competitor);
		view.me = competitor;
	    });
    };

}]);

app.controller('CompetitionController', [ '$scope', '$http', function($scope, $http) {
    var view = this;
    view.competitors = [];

    $http.get('/eighty/competitors/?competition=' + $scope.competition.id).success(function(data){
	view.competitors = data;
    });

}]);

app.controller('TeamsController', [ '$scope', '$http', function($scope, $http) {
    var view = this;
    view.teams = [];
    view.me = {};
    view.team = {}
    view.competition = $scope.competition;
    
    $http.get('/eighty/teams?competition=' + $scope.competition.id).success(function(data){
	    view.teams = data;
    });

    $http.get('/eighty/everything_for_user/' + $scope.competition.id + '/').success(function(data){
	$scope.me = view.me = data.competitor;
    });
    

    this.notTeamMember = function() {
	
	if (view.me.team) return false;
	if (view.me.team_member_request) return false;
	
	return true;
    };

    this.isCompetitor = function() {
	return view.me.id;
    };

    this.createTeam = function() {

	this.team.competition = this.competition.id;
	this.team.captain = this.me.id;
	
	$http.post('/eighty/create_team/', this.team).
	    success(function(team, status, headers, config) {
		alert("Team Created" + team);

		// now need to set my team and save
		view.me.team = team.id;
		$http.post('/eighty/competitors/', view.me);
	    }).
	    error(function(data, status, headers, config) {
		alert("Problem creating team" + data);
	    });
		
	this.team = {};
    };

}]);

// DIRECTIVES

app.directive("appPanels", function() {
    return {
	restrict: 'E',
	templateUrl: 'app-panels.html',
	controller: 'PanelController',

	controllerAs: "panel"
    };
});

app.directive("competitionInfo", function() {
    return {
	restrict: 'E',
	templateUrl: 'competition/competition.html',
	controller: 'CompetitionController'
    };
});

app.directive("competitorList", function() {
    return {
	restrict: 'E',
	templateUrl: 'competitors/competitors.html',
	controller: "CompetitorController",
	controllerAs: "competitorController",
    };
});

app.directive("competitorInfo", function() {
    return {
	restrict: 'E',
	templateUrl: 'competitors/competitor.html',
	controller: function() {
	},
	controllerAs: "competitor",
    };
});

app.directive("competitionEnter", [ '$http', function($http) {

    return {
	restrict: 'E',
	templateUrl: 'competition/enter.html',
    };
}]);


// Competition Panels -- everything for a single competition
app.directive("competitionPanels", function() {
    return {
	restrict: 'E',
	templateUrl: 'competition/panels.html',
	controller: 'PanelController',

	controllerAs: "compPanelCtrl"
    };
});

app.directive("teams", function() {
    return {
	restrict: 'E',
	templateUrl: 'teams/teams.html',
	controller: 'TeamsController',
	controllerAs: 'tc'
    };
});

app.directive("teamCreate", function() {

    return {
	restrict: 'E',
	templateUrl: 'teams/team-create.html',
    };
});
