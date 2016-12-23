/// <reference path="_all.ts" />
var meetingCostCalculator;
(function (meetingCostCalculator) {
    'use strict';
    var storageService = (function () {
        function storageService() {
            this.meetingCostCalculatorSettingsKey = "meetingCostCalculatorSettingsKey";
        }
        storageService.prototype.getSettings = function () {
            var settings = amplify.store(this.meetingCostCalculatorSettingsKey);
            if (!settings) {
                settings = { people: 5, averageSalary: 40000 };
            }
            return settings;
        };
        storageService.prototype.saveSettings = function (settings) {
            amplify.store(this.meetingCostCalculatorSettingsKey, settings);
        };
        return storageService;
    })();
    meetingCostCalculator.storageService = storageService;
    ;
})(meetingCostCalculator || (meetingCostCalculator = {}));
