(function () {
    'use strict';

    angular
        .module('app')
        .config(mainRouter);

    mainRouter.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider'];

    function mainRouter($stateProvider, $locationProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
        //Change the default hash prefix from #! to #.
        //Rather than mydomain.com/#!/a/b/c the URL will become mydomain.com/#/a/b/c
        $locationProvider.hashPrefix('');

        $urlMatcherFactoryProvider.caseInsensitive(true);
        $urlMatcherFactoryProvider.strictMode(false);

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: '/home/home.html'
            });
        
        $urlRouterProvider.otherwise('/');
    }
    
})();