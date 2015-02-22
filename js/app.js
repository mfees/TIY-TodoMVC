(function (window) {
var app = angular.module('TodoMVC', [ ]);

app.controller('TodoController', function(){
   
    this.items = tasks;
    this.addItem = function(newItem){
	        this.items.push({text: this.newItem, done: false});
            this.newItem = '';
	    };
    
    this.clear = function(){
      var oldTodos = this.items;
        this.items = [];
        angular.forEach(oldTodos, function(item){
            if (!item.done) this.items.push(item);
        });
    };
});               


var tasks = [
    { text: "learn angular", done: true},
    { text: "buy a pony", done: false},
    { text: "another engaging task", done: false}
];
        
})(window);

