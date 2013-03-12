angular.module('accountApp', ['ngResource']);

function AccountCtrl($scope, $resource) {
    var url = 'http://search.twitter.com/search.json?q=';
    $scope.account = $resource(url,
        {callback:'JSON_CALLBACK'},
        {get:{method:'JSONP'}});

    $scope.accountResult = $scope.account.get();
}