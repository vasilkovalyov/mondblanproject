jQuery(function() {
	new WOW().init();
	removeValueInput();
	initSetDelayOnPosts();
});


function removeValueInput(){
	var inputHolder = jQuery('.input-item');
	var clear = jQuery('.icon-close-button');

	clear.on('click', function(e){
		var input = jQuery(e.target.previousSibling);
		input.val('');
	})
}

function initSetDelayOnPosts(){
	var post = jQuery('.post-card');

	for(var i = 0; i <= post.length - 1; i++){
		jQuery(post[i]).css({'animation-delay' : i/4+'s'});
	}
}