'use strict';

angular.module('myApp.teams', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/teams', {
    templateUrl: 'teams/teams.html',
    controller: 'TeamsCtrl'
  });
}])

.controller('TeamsCtrl', [function() {

}]);
