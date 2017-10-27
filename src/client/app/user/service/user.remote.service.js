(function () {
    'use strict';

    angular
        .module('app.user')
        .factory('userRemoteService', userRemoteService);

    /* @ngInject */
    function userRemoteService($http, $q, environmentConfig) {
        var service = {
            create: create,
            createChild:createChild,
            getList: getList
        };

        return service;

        function getList() {
            return $http.get(environmentConfig.userAPI + '/users')
                .then(successGetUsersList)
                .catch(failGetUsersList);

            function successGetUsersList(response) {
                return response.data;
            }

            function failGetUsersList(error) {
                return $q.reject(error);
            }
        }

        function create(data) {
            return $http.post(environmentConfig.userAPI + '/users', data)
                .then(successCreate)
                .catch(failCreate);

            function successCreate(response) {
                return response.data;
            }

            function failCreate(error) {
                return $q.reject(error);
            }
        }

        function createChild(data) {
            return $http.post(environmentConfig.userAPI + '/children', data)
                .then(successCreateChild)
                .catch(failCreateChild);

            function successCreateChild(response) {
                return response.data;
            }

            function failCreateChild(error) {
                return $q.reject(error);
            }
        }
    }
})();

