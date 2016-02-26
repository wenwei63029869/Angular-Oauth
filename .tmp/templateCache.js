angular.module('angularOauthApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/_home.html',
    "<div ng-if=\"!isAuthenticated()\"> <button ng-click=\"authenticate('facebook')\">Sign in with Facebook</button> </div> <div ng-if=\"isAuthenticated()\"> <button ng-click=\"logout()\">login out</button> </div> <!-- <div ng-if=\"isAuthenticated()\"> --> <p>{{getPayload}}</p> <p>{{user.displayName}}</p> <p>{{user}}</p> <p>{{error}}</p> <p>{{message}}</p> <!-- </div> -->"
  );


  $templateCache.put('views/_login.html',
    "<div ng-if=\"!isAuthenticated()\"> <button ng-click=\"authenticate('facebook')\">Sign in with Facebook</button> </div> <div ng-if=\"isAuthenticated()\"> <button ng-click=\"logout()\">login out</button> </div> <div ng-if=\"isAuthenticated()\"> <p>{{getPayload.user_id}}</p> <p>{{user.displayName}}</p> <p>{{user}}</p> </div>"
  );

}]);
