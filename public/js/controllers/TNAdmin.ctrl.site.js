(function() {
    'use strict';
    angular
        .module('tna.Controllers')
        .controller('historyCtrl', historyCtrl)
        .controller('homeCtrl', homeCtrl)
        .controller('maintentanceCtrl', maintentanceCtrl)
        .controller('siteCtrl', siteCtrl)
        .controller('statisticCtrl', statisticCtrl);

    historyCtrl.$inject = ['$window'];
    homeCtrl.$inject = ['$http', '$log', '$window'];
    maintentanceCtrl.$inject = ['$window'];
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

})();