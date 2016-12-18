/// <reference path="E:\Study\Project\MeetingCostCalculator\MeetingCostCalculator\MeetingCostCalculator\Scripts/angular.min.js" />
/// <reference path="E:\Study\Project\MeetingCostCalculator\MeetingCostCalculator\MeetingCostCalculator\Scripts/amplify.min.js" />
(function (app) {
    var storageService = function () {
        var storage = {}; 
        var meetingCostCalculatorSettingsKey = "meetingCostCalculatorSettingsKey";
        storage.getSettings = function () {
            var settings = amplify.store(meetingCostCalculatorSettingsKey);
            if (!settings) {
                settings = { people: 5, averageSalary: 40000 };
            }
            return settings;
        };
        storage.saveSettings = function (settings) {
            amplify.store(meetingCostCalculatorSettingsKey);
        }

        return storage;
    }
    app.factory("storageService", storageService);
})(angular.module("app"));