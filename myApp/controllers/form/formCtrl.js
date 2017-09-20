(function(){
    'use strict'
    angular.module('app').controller('formCtrl', function(configService,dataService){
        var vm  = this;
        vm.modelObj = {};

        vm.formData = [];

        configService.getFormConfig().then(function(response){
                vm.formData = response;
        })
 
        
            // vm.save = function(){
            //     console.log(vm.modelObj);
            //   dataService.saveData(vm.modelObj);
            // }

            
              vm.save = function(model){
                console.log(model);
              dataService.saveData(model);
            }

    })
})()