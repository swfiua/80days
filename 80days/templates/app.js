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
    view.user_info = {competitions: [], competitors: [], teams: []};

    $http.get('/eighty/competitors/?competition=' + $scope.competition.id).success(function(data){
	view.competitors = data;
    });
}]);

app.controller('CompetitionController', [ '$scope', '$http', function($scope, $http) {
    var view = this;
    view.competitors = [];
    view.me = undefined;

    $http.get('/eighty/competitors/?competition=' + $scope.competition.id).success(function(data){
	view.competitors = data;
    });
    $http.get('/eighty/everything_for_user/' + $scope.competition.id).success(function(data){
	view.me = data;
    });

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

