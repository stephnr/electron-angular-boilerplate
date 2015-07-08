'use strict';

describe('Controller: HomeController', function() {
    var rootScope, scope, controller, httpBackend;

    beforeEach(module('Home'));

    beforeEach(inject(function($controller, $rootScope, $httpBackend) {
        httpBackend = $httpBackend;
        scope = $rootScope.$new();
        controller = $controller('HomeController', { '$scope': scope });
        rootScope = $rootScope;
        scope.$digest();
    }));

    it('should work', function() {
        expect(scope).not.toEqual({});
    });

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });
});
