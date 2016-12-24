/// <reference path="_all.ts" />

module meetingCostCalculator {
    'use strict';

    export class storageService implements IStorageService {
        meetingCostCalculatorSettingsKey: string = "meetingCostCalculatorSettingsKey";

        getSettings(): settingsModel {
            var settings = amplify.store(this.meetingCostCalculatorSettingsKey);
            if (!settings) {
                settings = { people: 5, averageSalary: 40000 };
            }
            return settings;
        }
        saveSettings(settings: settingsModel) {
            amplify.store(this.meetingCostCalculatorSettingsKey, settings);
        }
    };
}