/// <reference path="_all.ts" />

module meetingCostCalculator {
    'use strict';

    angular.module("app", [])
        .directive("sliderInit", sliderInitDerective)
        .service("storageService", storageService)
        .controller("meetingController", meetingController);
}
