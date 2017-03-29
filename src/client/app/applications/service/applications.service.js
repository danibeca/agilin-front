(function () {
    'use strict';

    angular
        .module('app.applications')
        .factory('appservice', appservice);

    /* @ngInject */
    function appservice(Restangular, logger, $filter, $q) {
        var service = {
            getApplications: getApplications,
            getIndicator: getIndicator
        };

        return service;

        function getApplications() {
            return Restangular.all('applications').getList()
                .then(success)
                .catch(fail);

            function success(applications) {
                return applications.plain();
            }

            function fail(error) {
                return $q.reject(error);
            }
        }

        function getIndicator(applicationId, indicatorId) {
            return Restangular.one('applications', applicationId)
                .one('indicators', indicatorId).get()
                .then(success)
                .catch(fail);

            function success(indicator) {
                return indicator.data;
            }

            function fail(error) {
                return $q.reject(error);
            }
        }
    }
})();
