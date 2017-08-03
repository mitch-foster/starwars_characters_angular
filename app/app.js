angular.module('swApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home',{
            url:'/',
            templateUrl:'../app/views/home/homeTemplate.html'
        })
        .state('characters',{
            url:'/characters',
            templateUrl:'../app/views/characters/characterTemplate.html'
        })

    $urlRouterProvider
            .otherwise('/');
})