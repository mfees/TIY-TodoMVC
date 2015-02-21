(function(window){
    var app = angular.module("TodoMVC", [])
    
    app.controller("TodoController", function(){
        this.items = tasks;
    });
    
    var tasks = [
        {text: "Task number 1"},
        {text: "buttsex"}
    ];

});





















//(function (window) {
//
//    
//var app = angular.module('Todomvc', [ ]);
//
//app.controller('TaskController', function(){
//   
//    this.items = tasks;
//    this.addItem = function(){
//	        this.items.push({text: this.todotext});
//	        console.log("codebone");
//	    };
//});               
//
//app.directive();
//
//var tasks = [
//    { text: "learn angular"},
//    { text: "buy a pony" },
//    { text: "another engaging task" }
//];
//    
//    
//    
//})(window);
//
