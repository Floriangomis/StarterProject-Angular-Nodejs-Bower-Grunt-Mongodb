/*
* Entry point of the Angular Application
*/

'use strict';

angular.module( 'appFront', [] )
    .config(function( $locationProvider ){
        $locationProvider.html5Mode( true );
    });