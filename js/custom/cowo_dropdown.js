// JavaScript Document

// AJAX READY !
$(document).on("click",".jq_dropdown_trigger",function(){

	// $(this).toggleClass('is_active');
	$(this).toggleClass('is-active');
	
	// $(this).parents('.jq_dropdown').find('.jq_dropdown_shown').toggleClass('is_active',0);
	$(this).parents('.jq_dropdown').find('.jq_dropdown_shown').toggleClass('is_active',0);
	
	
	
 // 	$(this).parent('.jq_dropdown').find('.jq_dropdown_shown').toggleClass('is_active',0); // TEST THIS EASIER COEXISATNEC
	
			
	// $(this).parents('.jq_dropdown').find('.jq_dropdown_hidden').slideToggle(150);
	
	// $(this).parents('.jq_dropdown').find('.jq_dropdown_hidden').show(0);
	// $(this).parents('.jq_dropdown').find('.jq_dropdown_hidden').show(0);
	$(this).parents('.jq_dropdown').find('.jq_dropdown_hidden').toggle(0); // // make close again as well !!!!!
	
	
	// que sea un slide !!! poner lo time, y si pones time 0, entonce sno slide... 
	
	
	
	
	
});
