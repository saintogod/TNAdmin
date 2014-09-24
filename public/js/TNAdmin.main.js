(function() {
    'use strict';
    if (!String.prototype.format) {
        String.prototype.format = function() {
            var args = arguments;
            return this.replace(/{(\d+)}/g, function(match, number) {
                return typeof args[number] !== 'undefined' ? args[number] : match;
            });
        };
    }
    if (!String.format) {
        String.format = function(format) {
            var args = Array.prototype.slice.call(arguments, 1);
            return format.replace(/{(\d+)}/g, function(match, number) {
                return typeof args[number] !== 'undefined' ? args[number] : match;
            });
        };
    }

    var tna = {
        Name: 'TestNodeAdministrator',
        Discription: 'This is all the angular stuff for this site.'
    };
    angular.module('tna.Services', []);
    angular.module('tna.Controllers', ['favico.Provider']);
    angular.module('tna.Directives', ['tna.Controllers']);

    angular.module('tnAdmin', ['ngRoute', 'tna.Services', 'tna.Directives', 'tna.Controllers', 'ngAnimate', 'ui.grid', 'ui.grid.selection', 'ui.bootstrap']);

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
        }).filter('machinesText', function() {
            return function(inputVal) {
                if( !inputVal || !angular.isArray(inputVal) || inputVal.length === 0) {
                    return 'Any machine';
                } else {
                    return inputVal.join(', ');
                }
            };
        });

    configs.$inject = ['$routeProvider', '$locationProvider', 'favicoProvider'];
    settings.$inject = ['$rootScope', '$location'];

    function configs($routeProvider, $locationProvider, favicoProvider) {
        $routeProvider.when('/pending', {
            templateUrl: '/partials/pending',
            controller: 'pendingCtrl',
            controllerAs: 'pctrl',
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
        favicoProvider.bgColor('#d00');
        nodeService.$inject = ['$rootScope', '$http', '$log'];
        pageService.$inject = ['$rootScope', '$http', '$log'];

        function pageService($rootScope, $http, $log) {
            return {
                title: 'Pending .... page',
                getPendingTasks: getPendingTasks
            };

            function getPendingTasks() {
                return $http.get('/api/pending');
            }
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