'use strict';

var app = angular.module('myApp.teams', ['ngRoute'])

.controller('MainTeamController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 });

app.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider.when('/teams/', {templateUrl: 'teams/teams.html', controller: 'teamsController'});
}]);


app.controller('teamsController', function($scope, $routeParams) {
    $scope.name = "teamsController";
    $scope.competition = $routeParams.competition;
    this.teams = ['a', 'b'];

    this.showCompetition = function() {
	alert('competition + ' + this.competition);
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

