angular.module("CalculatorApp")


    .directive("numberDirective", function () {
        return {
            restrict: "EA",
            replace: true,
            scope: {
                value: "@",
            },
            require: "^calciDirective",
            link: function (scope, elem, attr, parentCtrl) {

                elem.on('click', function () {
                    var val = elem.val();

                    parentCtrl.onNumberClick(val, elem);

                });
            },
            template: "<button value={{value}} class='number'>{{value}}</button>"
        }
    });