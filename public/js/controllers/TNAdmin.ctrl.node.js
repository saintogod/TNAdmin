(function () {
    'use strict';
    angular.module('tna.Controllers').controller('nodeCtrl', nodeCtrl);
    nodeCtrl.$inject = ['$rootScope', '$location', '$http', '$log', '$timeout'];

    function nodeCtrl($rootScope, $location, $http, $log, $timeout) {
        var self = this;
        self.GetStatusCss = GetStatusCss;
        self.GetNodeInfo = GetNodeInfo;
        self.RefreshStatus = RefreshStatus;
        self.IsTaskFinished = IsTaskFinished;
        self.RunAgain = RunAgain;
        self.RunFailed = RunFailed;
        self.LockNode = LockNode;
        self.ReleaseNode = ReleaseNode;
        self.Duplicate = Duplicate;

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

        /*Node level operations*/

        function RefreshStatus() {
            $log.log('RefreshStatus');
        }

        function RunAgain(){

        }

        function RunFailed () {
            
        }

        function LockNode () {
            
        }

        function ReleaseNode () {
            
        }

        function Duplicate(){

        }
        /**/
    }
})(); 