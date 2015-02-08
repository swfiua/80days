'use strict';

var app = angular.module('myApp.competitions', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/competitions', {
    templateUrl: 'competitions/competitions.html',
    controller: 'CompetitionsCtrl'
  });
}]);

app.controller('CompetitionsCtrl', [ '$http', function($http) {
    var view = this;
    view.competions = [];
    view.competitors = [];
    view.user_info = {competitions: [], competitors: [], teams: []};

    $http.get('/eighty/competitions').success(function(data){
	view.competitions = data;
    });

    $http.get('/eighty/competitors').success(function(data){
	view.competitors = data;
    });

    $http.get('/eighty/everything_for_user').success(function(data){
	view.user_info = data;
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

    this.isEntered = function(competition) {
	// now need to get at the competitor objects
	// FIXME: need this to do something
	return competition in this.myCompetitions();
    };

    this.myCompetitions = function() {
	return this.user_info.competitions;
    };
    
    this.notEntered = function(competition) {
	
	return !this.isEntered();
    };

}]);


app.directive("competitionInfo", function() {
    return {
	restrict: 'E',
	templateUrl: 'competition/competition.html',
	controller: function() {

	    
	},

	controllerAs: "comp"
    };
});

app.directive("competitorList", function() {
    return {
	restrict: 'E',
	templateUrl: 'competitors/competitors.html',
	controller: function() {
	},
	controllerAs: "competitors",
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
	controller: function() {
	    this.competitor = {};

	    // $http.get('/detail_competition', {pk: 
	    
	    this.enrol = function(competition, user) {
		// code to enrol in a competition
		
		// save it and add it to the competion
		//competition.competitors.push(this.competitor)

		$http.post('/eighty/create_competitor/', this.competitor).success(function() {
		    alert("Competitor Created");
		}).error(function() {
		    alert("wtf just happened?");
		});
		
		this.competitor = {};
	    };
	},
	controllerAs: "enrol"
    };
}]);
