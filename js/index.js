const app = angular.module("target-acquired", ["ui.router", "ui.bootstrap"]);

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
            assignedTo: "Juan Cortes",
            location: {
                city: "Atlanta",
                state: "GA",
            },
            status: "Pending",
            industry: "Beverages",
            summary: "This is ATL, you better know Coke",
            contacts: ["Shhhhh"],
            financialPerformance: [
                {
                    month: 1,
                    earnings: 10,
                },
                {
                    month: 2,
                    earnings: 15,
                },
                {
                    month: 3,
                    earnings: 5,
                },
                {
                    month: 4,
                    earnings: 20,
                },
            ]
        },
        {
            name: "Chik-fil-a",
            assignedTo: "Juan Cortes",
            location: {
                city: "Atlanta",
                state: "GA",
            },
            status: "Pending",
            industry: "Beverages",
            summary: "This is ATL, you better know Coke",
            contacts: ["Shhhhh"],
            financialPerformance: [
                {
                    month: 1,
                    earnings: 10,
                },
                {
                    month: 2,
                    earnings: 15,
                },
                {
                    month: 3,
                    earnings: 5,
                },
                {
                    month: 4,
                    earnings: 20,
                },
            ]
        },
        {
            name: "OneTrust",
            assignedTo: "Juan Cortes",
            location: {
                city: "Atlanta",
                state: "GA",
            },
            status: "Pending",
            industry: "Beverages",
            summary: "This is ATL, you better know Coke",
            contacts: ["Shhhhh"],
            financialPerformance: [
                {
                    month: 1,
                    earnings: 10,
                },
                {
                    month: 2,
                    earnings: 15,
                },
                {
                    month: 3,
                    earnings: 5,
                },
                {
                    month: 4,
                    earnings: 20,
                },
            ]
        },
        {
            name: "Insiten",
            assignedTo: "Juan Cortes",
            location: {
                city: "Atlanta",
                state: "GA",
            },
            status: "Pending",
            industry: "Beverages",
            summary: "This is ATL, you better know Coke",
            contacts: ["Shhhhh"],
            financialPerformance: [
                {
                    month: 1,
                    earnings: 10,
                },
                {
                    month: 2,
                    earnings: 15,
                },
                {
                    month: 3,
                    earnings: 5,
                },
                {
                    month: 4,
                    earnings: 20,
                },
            ]
        },
        {
            name: "Coke",
            assignedTo: "Juan Cortes",
            location: {
                city: "Atlanta",
                state: "GA",
            },
            status: "Pending",
            industry: "Beverages",
            summary: "This is ATL, you better know Coke",
            contacts: ["Shhhhh"],
            financialPerformance: [
                {
                    month: 1,
                    earnings: 10,
                },
                {
                    month: 2,
                    earnings: 15,
                },
                {
                    month: 3,
                    earnings: 5,
                },
                {
                    month: 4,
                    earnings: 20,
                },
            ]
        },
        {
            name: "Coke",
            assignedTo: "Juan Cortes",
            location: {
                city: "Atlanta",
                state: "GA",
            },
            status: "Pending",
            industry: "Beverages",
            summary: "This is ATL, you better know Coke",
            contacts: ["Shhhhh"],
            financialPerformance: [
                {
                    month: 1,
                    earnings: 10,
                },
                {
                    month: 2,
                    earnings: 15,
                },
                {
                    month: 3,
                    earnings: 5,
                },
                {
                    month: 4,
                    earnings: 20,
                },
            ]
        },
        {
            name: "Coke",
            assignedTo: "Juan Cortes",
            location: {
                city: "Atlanta",
                state: "GA",
            },
            status: "Pending",
            industry: "Beverages",
            summary: "This is ATL, you better know Coke",
            contacts: ["Shhhhh"],
            financialPerformance: [
                {
                    month: 1,
                    earnings: 10,
                },
                {
                    month: 2,
                    earnings: 15,
                },
                {
                    month: 3,
                    earnings: 5,
                },
                {
                    month: 4,
                    earnings: 20,
                },
            ]
        },
        {
            name: "Coke",
            assignedTo: "Juan Cortes",
            location: {
                city: "Atlanta",
                state: "GA",
            },
            status: "Pending",
            industry: "Beverages",
            summary: "This is ATL, you better know Coke",
            contacts: ["Shhhhh"],
            financialPerformance: [
                {
                    month: 1,
                    earnings: 10,
                },
                {
                    month: 2,
                    earnings: 15,
                },
                {
                    month: 3,
                    earnings: 5,
                },
                {
                    month: 4,
                    earnings: 20,
                },
            ]
        },
        {
            name: "Coke",
            assignedTo: "Juan Cortes",
            location: {
                city: "Atlanta",
                state: "GA",
            },
            status: "Pending",
            industry: "Beverages",
            summary: "This is ATL, you better know Coke",
            contacts: ["Shhhhh"],
            financialPerformance: [
                {
                    month: 1,
                    earnings: 10,
                },
                {
                    month: 2,
                    earnings: 15,
                },
                {
                    month: 3,
                    earnings: 5,
                },
                {
                    month: 4,
                    earnings: 20,
                },
            ]
        },
        {
            name: "Coke",
            assignedTo: "Juan Cortes",
            location: {
                city: "Atlanta",
                state: "GA",
            },
            status: "Pending",
            industry: "Beverages",
            summary: "This is ATL, you better know Coke",
            contacts: ["Shhhhh"],
            financialPerformance: [
                {
                    month: 1,
                    earnings: 10,
                },
                {
                    month: 2,
                    earnings: 15,
                },
                {
                    month: 3,
                    earnings: 5,
                },
                {
                    month: 4,
                    earnings: 20,
                },
            ]
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

app.controller("HeaderController", function($rootScope, $scope, TargetData) {
    $rootScope.targets = TargetData.data
    $scope.targets = $rootScope.targets;
});

app.controller("ListController", function($rootScope, $scope) {
    $scope.targets = $rootScope.targets;
});

app.controller("SingleController", function($rootScope, $scope, $stateParams, $state, TargetData) {
    $scope.edit = function() {
        $scope.editing = true;
    };

    $scope.save = function() {
        $scope.editing = false;
    };

    $scope.delete = function() {
        _.remove($rootScope.targets, {name: $stateParams.name});
        $state.go("list");
    };

    $scope.statusOptions = TargetData.statuses;

    if ($stateParams.name) {
        $scope.new = false;
        $scope.target = _.find($rootScope.targets, {name: $stateParams.name});
        $scope.editing = false;
    } else {
        $scope.edit();
    }

});
