angular.module('restTest', ['ngResource']);

function AccountCtrl($scope, $resource) {
    $scope.name = 'Jim';

    $scope.accountService = $resource('http://127.0.0.1\\:3000/accounts/:email',
        { email: 'user@domain_0001.com', callback:'JSON_CALLBACK' },
        { get:{method:'JSONP'}});

    $scope.account = $scope.accountService.get(function(result) {
        console.log(result);
    });
}