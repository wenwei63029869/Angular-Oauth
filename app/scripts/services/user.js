'use strict';

angular.module('angularOauthApp')
.factory('User', function($http){
  // var extract = function(result) {
  //   return result.data
  // }
  var getUser = function(){
    return $http.get('https://fast-depths-23646.herokuapp.com/me')
    // return $http.get('http://localhost:3000//me')
     // Note the full endpoint address
  }
  return {getUser: getUser}
});