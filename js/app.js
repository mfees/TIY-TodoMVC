(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
    $(document).ready(function(){
        $('#new-todo').on('keypress', function (e) { 
            if(e.which == 13) {
                var newTask = $('#new-todo').val();
                console.log(newTask);
                var newItem = '<li><div class="view"><input class="toggle" type="checkbox"><label>' + newTask + '</label><button class="destroy"></button></div><input class="edit" value="'+ newTask +'"></li>';
                        $('#todo-list').append(newItem);
                
        var listLength = $('#todo-list li').length;    
        if ( listLength  == 0){
        return $('#footer').addClass('hidden');
    } else {
        return $('#footer').removeClass('hidden');
            }

            }
            
        });
        

    
    });

    
    
    
})(window);

