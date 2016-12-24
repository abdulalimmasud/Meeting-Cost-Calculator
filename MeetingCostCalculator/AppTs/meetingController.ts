/// <reference path="_all.ts" />

module meetingCostCalculator {
    'use strict';

    

    export class meetingController {
        private cancelPromise: any;

        public static $inject = ["$scope", "$timeout", "storageService"];

        constructor(
            private $scope: IMeetingScope,
            private $timeout: ng.ITimeoutService,
            private storageService: IStorageService) {
            var settings = storageService.getSettings();

            $scope.people = settings.people;
            $scope.averageSalary = settings.averageSalary;

            $scope.$watch("people", () => this.saveSettings);
            $scope.$watch("averageSalary", () => this.saveSettings);

            $scope.running = false;
            $scope.cost = 0;
            $scope.vm = this;
        }
        saveSettings() {
            this.storageService.saveSettings(
                new settingsModel(this.$scope.people, this.$scope.averageSalary));
        }
        calculateCost() {
            return (this.$scope.people * this.$scope.averageSalary) / (26 * 8 * 60 * 60);
        }

        tick() {
            var self = this;
            self.cancelPromise = self.$timeout(function work() {
                self.$scope.cost += self.calculateCost();
                self.cancelPromise = self.$timeout(work, 1000);
            }, 1000)
        }
        start() {
            this.$scope.running = true;
            this.tick();
        }
        stop() {
            this.$scope.running = false;
            this.$timeout.cancel(this.cancelPromise);
        }
        reset() {
            this.$scope.cost = 0;
        }
    }
}