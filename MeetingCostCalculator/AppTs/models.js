/// <reference path="_all.ts" />
var meetingCostCalculator;
(function (meetingCostCalculator) {
    'use strict';
    var settingsModel = (function () {
        function settingsModel(people, averageSalary) {
            this.people = people;
            this.averageSalary = averageSalary;
        }
        return settingsModel;
    })();
    meetingCostCalculator.settingsModel = settingsModel;
})(meetingCostCalculator || (meetingCostCalculator = {}));
