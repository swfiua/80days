'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$html', function($html) {
    var view = this;

    $html.get('/today.json').success(function(data){
	view.today = data['today'];
    });
    this.today = 1422633165.465848 * 1000;
}]);
