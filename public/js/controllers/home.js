'use strict';

var module = angular.module( 'homeCtrl', [] );

module.controller( 'homeController', [ '$scope', HomeConstructor ] );

function HomeConstructor( $scope ){
    $scope.name = 'homeCtrl';
};