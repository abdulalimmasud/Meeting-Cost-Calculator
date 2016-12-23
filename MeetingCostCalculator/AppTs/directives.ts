/// <reference path="_all.ts" />

module meetingCostCalculator {
    'use strict';

    export function sliderInitDerective() {
        return {
            link: function link(scope, element, attrs) {
                var model = scope.$eval(attrs.ngModel);
                var unwatch = scope.$watch(model, (newValue) => {
                    if (newValue) {
                        element.slider('refresh');
                        unwatch();
                    }
                });
            }
        }
    }
}