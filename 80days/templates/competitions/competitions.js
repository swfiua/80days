'use strict';

angular.module('myApp.competitions', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/competitions', {
    templateUrl: 'competitions/competitions.html',
    controller: 'CompetitionsCtrl'
  });
}])

.controller('CompetitionsCtrl', [ '$http', function($http) {
    var view = this;

    $http.get('/eighty/competitions').success(function(data){
	view.competitions = data;
    });
    
}]);
