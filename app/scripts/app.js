'use strict';

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
    })
    .state('update', {
      url: '/update',
      templateUrl: 'views/_update.html'
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




