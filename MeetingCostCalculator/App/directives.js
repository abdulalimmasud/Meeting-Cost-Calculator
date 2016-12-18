/// <reference path="E:\Study\Project\MeetingCostCalculator\MeetingCostCalculator\MeetingCostCalculator\Scripts/angular.js" />
/// <reference path="E:\Study\Project\MeetingCostCalculator\MeetingCostCalculator\MeetingCostCalculator\Scripts/amplify.js" />
(function (app) {

    var sliderInitDirective = function () {
        return {
            link:
                function link(scope, element, attrs) {
                    var model = scope.$eval(attrs.ngModel);
                    var unwatch= scope.$watch(model, function (newValue, oldValue) {
                        if (newValue) {
                            element.slider('refresh');
                            unwatch();
                        }
                    })
                    console.log("using deirective");
                }
        }
    }

    app.directive("sliderInit", sliderInitDirective);
})(angular.module("app"));