angular.module('myApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('', '/');

$stateProvider
    .state('Home', {
        url: '/',
        template: '<h1>{{hello}}</h1>',
        controller: 'mainCtrl'
    })
    .state('About', {
        url: '/about',
        template: '<h1>{{hello}}</h1>',
        controller: 'aboutCtrl'
    })

    .state('roster', {
        url: '/roster',
        templateUrl: 'roster.html',
        controller: 'rosterCtrl'
    })

    .state('player', {
        url: '/player/:id',
        templateUrl: 'player.html',
        controller: 'playerCtrl'
    })

})