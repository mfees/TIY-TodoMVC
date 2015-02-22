(function (window) {

    
var app = angular.module('TodoMVC', [ ]);

app.controller('TodoController', function(){
   
    this.items = tasks;
    var newItem;
    this.addItem = function(newItem){
	        this.items.push({text: this.newItem});
	    };
});               


var tasks = [
    { text: "learn angular"},
    { text: "buy a pony" },
    { text: "another engaging task" }
];
        
})(window);
