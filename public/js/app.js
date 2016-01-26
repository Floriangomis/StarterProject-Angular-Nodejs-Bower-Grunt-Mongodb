/*
* Entry point of the Angular Application
*/

'use strict';

var app = angular.module( 'appFront', [ 'homeCtrl', 'aboutCtrl', 'ngRoute' ] );

app.config( ['$locationProvider', '$routeProvider', function( $locationProvider, $routeProvider ){
    $locationProvider.html5Mode( true );
    
    $routeProvider.
      when('/', {
        templateUrl: 'templates/home.html',
        controller: 'homeController'
      }).
      when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'aboutController'
      }).
      otherwise({
        redirectTo: '/'
      });
} ] );