;(function () {
	'use strict';
	angular.module('bootstap-alert')
			.directive('alertMsg', alertMsg);
         
	/*@ngInject*/
	alertMsg.$inject = ['$timeout'];
    function alertMsg($timeout) {
        return {
        	restrict: 'E',
            scope:{
               alert: '='
            },
            link: function(scope, element, attrs, ctrl) {
                var timeoutId;

                element.on('$destroy', function() {
                  $timeout.cancel(timeoutId);
                });

                // will hide the alert box after certain interval by default = 10 seconds if hiddable set to `true`
                if(scope.alert.hiddable) {
                    timeoutId = $timeout(function() {
                        scope.$apply(function(){
                            scope.alert.show = false;
                        });
                    }, 10000);
                }
                
            },
            templateUrl:'bootstrap-alert/alert.message.template.html'           
        };
    };
})();
