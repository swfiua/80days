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

app.directive("competitionEnter", function() {
    return {
	restrict: 'E',
	templateUrl: 'competition/enter.html',
	controller: function() {
	    
	    this.isEntered = function(competition) {
		// now need to get at the competitor objects
		// FIXME: need this to do something
		return false;;
	    };
	    this.notEntered = function(competition) {
		
		return !this.isEntered();
	    };

	    this.enrol = function(competition) {
		// code to enrol in a competition
		
	    };
	},
	controllerAs: "enrol"
    };
});


