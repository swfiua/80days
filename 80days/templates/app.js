'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.competitions',
  'myApp.teams',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]).

config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
});

app.config(function($httpProvider) {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
});

app.directive("appTabs", function() {
    return {
	restrict: 'E',
	templateUrl: 'components/tabs/tabs.html',
	controller: function() {
	    this.tab = 2;
	
	    this.selectTab = function(setTab){
		this.tab = setTab;
	    };

	    this.isSelected = function(checkTab) {
		return this.tab === checkTab;
	    };
	},

	controllerAs: "tab"
    };
});

