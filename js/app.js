(function (window) {
var app = angular.module('TodoMVC', [ ]);

app.controller('TodoController', function(){
   
    this.items = tasks;
    this.addItem = function(newItem){
	        this.items.push({text: this.newItem, done: false});
            this.newItem = '';
	    };
    
    this.remove = function(item){
        this.items.splice(this.items.indexOf(item), 1);
    };
    
    this.itemCount = function(item){
        if(item.done) this.items.length;
    }
    
//    this.clear = function(){
//      var oldTodos = this.items;
//        this.items = [];
//        angular.forEach(this.items, function(item){
//            if (!item.done) this.items.push(item);
//        });
//    }; // supposed to clear all items that are marked done
});               


var tasks = [
    { text: "learn angular", done: true},
    { text: "buy a pony", done: true},
    { text: "another engaging task", done: false}
];
        
})(window);

