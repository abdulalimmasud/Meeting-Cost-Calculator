/// <reference path="_all.ts" />
var meetingCostCalculator;
(function (meetingCostCalculator) {
    'use strict';
    var meetingController = (function () {
        function meetingController($scope, $timeout, storageService) {
            this.$scope = $scope;
            var settings = storageService.getSettings();
            $scope.people = settings.people;
            $scope.averageSalary = settings.averageSalary;
            var saveSettings = function () {
                storageService.saveSettings({ people: $scope.people, averageSalary: $scope.averageSalary });
            };
            $scope.$watch("people", saveSettings);
            $scope.$watch("averageSalary", saveSettings);
            $scope.running = false;
            $scope.cost = 0;
            $scope.calculateCost = function () {
                return ($scope.people * $scope.averageSalary) / (26 * 8 * 60 * 60);
            };
            var cancelPromise;
            var tick = function () {
                cancelPromise = $timeout(function work() {
                    $scope.cost += $scope.calculateCost();
                    cancelPromise = $timeout(work, 1000);
                }, 1000);
            };
            $scope.start = function () {
                $scope.running = true;
                tick();
            };
            $scope.stop = function () {
                $scope.running = false;
                $timeout.cancel(cancelPromise);
            };
            $scope.reset = function () {
                $scope.cost = 0;
            };
        }
        meetingController.$inject = ["$scope", "$timeout", "storageService"];
        return meetingController;
    })();
    meetingCostCalculator.meetingController = meetingController;
})(meetingCostCalculator || (meetingCostCalculator = {}));
