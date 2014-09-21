(function () {
    'use strict';
    angular
        .module('tna.Directives')
        .directive('nodeTask', nodeTask);
        
    nodeTask.$inject = ['$log', '$timeout'];

    function nodeTask ($log, $timeout) { 
        var directive = {
            restrict: 'EA',
            scope: true,
            templateUrl: '/templates/nodetask',
            controller: 'nodeCtrl',
            controllerAs: 'nctrl',
            link: link
        };
        return directive;

        function link(scope, iElement){
            $timeout(function(){
                $('[data-toggle="tooltip"]', iElement).tooltip();
                //$log.log(scope.node.NodeName+ " Started.");
            });
        }
    }
})();