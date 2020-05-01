function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
       .state('home', {
            url: "/home",
            templateUrl: "views/home.html"
        })
        .state('add', {
            url: "/add",
            templateUrl: "views/add.html"
        })
}

angular
    .module('app')
    .config(config)