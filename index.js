angular.module('accountApp', ['ngResource']);

function AccountCtrl($scope, $resource) {
    var url = "http://localhost\\:3000/accounts/user@domain_0002.com"

    $scope.account = $resource(url,
        { callback:'JSON_CALLBACK' },
        {
            get: { method:'JSONP', isArray : true }
        });

    $scope.account.get(function(result) {
        $scope.accountResults = result;
    });
}