(function() {
    'use strict';
    angular
        .module('tna.Controllers')
        .controller('historyCtrl', historyCtrl)
        .controller('homeCtrl', homeCtrl)
        .controller('maintentanceCtrl', maintentanceCtrl)
        .controller('nodeCtrl', nodeCtrl)
        .controller('pendingCtrl', pendingCtrl)
        .controller('siteCtrl', siteCtrl)
        .controller('statisticCtrl', statisticCtrl);

    historyCtrl.$inject = ['$window'];
    homeCtrl.$inject = ['$http', '$log', '$window'];
    maintentanceCtrl.$inject = ['$window'];
    nodeCtrl.$inject = ['$rootScope', '$location', '$http', '$log', '$timeout'];
    pendingCtrl.$inject = ['pageService', '$window'];
    siteCtrl.$inject = ['$location', '$window', 'favico'];
    statisticCtrl.$inject = ['$window'];

    function siteCtrl($location, $window, favico) {
        var self = this;
        $window.document.title = 'Saint';
        self.location = $location;
        favico.badge(1);
    }

    function homeCtrl($http, $log, $window) {
        var self = this;
        self.$http = $http;
        self.$log = $log;
        $window.document.title = 'TestNode Administrator';
    }

    function pendingCtrl(pageService, $window) {
        //var self = this;
        $window.document.title = pageService.title;
    }

    function historyCtrl($window) {
        //var self = this;
        $window.document.title = 'History of tasks';
    }

    function maintentanceCtrl($window) {
        //var self = this;
        $window.document.title = 'Maintentance the nodes';
    }

    function statisticCtrl($window) {
        //var self = this;
        $window.document.title = 'Statistic of this site.';
    }

    function nodeCtrl($rootScope, $location, $http, $log, $timeout) {
        var self = this;
        self.GetStatusCss = GetStatusCss;
        self.GetNodeInfo = GetNodeInfo;
        self.RefreshStatus = RefreshStatus;
        self.IsTaskFinished = IsTaskFinished;

        function GetStatusCss(node) {
            switch (node.Status) {
                case 'Locked':
                    if (node.TaskType === 'Lock') {
                        return 'node-locked';
                    }
                    return node.Stage;
                case 'Offline':
                    return 'node-Offline';
                case 'Idle':
                    return 'node-Idle';
            }
        }

        function GetNodeInfo(node) {
            if (node.NodeName) {
                $http.get('/api/node/' + node.NodeName)
                    .success(function(data, status) {
                        $timeout(function() {
                            angular.extend(node, data);
                            node.Status = status;
                        });
                    }).error(function(data, status) {
                        $timeout(function() {
                            node = {
                                Status: status
                            };
                        });
                    });
            }
        }

        function RefreshStatus() {
            $log.log('RefreshStatus');
        }

        function IsTaskFinished(node) {
            switch (node.TaskType) {
                case 'Lock':
                    return true;
                case 'Build':
                    return node.Stage === 'BuildSucceed' || node.Stage === 'BuildFailed';
                case 'Test':
                    return node.Stage === 'TestSucceed' || node.Stage === 'TestFailed';
                default:
                    return false;
            }
        }
    }
})();