$(document).ready(function() { //не работатет
    
    'use strict';
    
    $('#nameedit').blur(function() {
        
        if(!$(this).val()) {
       
        $('#namesubmit').css({
            
            'display': 'none'
            
        });
       
        } else {
            $('#namesubmit').css({

                'display': 'block'

            });
        
        } 
    });
    
});