'use strict';

var app = angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/view1', {
	    templateUrl: 'view1/view1.html',
	    controller: 'View1Ctrl'
	});
    }]);

app.controller('View1Ctrl', [ '$http', function($http) {
    var view = this;

//    $http.get('/today.json').success(function(data){
//	view.today = data['today'];
//    });
    this.today = 1422633165.465848 * 1000;
}]);
