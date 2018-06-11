angular.module("CalculatorApp")
    .service('CalculatorService', function ($http) {

        this.getData = function () {
            return $http.get('buttonInfo.json').then(function (response) {
                console.log("service " + response);
                return response;
            }, function (response) {
                return 'Error Occured'
            })

        }
    });