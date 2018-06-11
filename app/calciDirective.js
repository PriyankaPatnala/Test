angular.module("CalculatorApp")

    .directive('calciDirective', ['CalculatorService', function (CalculatorService) {
        function calculatorController($scope) {

            this.onNumberClick = function (val, buttonInstance) {
                $scope.dispValue = val.replace(val[val.length - 1], '');
                $scope.calci.onNumberClick($scope.dispValue, $scope.displayInstance);
            };

            this.onOperatorClick = function (val) {
                $scope.dispValue = val.replace(val[val.length - 1], '');
                $scope.calci.onOperatorClick($scope.dispValue, $scope.displayInstance);
            };

            this.getDisplay = function (disp) {
                $scope.displayInstance = disp;
            }

        }

        return {
            replace: true,
            scope: {},
            link: function (scope, elem, attr) {
                scope.elementArray = [];
                scope.dispValue = "";
                scope.calci = new calculatorComputation();
               // var that = scope;

                CalculatorService.getData().then(function (response) {
                    scope.elementArray = response.data;
                });

            },
            templateUrl: "CalculatorView.html",
            controller: calculatorController
        };
    }]);