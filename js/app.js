(function (window) {

    
var app = angular.module('Todomvc', [ ]);

app.controller('TaskController', function(){
   
    this.items = tasks;
    this.addItem = function(){
	        this.items.push({text: this.todotext});
	        console.log("codebone");
	    };
});               


var tasks = [
    { text: "learn angular"},
    { text: "buy a pony" },
    { text: "another engaging task" }
];
    
    
    
})(window);

