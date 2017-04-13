;(function () {
    'use strict';

	// Define the `alertApp` module
	angular.module('alertApp', [
	  'bootstap-alert'
	])
	.controller('AlertController' , AlertController);

	/*@ngInject*/
    AlertController.$inject = ['$scope'];
	function AlertController($scope) {

		$scope.alertSuccess = {
          type: 'alert-success',
          message: 'This alert box indicates a successful or positive action. Alert will disappear after 7 Seconds',
          show: true,
          hiddable: true
        };

        $scope.alertDanger = {
          type: 'alert-danger',
          message: 'This alert box indicates a dangerous or potentially negative action. Alert will disappear after 7 Seconds',
          show: true,
          hiddable: true
        };
        

        $scope.alertInfo = {
          type: 'alert-info',
          message: ' This alert box indicates a neutral informative change or action.',
          show: true,
          hiddable: false
        };

        $scope.alertWarning = {
          type: 'alert-warning',
          message: ' This alert box indicates a neutral informative change or action.',
          show: true,
          hiddable: false
        };
	};

})();