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

    this.refresh = function() {
	$http.get('/eighty/competitions').success(function(data){
	    view.competitions = data;
	});

	$http.get('/eighty/competitors').success(function(data){
	    view.competitors = data;
	});

	$http.get('/eighty/everything_for_user').success(function(data){
	    view.user_info = data;
	});
    };

    this.refresh();

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
	// console.log('compo: ' + (competition && competition.name));
	// console.log('mine: ' + this.myCompetitions());f
	if (!competition) { return false; }
	
	var entered;
	var my_comps = this.myCompetitions();
	
	console.log("my_comps number: " + my_comps.length);

    
	for (var index in my_comps) {
	    var entered = my_comps[index];
	    //console.log(entered.name);
	    //console.log("eid/cid: " + entered.id + ' ' + competition.id)

	    if (entered.id == competition.id) {
		return true;
	    }
	}
	return false;
    };

    this.isTeamMember = function(competition) {
	// is user a member of a team in the competition
	if (!competition) { return false; }

	var my_teams = this.myTeams();
	console.log("my_teams number: " + my_teams.length);

	console.log(my_teams);
	
	
	var my_team_ids = [];

	my_teams.forEach(function(team) {
	    my_team_ids.push(team.id);
	});

	console.log('my team ids: ' + my_team_ids);
	
	var hits = [];
	hits = competition.teams.filter(function(team) {
	     return team.id in my_team_ids;
	});

	return hits.length;
    };

    this.teamsNeedingMembers = function(competition) {
	var needing_members = competition.teams.filter(function(team) {
	    console.log(team.team_members.length < competition.team_size);
	    console.log(team.team_members.length);
	    console.log(competition.team_size);

	    return team.team_members.length < competition.team_size;
	});
	console.log('needong: ');
	needing_members.forEach(function(team) { console.log(team.name);});

	return needing_members;
    };

    this.notEntered = function(competition) {
	
	return !this.isEntered(competition);
    };

    this.myCompetitions = function() {
	return this.user_info.competitions;
    };
    
    this.myTeams = function() {
	return this.user_info.teams;
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
	//replace: true,
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
	    
	    this.enrol = function(competition, compsCtrl) {
		// code to enrol in a competition
		
		// save it and add it to the competion
		//competition.competitors.push(this.competitor)

		$http.post('/eighty/create_competitor/', this.competitor).
		    success(function(competitor, status, headers, config) {
			alert("Competitor Created" + competitor);


			// And save the competition
			$http.post('/eighty/add_competitor/', {
			    competition_id: competition.id, 
			    competitor_id: competitor.id}).
			    success(function(data, status, headers, config) {
				//alert("Competition Updated" + data);
				
				// Now need to refresh the models
				compsCtrl.refresh()
			    }).
			    error(function(data, status, headers, config) {
				//alert("Problem updating competition" + data);
			    });
		    }).
		    error(function(data, status, headers, config) {
			alert("Problem creating competitor" + data);
		    });
		
		this.competitor = {};
	    };
	},
	controllerAs: "enrol"
    };
}]);

app.directive("teamList", function() {
    return {
	restrict: 'E',
	templateUrl: 'teams/team-list.html',
	controller: function() {
	},
	controllerAs: "teams",
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


// FIXME this code is identical to the appTabs, bar a couple of names
// Actually, it is just the controller that is the thing I want to 
// re-use.  
app.directive("competitionTabs", function() {
    return {
	restrict: 'E',
	templateUrl: 'competition/tabs.html',
	controller: function() {
	    this.tab = 1;
	
	    this.selectTab = function(setTab){
		this.tab = setTab;
	    };

	    this.isSelected = function(checkTab) {
		return this.tab === checkTab;
	    };
	},

	controllerAs: "compTab"
    };
});
