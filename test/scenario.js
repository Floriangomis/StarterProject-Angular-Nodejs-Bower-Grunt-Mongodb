describe( 'Controller constructor', function(){
    
    var homeController, scope, controller;

    // Before each test, launch the module of the App
    beforeEach( angular.mock.module( 'appFront' ) );
    beforeEach( angular.mock.inject(function(_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
    }));

    it('should create home controller with property name equal to "homeCtrl"', function() {
        var scope = {};
        var controller = $controller( 'homeController', { $scope: scope } );

        scope.name.should.equal('homeCtrl');
    });
    
    it('should create about controller with property name equal to "aboutCtrl"', function() {
        var scope = {};
        var controller = $controller( 'aboutController', { $scope: scope } );

        scope.name.should.equal('aboutCtrl');
    });
});