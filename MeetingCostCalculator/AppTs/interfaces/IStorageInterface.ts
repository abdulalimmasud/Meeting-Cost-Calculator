/// <reference path="../_all.ts" />

module meetingCostCalculator {
    'use strict';

    export interface IStorageService {
        getSettings(): settingsModel;
        saveSettings(settings: settingsModel);
    }
}