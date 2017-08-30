'use strict';

var mushApp = angular.module('mushApp', []);

mushApp.controller('MushroomController', ['$scope', '$http', function($scope, $http) {
    $scope.mushroom = [];
    $http.get('https://cupcake-firebase-demo.firebaseio.com/mushrooms.json')
    .then((response) => {
        console.log("response", response);
        console.log("response", response.data);
        for (var key in response.data) {
            $scope.mushroom.push(response.data[key]);
        }
    }); 
    $scope.mushroomName = $scope.mushroom.filter((mushroom) => {
        return mushroom.name;
    }); 
}]);