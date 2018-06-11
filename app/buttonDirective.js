angular.module("CalculatorApp")


    .directive("buttonDirective", function () {
        return {
            restrict: "EA",
            scope: {
                displayname: "@",
            },
            template: "<number-button></number-button>" +
            "<operator-button></operator-button>"
        }
    });