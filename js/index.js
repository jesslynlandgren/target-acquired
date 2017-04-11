const app = angular.module("target-acquired", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state({
        name: "home",
        url: "/",
        templateUrl: "views/test.html",
        controller: "HomeController",
    });

    $urlRouterProvider.otherwise('/');
});

app.factory("data", function() {
    const data = [{
            name: 'J.R. Andersson LLC',
            status: 'researching',
            companyInfo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis enim pharetra, pharetra massa et, dictum nibh. Nullam in lorem at ex rutrum ornare.',
            keyContacts: ['May Richards', 'Dana Velasquez', 'Tanya Solis'],
            financialPerformance: 'Up 25% from last quarter'
        },
    ];

    return data;
});

app.controller("HomeController", function() {
    console.log("YOURE IN THE HOME CONTROLLER");
});
