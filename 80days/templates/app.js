'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
    'ngRoute',
    'ngCookies',
    'myApp.home',
    'ngResource',
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
    $http.defaults.headers.put['X-CSRFToken'] = $cookies.csrftoken;
});

app.config(function($httpProvider) {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
});

app.config(['$resourceProvider', function($resourceProvider) {
  // Don't strip trailing slashes from calculated URLs
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);

app.controller('PanelController', function() {
    
    this.panel = 1;
    
    this.selectPanel = function(setPanel){
	this.panel = setPanel;
    };

    this.isSelected = function(checkPanel) {
	return this.panel === checkPanel;
    };
});

// RESOURCES
app.factory('Competitions', ['$resource', function($resource) {
    return $resource('/eighty/competitions/');
}]);

app.factory('Competition', ['$resource', function($resource) {
    return $resource('/eighty/create_competition/');
}]);

app.factory('Competitors', ['$resource', function($resource) {
    return $resource('/eighty/competitors/');
}]);

app.factory('Competitor', ['$resource', function($resource) {
    return $resource('/eighty/create_competitor/');
}]);

app.factory('Teams', ['$resource', function($resource) {
    return $resource('/eighty/teams/');
}]);

app.factory('Team', ['$resource', function($resource) {
    return $resource('/eighty/create_team/');
}]);

app.factory('User', ['$resource', function($resource) {
    return $resource('/eighty/user_id/');
}]);


app.controller('CompetitionsController', [ '$http', 'Competitions', function($http, Competitions) {
    var view = this;
    view.competitions = Competitions.query();
    view.predicate = "-start";

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

// Controller for competition panels
app.controller('CompetitionController', [ 
    '$scope', '$http', 'Competitors', 'Teams', 'Competitor', 'User', 
    function($scope, $http, Competitors, Teams, Competitor, User) {
	var view = this;
	$scope.my_competitors = []
	$scope.user = User.get({}, function() {
	    $scope.my_competitors = Competitors.query({competition: $scope.competition.id, user: $scope.user.id});
	});
	$scope.competitors = Competitors.query({competition: $scope.competition.id});
	$scope.teams = Teams.query({competition: $scope.competition.id});
	
	console.log($scope);
    }
]);

app.controller('CompetitorController', [ '$scope', 'Competitor', function($scope, Competitor) {
    var view = this;
    view.competitors = $scope.competitors;
    view.me = new Competitor();

    this.enrol = function() {
	if ($scope.my_competitors.length) {
	    alert("Already entered!");
	};
	view.me.competition = $scope.competition.id;

	view.me.$save();
	$scope.my_competitors.push(view.me);
    };
}]);


app.controller('TeamsController', [ '$scope', 'Teams', 'Team', function($scope, Teams, Team) {
    var view = this;
    view.teams = $scope.teams;
    view.team = new Team();
    view.competition = $scope.competition;
    
    this.notTeamMember = function() {
	
	if (!$scope.my_competitors.length) return false;

	var me = $scope.my_competitors[0];
	if (me.team) return false;
	if (me.team_member_request) return false;
	
	return true;
    };

    this.isCompetitor = function() {
	return $scope.my_competitors.length;
    };


    this.createTeam = function() {

	view.team.competition = $scope.competition.id;
	var me = $scope.my_competitors[0];
	view.team.captain = me.id;
	
	view.team.$save(function(team) {
	    // now need to set my team and save
	    me.team = team.id;
	    me.$save();
	    
	    // and add to the model
	    view.teams.push(team);
	});
		
	view.team = {};
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

app.directive("competitionEnter", function() {

    return {
	restrict: 'E',
	templateUrl: 'competition/enter.html',
    };
});


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
