/// <reference path="_all.ts" />

module meetingCostCalculator {
    'use strict';

    export class storageService {
        meetingCostCalculatorSettingsKey: string = "meetingCostCalculatorSettingsKey";

        getSettings() {
            var settings = amplify.store(this.meetingCostCalculatorSettingsKey);
            if (!settings) {
                settings = { people: 5, averageSalary: 40000 };
            }
            return settings;
        }
        saveSettings(settings) {
            amplify.store(this.meetingCostCalculatorSettingsKey, settings);
        }
    };
}