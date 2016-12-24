/// <reference path="../_all.ts" />

module meetingCostCalculator {
    'use strict';
    export interface IMeetingScope extends ng.IScope {
        people: number;
        averageSalary: number;
        running: boolean;
        cost: number;

        vm: meetingController;
    }
}