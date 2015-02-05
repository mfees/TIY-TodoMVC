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
                    $('#new-todo').val('');
                    var lengthOfToDo = $('#todo-list li').length;
                    $('#todo-count strong').text(lengthOfToDo);
//        var listLength = $('#todo-list li').length;    
//        if ( listLength  >= 1){
//        $('#footer').removeClass('hidden');
//    } else {
//        $('#footer').addClass('hidden');
//
//            } // an attempt at hiding and showing the foot ver 5.0 that was a blvd of broken dreams
   
            } // if loop closer, hey girl, heyyyyy aka you need me bro!
        $(".destroy").on('click', function() {
        $(this).parent().parent().remove();
        var lengthOfToDo = $('#todo-list li').length;
        $('#todo-count strong').text(lengthOfToDo);
        
//        if ($(".toggle").attr('checked', true)) {
//            $('li').addClass('completed');
//        };   // an attempt at getting the checkboxes to apply the completed task
        
        }); 
            
        });
//      var toggleAll = $('#toggle-all');
//        toggleAll.on('click', function(e){
//        $('.toggle').attr('checked', true);
//        $('li').toggleClass('completed');
        

        

    });  

    

    
    
    
})(window);

