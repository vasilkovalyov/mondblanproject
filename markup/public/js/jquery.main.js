jQuery(function() {
	initDatePicker();
	removeValueInput();
});

function initDatePicker(){
	$('#my-element').datepicker()
	$('#my-element').data('datepicker')
}

function removeValueInput(){
	var inputHolder = jQuery('.input-item');
	var clear = jQuery('.icon-close-button');

	clear.on('click', function(e){
		var input = jQuery(e.target.previousSibling);
		input.val('');
	})
}