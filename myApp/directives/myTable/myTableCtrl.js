(function(){
    'use strict';
    angular.module('app')
        .controller('myTableCtrl', function(){
        var vm  = this;
    })

angular.module('app')
    .directive('myTable', function(){
        return {
            restrict : 'E',
            templateUrl : 'myApp/directives/myTable/myTable.html',
            controller : 'myTableCtrl',
            controllerAs : 'myTable',
            bindToController : true, 
            scope : {
               tableSetting : '=' ,
               addData  : '='
            }
        }
})

})()