'use strict';

var app = angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/home', {
	    templateUrl: 'static/app/home/home.html',
	    controller: 'HomeCtrl'
	});
    }]);

app.controller('HomeCtrl', [ '$http', function($http) {
    var view = this;

    $http.get('../../eighty/datetime_as_timestamp').success(function(data){
	view.today = data['now'];
    });
    //this.today = 1422633165.465848 * 1000;
}]);
