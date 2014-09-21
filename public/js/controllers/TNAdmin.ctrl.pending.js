(function () {
    'use strict';
    angular.module('tna.Controllers').controller('pendingCtrl', pendingCtrl);

    pendingCtrl.$inject = ['pageService', '$timeout', '$window', 'GridService'];

    function pendingCtrl(pageService, $timeout, $window, GridService) {
        var self = this;
        $window.document.title = pageService.title;
        self.pendingList = [];
        getPendings();

        self.gridOptions = {
            data: 'pctrl.pendingList',
            columnDefs : GridService.gridDefs.PendingGrid,
            enableFiltering: false,
            enableColumnMenu: false,
            enableSorting: true,
            enableRowSelection: true,
            multiSelect:true
        };
        self.title = 'hello world';

        function getPendings(){
            pageService.getPendingTasks().then(function(resObj){
                $timeout(function(){
                    self.pendingList = resObj.data;
                });
            });
        }
    }
})(); 