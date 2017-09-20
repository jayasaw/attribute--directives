(function(){
    'use strict'
    angular.module('app')
        .service('dataService', function($q){
            
      
      
            this.getTableData = getTableData;
            this.saveData = saveData;
     
     

            var tableData = [{id : 1, name : 'anvi', city : 'ranchi' , state : 'jsr'},
                            {id : 2, name : 'anup', city : 'pune' , state : 'MH'},
                            {id : 3, name : 'pinkey', city : 'ranchi' , state : 'jsr'},
                            {id : 4, name : 'jaya', city : 'jamshedpur' , state : 'jsr'}
                            ];

                   function getTableData(){
                       return $q.when(tableData);
                   }


               function saveData(data){
                   data.id = tableData.length +1;
                    tableData.push(angular.copy(data));
               }          

        })
})()