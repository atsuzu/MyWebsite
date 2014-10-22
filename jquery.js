$(document).ready(function() {

    //Menu Open Seasame Action    
    $('.wrap-toggle').click(function() {
        $('#rolling-nav').slideToggle();
        $(this).find('div:hidden').show().siblings().hide();
    });

    //Hide site-nav content.    
    $("#rolling-nav").hide();
    

});



	
