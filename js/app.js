(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
    $(document).ready(function(){
        
        $('#new-todo').on('keypress', function (e) { 
            if(e.which == 13) {
        var newItem = '<li><div class="view"><input class="toggle" type="checkbox"><label>Buy a unicorn</label><button class="destroy"></button></div><input class="edit" value="Rule the web"></li>';
            }
        $('#todo-list').append(newItem);
    
        });
    });

})(window);

