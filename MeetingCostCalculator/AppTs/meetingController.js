/// <reference path="_all.ts" />
var meetingCostCalculator;
(function (meetingCostCalculator) {
    'use strict';
    var meetingController = (function () {
        function meetingController($scope, $timeout, storageService) {
            var _this = this;
            this.$scope = $scope;
            this.$timeout = $timeout;
            this.storageService = storageService;
            var settings = storageService.getSettings();
            $scope.people = settings.people;
            $scope.averageSalary = settings.averageSalary;
            $scope.$watch("people", function () { return _this.saveSettings; });
            $scope.$watch("averageSalary", function () { return _this.saveSettings; });
            $scope.running = false;
            $scope.cost = 0;
            $scope.vm = this;
        }
        meetingController.prototype.saveSettings = function () {
            this.storageService.saveSettings(new meetingCostCalculator.settingsModel(this.$scope.people, this.$scope.averageSalary));
        };
        meetingController.prototype.calculateCost = function () {
            return (this.$scope.people * this.$scope.averageSalary) / (26 * 8 * 60 * 60);
        };
        meetingController.prototype.tick = function () {
            var self = this;
            self.cancelPromise = self.$timeout(function work() {
                self.$scope.cost += self.calculateCost();
                self.cancelPromise = self.$timeout(work, 1000);
            }, 1000);
        };
        meetingController.prototype.start = function () {
            this.$scope.running = true;
            this.tick();
        };
        meetingController.prototype.stop = function () {
            this.$scope.running = false;
            this.$timeout.cancel(this.cancelPromise);
        };
        meetingController.prototype.reset = function () {
            this.$scope.cost = 0;
        };
        meetingController.$inject = ["$scope", "$timeout", "storageService"];
        return meetingController;
    })();
    meetingCostCalculator.meetingController = meetingController;
})(meetingCostCalculator || (meetingCostCalculator = {}));
