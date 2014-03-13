Ext.onReady(function() {
    
    // Model
    var fields = [];  
    fields.push({name:"dia"})
    for(var i = 1; i<25; i++){
        fields.push({name: i});
    }    
    
    Ext.define('Model', {
        extend: 'Ext.data.Model',
        fields: fields,
        idProperty: 'model'
    });
    
    //Data
//    var myData = [
//        [" "],[" "],[" "],[" "],[" "],[" "],[" "],                              
//    ];
//    
    var myData = {'items':[
        { 'dia': 'Lunes', '1':" ",'2':" ",'3':" ",'4':" ",'5':" ",'6':" ",'7':" ",'8':" ",
        '9':" ",'10':" ",'11':" ",'12':" ",'13':" ",'14':" ",'15':" ",'16':" ",'17':" ",'18':" ",'19':" ",'20':" ",
        '21':" ",'22':" ",'23':" ",'24':" "}                                  
    ]};
    
    //Data store
    var store = Ext.create('Ext.data.ArrayStore', {
        model: 'Model',
        data: myData
    });

    // Columns
    var columns = [];
    columns.push({header: "D/H", flex:1});
    for (var i=1; i<25; i++){
        columns.push({header: i, flex:1});
    } 

    //The Grid
    Ext.create('Ext.grid.Panel', {
        title: 'Grid',        
        store: store,
        columns: columns,        
//        height: 220,
        width: 1050,
        selType: 'cellmodel',
        columnLines: true,
        enableColumnHide: false,
        enableColumnMove: false,
        enableColumnResize: false,
        sortableColumns: false,
        multiSelect: true,        
        renderTo: Ext.getBody()        
    });
});
