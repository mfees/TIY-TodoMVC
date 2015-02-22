(function (window) {
var app = angular.module('TodoMVC', [ ]);

app.controller('TodoController', function(){
   
    this.items = tasks;
    this.addItem = function(newItem){
	        this.items.push({text: this.newItem, done: false});
            this.newItem = '';
	    };
    
    this.removeTodo = function(item){
        this.items.splice(this.items.indexOf(item),1);
    };
    
    
//    this.clear = function(){
//      var oldTodos = this.items;
//        this.items = [];
//        angular.forEach(this.items, function(item){
//            if (!item.done) this.items.push(item);
//        });
//    }; // supposed to clear all items that are marked done
});               


var tasks = [
    { text: "learn angular", done: false},
    { text: "buy a pony", done: false},
    { text: "another engaging task", done: false}
];
        
})(window);

