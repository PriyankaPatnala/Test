angular.module("CalculatorApp")


    .directive("displayDirective", function () {

        return {
            restrict: "EA",
            replace: true,
            scope: {
                displayName: "@"
            },
            require: "^calciDirective",
            template: "<input type='text' value={{displayName}} class='display' /> ",


            link: function (scope, elem, attr, parentCtrl) {

                parentCtrl.getDisplay(elem[0]);

            },


        }
    });