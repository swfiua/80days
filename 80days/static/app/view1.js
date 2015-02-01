'use strict';

var app = angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {
	    templateUrl: 'home/home.html',
	    controller: 'HomeCtrl'
	});
    }]);

app.controller('HomeCtrl', [ '$http', function($http) {
    var view = this;

//    $http.get('/today.json').success(function(data){
//	view.today = data['today'];
//    });
    this.today = 1422633165.465848 * 1000;
}]);
