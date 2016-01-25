/*
* Entry point of the Angular Application
*/

'use strict';

var app = angular.module( 'appFront', [] );

app.config(function( $locationProvider ){
    $locationProvider.html5Mode( true );
});