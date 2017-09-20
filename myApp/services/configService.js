(function () {
    'use strict';
    angular.module('app')
        .service('configService', function ($q) {

            this.getTableConfig = getTableConfig;
            this.getFormConfig = getFormConfig;

            var tableConfig = [{ columnName: 'id', displayName: 'Id', link: true },
            { columnName: 'name', displayName: 'Name' },
            { columnName: 'city', displayName: 'City' },
            { columnName: 'state', displayName: 'State' },
            { columnName: 'button', displayName: 'Action', action: [{ button: 'delete' }] },
            ];

            function getTableConfig() {
                return $q.when(tableConfig);
            }

            var formConfig = [
                { labelName: 'Name', fieldName: 'name', type: 'text', required: true },
                { labelName: 'City', fieldName: 'city', type: 'text' },
                { labelName: 'State', fieldName: 'state', type: 'text' }
            ];


            function getFormConfig() {
                return $q.when(formConfig);
            }

        })
})()