(function () {
    'use strict';

    angular.module('Target.Services')
        .factory('AccountService', AccountService);

    AccountService.$inject = ['$rootScope', 'Api', 'Cache', 'Loading', '$state', '$location', 'endpoints'];

    function AccountService($rootScope, Api, Cache, Loading, $state, $location, endpoints) {

        var _nameToken = "TOKEN_AUTH";
        var _nameEndPointAuthApi = "AUTHAPI";
        var _typeLogin = "SSO";

        return {
            loginResourceOwner: _loginResourceOwner,
            logout: _logout,
            reset: _reset,
            menu: _menu,
            loginSso: _loginSso,
            processTokenCallback: _processTokenCallback,
            getTypeLogin : _getTypeLogin
        }

        function _loginResourceOwner(email, password, reload) {

       
            var apiSSO = new Api.resourse("Auth");

            apiSSO.Data = {
                ClientId: "Target",
                ClientSecret: "secret",
                Scope: "openid profile ssosa",
                User: email,
                Password: password
            };
            apiSSO.EndPoint = _nameEndPointAuthApi
            apiSSO.SuccessHandle = function (result) {

                Cache.Add(_nameToken, result.data.accessToken);

                window.location.href = makeUrl('#/Home');

                if (reload)
                    window.location.reload();
            }
            apiSSO.Post();

            return _typeLogin;
            
        }

        function _loginSso() {

          
            var authorizationUrl = endpoints.AUTH + '/connect/authorize';
            var client_id = 'Target-spa';
            var redirect_uri = endpoints.APP;
            var response_type = "token";
            var scope = "ssosa";
            var state = Date.now() + "" + Math.random();

            localStorage["state"] = state;

            var url =
                authorizationUrl + "?" +
                "client_id=" + encodeURI(client_id) + "&" +
                "redirect_uri=" + encodeURI(redirect_uri) + "&" +
                "response_type=" + encodeURI(response_type) + "&" +
                "scope=" + encodeURI(scope) + "&" +
                "state=" + encodeURI(state);

            window.location = url;

            return _typeLogin;

        }

        function _getTypeLogin() {
            return _typeLogin;
        }

        function _logout() {

            _reset();

            if (_typeLogin == "SSO") {
                var authorizationUrl = endpoints.AUTH + 'account/logout?returnUrl=' + endpoints.APP;
                window.location = authorizationUrl;
            }
            else {
                $state.go("Login");
                window.location.reload();
            }
        }

        function _processTokenCallback() {

            if (window.location.href.indexOf("access_token") > -1) {

                var token;

                var hash = window.location.hash.substr(2);
                console.log(hash);

                var result = hash.split('&').reduce(function (result, item) {
                    var parts = item.split('=');
                    result[parts[0]] = parts[1];
                    return result;
                }, {});

                if (!result.error) {
                    if (result.state !== localStorage["state"]) {
                        console.log("invalid state");
                    }
                    else {
                        localStorage.removeItem("state");
                        token = result.access_token;
                        _acceptlogin(token, true)
                    }
                }
            }


        }

        function _menu(callback) {

            var apiCurrentUser = new Api.resourse("CurrentUser");
            apiCurrentUser.EnableLoading = false;
            apiCurrentUser.SuccessHandle = function (result) {
                callback(result)
            }
            apiCurrentUser.Get();
        }

        function _acceptlogin(token, reload) {
            Cache.Add(_nameToken, token);
            window.location = _makeUrl('#/Home');
            if (reload)
                window.location.reload();
        }

        function _reset() {
            Cache.Reset();
        }

        function _makeUrl(url, noCache) {
            if (noCache)
                return url;

            return url + '?v=' + Math.random();
        }
    };
})();
