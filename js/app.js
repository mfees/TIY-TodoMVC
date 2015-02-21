(function (window) {

    
var app = angular.module('TodoMVC', [ ]);

app.controller('TodoController', function(){
   
    this.items = tasks;
    this.addItem = function(){
	        this.items.push({text: this.todotext});
	        console.log("codebone");
	    };
});               

app.directive();

var tasks = [
    { text: "learn angular"},
    { text: "buy a pony" },
    { text: "another engaging task" }
];
    
    
    
})(window);

