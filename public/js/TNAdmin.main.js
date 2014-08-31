
(function() {
    'use strict';
    var tna = {
        Name: 'TestNodeAdministrator',
        Discription: 'This is all the angular stuff for this site.'
    };
    angular.module('tna.Services', []);
    angular.module('tna.Controllers', ['favico.Provider']);
    angular.module('tna.Directives', ['tna.Controllers']);

    angular.module('tnAdmin', ['ngRoute', 'tna.Services', 'tna.Directives', 'tna.Controllers']);

    angular.module('tnAdmin')
        .config(configs)
        .run(settings)
        .filter('svnFilter', function() {
            return function(inputVal) {
                if (typeof(inputVal) !== 'string') {
                    return inputVal;
                }
                var array = inputVal.split('/');
                return array[array.length - 1];
            };
        }).filter('encodeUri', function() {
            return window.encodeURIComponent;
        }).filter('decodeUri', function() {
            return window.decodeURIComponent;
        }).filter('hasHtmlResult', function() {
            return function(inputVal) {
                return inputVal && inputVal.HTML;
            };
        }).filter('hasXmlResult', function() {
            return function(inputVal) {
                return inputVal && inputVal.XML;
            };
        });

    configs.$inject = ['$routeProvider', '$locationProvider', 'favicoProvider'];
    settings.$inject = ['$rootScope', '$location'];

    function configs($routeProvider, $locationProvider, favicoProvider) {
        $routeProvider.when('/pending', {
            templateUrl: '/partials/pending',
            controller: 'pendingCtrl',
            resolve: {
                pageService: pageService
            }
        }).when('/history', {
            templateUrl: '/partials/history',
            controller: 'historyCtrl'
        }).when('/maintentance', {
            templateUrl: '/partials/maintentance',
            controller: 'maintentanceCtrl'
        }).when('/statistic', {
            templateUrl: '/partials/statistic',
            controller: 'statisticCtrl'
        }).when('/node/:nodeName', {
            templateUrl: '/partials/node',
            controller: 'nodeCtrl'
        }).otherwise({
            templateUrl: '/partials/nodelist',
            controller: 'homeCtrl',
            resolve: {
                nodeService: nodeService
            }
        });
        $locationProvider.html5Mode(true).hashPrefix('!');

        nodeService.$inject = ['$rootScope', '$http', '$log'];

        function pageService() {
            return {
                title: 'Pending .... page'
            };
        }

        function nodeService($rootScope, $http, $log) {
            return $http.get('/api/nodelist')
                .success(function(data) {
                    $rootScope.NodeList = data;
                })
                .error(function(data, status, headers) {
                    $log.error('Data: ' + data + 'Status: ' + status + 'Headers: ' + headers);
                });
        }

    }

    function settings($rootScope, $location) {
        $rootScope.$on('$locationChangeSuccess', function() {
            var path = $location.path();
            var matched = false;
            $('#tna-navbar ul:first a').each(function() {
                if ($(this).attr('href') === path) {
                    $(this).parent().toggleClass('active', true);
                    matched = true;
                } else {
                    $(this).parent().toggleClass('active', false);
                }
            });
            if (!matched) {
                $('#tna-navbar ul:first a:first').toggleClass('active', true);
            }
        });
    }
    window.tna = tna;
})();