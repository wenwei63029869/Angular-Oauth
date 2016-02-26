'use strict';
// var app = express();
// // Disabled because its not working anymore
// //app.use(express.bodyParser());
// // ... use body-parser package instead
// var bodyParser = require('body-parser');
// var compression = require('compression');
// var cookieSession = require('cookie-session');
// var session = require('express-session');
// var morgan = require('morgan');
// var cookieParser = require('cookie-parser');
// var favicon = require('serve-favicon');;
// var responseTime = require('response-time');
// var errorhandler = require('errorhandler');
// var timeout = require('connect-timeout');;
// var methodOverride = require('method-override');
// var vhost = require('vhost');
// var csurf = require('csurf');
// var serveIndex = require('serve-index');
// var createStatic = require('connect-static');;
// var getRawBody = require('raw-body');
// var busboy = require('connect-busboy');
// app.use(bodyParser());
// app.use(compression());
// app.use(cookieSession());
// app.use(session());
// app.use(morgan());
// app.use(cookieParser());
// app.use(favicon());
// app.use(responseTime());
// app.use(errorhandler());
// app.use(timeout());
// app.use(methodOverride());
// app.use(vhost());
// app.use(csurf());
// app.use(serveIndex());
// app.use(createStatic());
// app.use(getRawBody());
// app.use(busboy());

angular
  .module('angularOauthApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'satellizer',
    ])
  .config(["$authProvider", "$stateProvider", "$urlRouterProvider", function($authProvider, $stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/_home.html',
      controller: 'HomeCtrl'
      // ,
      // resolve: {
      //     user: ['User', function(User) {
      //       return User.get();
      //     }]
      //   }
      // redirectUri: window.location.origin + '/'
    });

    $authProvider.facebook({
      clientId: '1763699113853883',
      name: 'facebook',
      url: 'https://fast-depths-23646.herokuapp.com/auth/facebook',
      // url: 'http://localhost:3000/auth/facebook',
      authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
      // heroku url: "https://blooming-oasis-46632.herokuapp.com/"
      // http://localhost:9000/
      redirectUri: window.location.origin + '/',
      requiredUrlParams: ['display', 'scope'],
      scope: ['email'],
      scopeDelimiter: ',',
      display: 'popup',
      type: '2.0',
      popupOptions: { width: 580, height: 400 }
    });

  }]);





'use strict';
var n = 0
angular.module('angularOauthApp')
.controller('HomeCtrl', ["$scope", "$auth", "User", function($scope, $auth, User) {
    console.log(n ++)
    console.log('home');
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

}]);


'use strict';

angular.module('angularOauthApp')
.factory('User', ["$http", function($http){
  // var extract = function(result) {
  //   return result.data
  // }
  var getUser = function(){
    return $http.get('https://fast-depths-23646.herokuapp.com/me')
    // return $http.get('http://localhost:3000//me')
     // Note the full endpoint address
  }
  return {getUser: getUser}
}]);
angular.module('angularOauthApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/_home.html',
    "<div ng-if=\"!isAuthenticated()\"> <button ng-click=\"authenticate('facebook')\">Sign in with Facebook</button> </div> <div ng-if=\"isAuthenticated()\"> <button ng-click=\"logout()\">login out</button> </div> <!-- <div ng-if=\"isAuthenticated()\"> --> <p>{{getPayload}}</p> <p>{{user.displayName}}</p> <p>{{user}}</p> <p>{{error}}</p> <p>{{message}}</p> <!-- </div> -->"
  );


  $templateCache.put('views/_login.html',
    "<div ng-if=\"!isAuthenticated()\"> <button ng-click=\"authenticate('facebook')\">Sign in with Facebook</button> </div> <div ng-if=\"isAuthenticated()\"> <button ng-click=\"logout()\">login out</button> </div> <div ng-if=\"isAuthenticated()\"> <p>{{getPayload.user_id}}</p> <p>{{user.displayName}}</p> <p>{{user}}</p> </div>"
  );

}]);
