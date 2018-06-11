angular.module("CalculatorApp")


    .directive("operatorDirective", function () {
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

                    parentCtrl.onOperatorClick(val);

                });
            },
            template: "<button value={{value}} class='operator' >{{value}}</button>"
        }
    });