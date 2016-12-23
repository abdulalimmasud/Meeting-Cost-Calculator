/// <reference path="_all.ts" />
var meetingCostCalculator;
(function (meetingCostCalculator) {
    'use strict';
    angular.module("app", [])
        .directive("sliderInit", meetingCostCalculator.sliderInitDerective)
        .service("storageService", meetingCostCalculator.storageService)
        .controller("meetingController", meetingCostCalculator.meetingController);
})(meetingCostCalculator || (meetingCostCalculator = {}));
