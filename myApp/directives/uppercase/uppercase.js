(function () {
    'use strict';
    angular.module('app')
        .controller('uppercaseCtrl', function () {
            var vm = this;
        })

    angular.module('app')
        .directive('uppercase', function () {
            return {
                restrict: 'A',
                controller: 'uppercaseCtrl',
                controllerAs: 'upperCtrl',
                bindToController: true,
                link: function (scope, element, attr) {
                    // console.log(scope)
                    console.log(element[0])

                    angular.element(element).on('keyup', function () {
                        console.log(this, 'angular');
                        this.value = this.value.toUpperCase();
                        console.log(this.value);
                    })

                    $(element[0]).on('change', function () {
                        console.log(this);
                    })
                    //console.log(attr);
                }
            }
        })

})();