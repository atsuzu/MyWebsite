$(document).ready(function() {

    //Menu Open Seasame Action    
    $('.wrap-toggle').click(function() {
    	$('#rolling-nav').slideToggle();
    	$(this).find('span:hidden').show().siblings().hide();
    });

    //Hide site-nav content.    
    $("#rolling-nav").hide();

});

$(document).ready(function() {
 	var counter = 0;
 $('#SubmitButton').click(function() {

    var new_name = $('#Name').val();
    var new_comment = $('#Comment').val();

    if(counter % 2) {
    	if(new_name != '')
    	{
    		$('#CommentTable').append('<tr><td class = "name">'+new_name+'</td><td class ="comment">'+new_comment+' </td></tr>');
    	}
    	else
    	{
    		$('#CommentTable').append('<tr><td class = "name">Annonymous</td><td class ="comment">'+new_comment+' </td></tr>');
    	}
    }
    else
    {
    	if(new_name != '')
    	{
    		$('#CommentTable').append('<tr class = "alt"><td class = "name">'+new_name+'</td><td class ="comment">'+new_comment+' </td></tr>');
    	}
    	else
    	{
    		$('#CommentTable').append('<tr class = "alt"><td class = "name">Annonymous</td><td class ="comment">'+new_comment+' </td></tr>');
    	}
    }


    counter++;

 });
});

