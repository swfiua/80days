'use strict';

var app = angular.module('myApp.teams', ['ngRoute'])

.controller('CompetitionController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 });

app.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider.when('/teams/', {templateUrl: 'teams/teams.html', controller: 'TeamsController'});
    $routeProvider.when('/competitors/', {templateUrl: 'competitors/competitors.html', controller: 'CompetitorsController'});
}]);


app.controller('TeamsController', function($scope, $routeParams, $http) {
    var view = this;
    $scope.name = "TeamsController";
    $scope.competition = $routeParams.competition;
    $scope.competitor = $routeParams.competitor;
    
    $scope.teams = [];

    $http.get('/eighty/teams?competition=' + $scope.competition).success(function(data){
	    $scope.teams = data;
    });


    this.showCompetition = function() {
	alert('competition + ' + this.competition);
    };
    this.showTeams = function() {
	console.log('number of teams: ' + teams.length)
	alert('teams + ' + $scope.teams);
    };
});


app.directive("teamList", function() {
    return {
	restrict: 'E',
	templateUrl: 'teams/team-list.html',
    };
});

app.directive("teamCreate", [ '$http', function($http) {

    return {
	restrict: 'E',
	templateUrl: 'teams/team-create.html',
	controller: function() {
	    this.team = {};

	    this.createTeam = function(competition, compsCtrl) {
		// code to enrol in a competition
		
		// save it and add it to the competion
		//competition.competitors.push(this.competitor)

		$http.post('/eighty/create_team/', this.team).
		    success(function(team, status, headers, config) {
			alert("Team Created" + team);


			// And add the team to the competition
			$http.post('/eighty/add_team/', {
			    competition_id: competition.id, 
			    team_id: team.id}).
			    success(function(data, status, headers, config) {
				// Now need to refresh the models
				compsCtrl.refresh()
			    }).
			    error(function(data, status, headers, config) {
				//alert("Problem updating team" + data);
			    });
		    }).
		    error(function(data, status, headers, config) {
			alert("Problem creating team" + data);
		    });
		
		this.team = {};
	    };
	},
	controllerAs: "teamCreate"
    };
}]);

app.controller('CompetitorsController', function($scope, $routeParams, $http) {
    
    // extract stuff from routeParams
    var view = this;
    $scope.name = "CompetitorsController";
    $scope.competition_id = $routeParams.competition;
    $scope.user_id = $routeParams.user;
    
    // Model variables
    $scope.competitors = [];
    $scope.me = {};
    this.me = 0;
    

    $http.get("/eighty/competitors?competition=" + $scope.competition_id).
	success(function(data) {
	    $scope.competitors = data;
	    
	    // extract my competitor entry
	    for (var ix in data) {
		if (data[ix].user == $scope.user_id) {
		    $scope.me = data[ix];
		    this.me = data[ix];
		}
	    }
	});

    $scope.isEntered = function() {
	return $scope.me.id;
    };

    $scope.enrol = function() {
	$scope.me.competition = $scope.competition_id;
	// $scope.me.user = $scope.user_id;
	console.log('enrol' + $scope.me.competition);

	$http.post('/eighty/create_competitor/', $scope.me).
	    success(function(competitor, status, headers, config) {
		$scope.competitors.push(competitor);
		view.me = competitor;
	    });
    };
});

