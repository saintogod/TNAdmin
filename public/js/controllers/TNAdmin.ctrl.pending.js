(function () {
    'use strict';
    angular.module('tna.Controllers').controller('pendingCtrl', pendingCtrl);

    pendingCtrl.$inject = ['$scope', 'pageService', '$timeout', '$window', '$log'];

    function pendingCtrl($scope, pageService, $timeout, $window, $log) {
        var self = this;
        $window.document.title = pageService.title;
        self.pendingList = [];

        /*self.gridOptions = {
            data: 'pctrl.pendingList',
            columnDefs : GridService.gridDefs.PendingGrid,
            enableFiltering: false,
            enableColumnMenu: false,
            enableSorting: true,
            enableRowSelection: true,
            multiSelect:true
        };*/

        self.title = 'hello world';
        self.CheckAll = CheckAll;
        self.checkedAll = false;
        self.GetPendingTasks = GetPendingTasks;
        self.DeleteTasks = DeleteTasks;

        self.GetPendingTasks();

        function GetPendingTasks(){
            pageService.getPendingTasks().then(function(resObj){
                $timeout(function(){
                    self.pendingList = resObj.data;
                });
            });
        }
        function DeleteTasks () {
            $log.log('delte tasks');
        }
        function CheckAll () {
            self.checkedAll = !self.checkedAll;
            $.each(self.pendingList, function(){
                this.selected = self.checkedAll;
            });
            $scope.$digest();
        }
    }
})(); 