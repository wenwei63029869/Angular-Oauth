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
  .config(function($authProvider, $stateProvider, $urlRouterProvider) {
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

  });




