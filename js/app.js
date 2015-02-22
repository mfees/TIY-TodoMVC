(function (window) {

    
var app = angular.module('TodoMVC', [ ]);

app.controller('TodoController', function(){
   
    this.items = tasks;
    var newItem;
    this.addItem = function(newItem){
        this.items.push({text: this.newItem});
        this.newItem = '';
    };
});               

var tasks = [
    { text: "learn angular", checked: true},
    { text: "buy a pony", checked: false},
    { text: "another engaging task", checked:false}
];
        
})(window);
