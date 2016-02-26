'use strict';
var n = 0
angular.module('angularOauthApp')
.controller('HomeCtrl', function($scope, $auth, User) {
    console.log(n ++)
    console.log('home');
    console.log("update")
    console.log("hit the route")
    console.log(!localStorage.getItem("satellizer_token"))
    $scope.user = User.user
    if (!localStorage.getItem("satellizer_token") || localStorage.getItem("satellizer_token")  === {}) {
      $scope.getPayload = "init getpayload";
      $scope.user = "init user";
    } else {
      console.log("hit it")
      User.getUser().then(function(msg){
        console.log(msg["data"])
        $scope.user = msg["data"]
      });
      $scope.getPayload = $auth.getPayload
    }

    // try to do the base controller
    $scope.authenticate = function(provider) {
      console.log('auth');
      console.log(window.location.origin);
      $auth.authenticate(provider)
      .then(function(){
        // $scope.getPayload = $auth.getPayload();
        User.getUser().then(function(msg){
          console.log(msg["data"])
          $scope.user = msg["data"]
        });
        console.log($scope.user);
        $scope.getPayload = $auth.getPayload
      });
    };
    console.log($scope.user)
    console.log($scope.getPayload)
    $scope.logout = function() {
      $auth.logout();
      $scope.getPayload = "";
      $scope.user = "";
      // .then(function(){
      // });
    };
    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };

});

