/// <reference path="_all.ts" />
var meetingCostCalculator;
(function (meetingCostCalculator) {
    'use strict';
    function sliderInitDerective() {
        return {
            link: function link(scope, element, attrs) {
                var model = scope.$eval(attrs.ngModel);
                var unwatch = scope.$watch(model, function (newValue) {
                    if (newValue) {
                        element.slider('refresh');
                        unwatch();
                    }
                });
            }
        };
    }
    meetingCostCalculator.sliderInitDerective = sliderInitDerective;
})(meetingCostCalculator || (meetingCostCalculator = {}));
