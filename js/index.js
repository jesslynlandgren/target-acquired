const app = angular.module("target-acquired", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state({
        name: "list",
        url: "/",
        templateUrl: "views/list.html",
        controller: "ListController",
    })
    .state({
        name: "single",
        url: "/:name?",
        templateUrl: "views/single.html",
        controller: "SingleController",
    });

    $urlRouterProvider.otherwise('/');
});

app.factory("TargetData", function() {
    const service = {};

    service.data = [
        {
            name: "Coke",
            location: {
                city: "Atlanta",
                state: "GA",
            },
            status: "researching",
            industry: "Beverages",
            summary: "This is ATL, you better know Coke",
            contacts: "Shhhhh",
            finance: "I keep them afloat",
        },
        {
            name: "Insiten",
            location: {
                city: "Peachtree Corners",
                state: "GA",
            },
            status: "approved",
            industry: "Technology",
            summary: "Everyone I know works here",
            contacts: "John, Juan, and Eli",
            finance: "",
        },
        {
            name: "OneTrust",
            location: {
                city: "London",
                state: "UK",
            },
            status: "declined",
            industry: "Privacy",
            summary: "Software for privacy professionals",
            contacts: "Jesslyn Landgren",
            finance: "Sharp increase over past 6 months",
        },
        {
            name: "Chik-fil-a",
            location: {
                city: "Atlanta",
                state: "GA",
            },
            status: "approved",
            industry: "Fast Food",
            summary: "Eat mor chikn",
            contacts: "The cows?",
            finance: "Steady for the past two quarters",
        },
        {
            name: "Bank of America",
            location: {
                city: "Charlotte",
                state: "NC",
            },
            status: "researching",
            industry: "Financial",
            summary: "",
            contacts: "John Smith",
            finance: "In second fiscal year of decline",
        },
        {
            name: "Microsoft",
            location: {
                city: "Seattle",
                state: "WA",
            },
            status: "pending",
            industry: "Technology",
            summary: "Develops, manufactures, licenses, supports and sells computer software, consumer electronics and personal computers and services",
            contacts: "Bill Gates",
            finance: "Up 5% from last quarter",
        },
        {
            name: "Salesforce",
            location: {
                city: "San Francisco",
                state: "CA",
            },
            status: "approved",
            industry: "Technology",
            summary: "American cloud computing company headquartered in San Francisco, California",
            contacts: "Billy Bob",
            finance: "Looks strong",
        },
        {
            name: "McDonalds",
            location: {
                city: "Oakbrook",
                state: "IL",
            },
            status: "declined",
            industry: "Fast Food",
            summary: "I'm lovin it",
            contacts: "Joe Smith",
            finance: "4 quarters of continuous growth",
        },

    ];

    service.statuses = [
        "researching",
        "pending",
        "approved",
        "declined",
    ];

    return service;
});

app.controller("HeaderController", function($rootScope, $scope, TargetData, $state) {
    $rootScope.targets = TargetData.data;
    $scope.targets = $rootScope.targets;

    $scope.search = function(searchString) {
        $scope.results = _.filter($scope.targets, function(target) {
            return target.name.toLowerCase().startsWith(searchString.toLowerCase());
        });
    };

    $scope.go = function(event) {
        if (event.which === 13) {
            $scope.focused = false;
            $scope.query = "";
            $state.go("single", {name: $scope.results[0].name});
        }
    };

    $scope.focus = function() {
        $scope.focused = true;
        $scope.query = "";
        $scope.results = $scope.targets;
    };

    $scope.blur = function() {
        $scope.focused = false;
        $scope.query = "";
        $scope.results = $scope.targets;
    };

});

app.controller("ListController", function($rootScope, $scope) {
    $scope.hover = false;
    $scope.targets = $rootScope.targets;
});

app.controller("SingleController", function($rootScope, $scope, $stateParams, $state, TargetData) {

    $scope.statusOptions = TargetData.statuses;

    $scope.edit = function() {
        $scope.editing = true;
    };

    $scope.save = function() {
        if ($scope.new) {
            const newTarget = {
                name: $scope.target.name,
                location: {
                    city: $scope.target.location.city,
                    state: $scope.target.location.state,
                },
                status: $scope.target.status,
                industry: $scope.target.industry,
                summary: $scope.target.summary,
                contacts: $scope.target.contacts,
                finance: $scope.target.finance,
            };
            $rootScope.targets.push(newTarget);
            $state.go("list");
        }
        $scope.editing = false;
    };

    $scope.delete = function() {
        _.remove($rootScope.targets, {name: $stateParams.name});
        $state.go("list");
    };

    if ($stateParams.name) {
        $scope.new = false;
        $scope.target = _.find($rootScope.targets, {name: $stateParams.name});
        $scope.editing = false;
    } else {
        $scope.new = true;
        $scope.target = {
            name: "",
            location: {
                city: "",
                state: "",
            },
            status: "",
            industry: "",
            summary: "",
            contacts: "",
            finance: "",
        };
        $scope.edit();
    }

});
