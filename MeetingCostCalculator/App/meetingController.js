/// <reference path="E:\Study\Project\MeetingCostCalculator\MeetingCostCalculator\MeetingCostCalculator\Scripts/angular.min.js" />

(function (app) {
    var meetingController = function ($scope, $timeout, storageService) {
        var settings = storageService.getSettings();

        $scope.people = settings.people;
        $scope.averageSalary = settings.averageSalary;

        var saveSettings = function () {
            storageService.saveSettings({ people: $scope.people, averageSalary: $scope.averageSalary });
        }

        $scope.$watch("people", saveSettings);
        $scope.$watch("averageSalary", saveSettings);

        $scope.running = false;
        $scope.cost = 0;

        var calculateCost = function () {
            return ($scope.people * $scope.averageSalary) / (26* 8 * 60 * 60);
        }

        var cancelPromise;
        var tick = function () {
            cancelPromise = $timeout(function work() {
                $scope.cost += calculateCost();
                cancelPromise = $timeout(work, 1000);
            },1000)
        }

        $scope.start = function () {
            $scope.running = true;
            tick();
        }
        $scope.stop = function () {
            $scope.running = false;
            $timeout.cancel(cancelPromise);
        }
        $scope.reset = function () {
            $scope.cost = 0;
        }
    }
    app.controller("meetingController", ["$scope","$timeout","storageService", meetingController]);
})(angular.module("app"));