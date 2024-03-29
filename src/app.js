﻿/// <reference path="vendor/oidc-client.min.js" />

function log() {
  document.getElementById('results').innerText = '';
  Array.prototype.forEach.call(arguments, function (msg) {
    if (msg instanceof Error) {
      msg = 'Error: ' + msg.message;
    } else if (typeof msg !== 'string') {
      msg = JSON.stringify(msg, null, 2);
    }
    document.getElementById('results').innerHTML += msg + '\r\n';
  });
}

document.getElementById('login').addEventListener('click', login, false);
document.getElementById('logout').addEventListener('click', logout, false);
document.getElementById('tenant').addEventListener('click', getTenant, false);

import appsettings from './appsettings.js';
var mgr = new Oidc.UserManager(appsettings);

mgr.getUser().then(function (user) {
  if (user) {
    log('User logged in', user.profile);
  } else {
    log('User not logged in');
  }
});

function login() {
  mgr.signinRedirect();
}

function getTenant() {
  mgr.getUser().then(function (user) {
    if (user) {
      var accessToken = user.access_token;
      // get the header
      var bearer = 'Bearer ' + accessToken;

      // form url
      var host = appsettings.authority.replace('identity', '');
      var ApiVersion = appsettings.ApiVersion.replace('ApiVersion:', '');
      const url = host + 'api/' + ApiVersion + '/tenants/' + user.profile.tid;

      // Set header
      $.ajaxSetup({
        headers: {
          Authorization: bearer,
        },
      });

      // Make request
      $.getJSON(url, function (result) {
        log(result);
      });
    } else {
      log('Tenant Information', 'User not logged in');
    }
  });
}

function logout() {
  mgr.signoutRedirect();
}
