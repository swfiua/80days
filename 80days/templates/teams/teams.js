'use strict';

var app = angular.module('myApp.teams', ['ngRoute'])

.controller('CompetitionController', function($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;
 });

app.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider.when('/teams/', {templateUrl: 'teams/teams.html', controller: 'teamsController'});
    $routeProvider.when('/competitors/', {templateUrl: 'competitors/competitors.html', controller: 'competitorsController'});
}]);


app.controller('teamsController', function($scope, $routeParams, $http) {
    var view = this;
    $scope.name = "teamsController";
    $scope.competition_id = $routeParams.competition;
    
    $scope.teams = [];

    $http.get('/eighty/teams', {competition: $scope.competition_id}).success(function(data){
	    $scope.teams = data;
    });


    this.myTeam = function(user_id) {
	for (var tix in this.teams) {
	    var team = this.teams[tix];
	    for (var mix in team.team_members) {
		var member = team.team_members[mix];
		if (member.user.id == user_id) {
		    return team;
		}
	    }
	}
	return;
    };

    this.showCompetition = function() {
	alert('competition + ' + this.competition);
    };
    this.showTeams = function() {
	alert('teams + ' + this.teams);
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

