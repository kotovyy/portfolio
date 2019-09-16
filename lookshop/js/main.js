$(document).ready(function() {
 
  $(".js_main_slider").owlCarousel({

	  items : 1,
	  navigation: true,
	  pagination: true,
	  navigationText: true
	 
  });
 
  $(".js_main_slider_sort").owlCarousel({
 
      items : 5,
      navigation: true,
      pagination: false,
      navigationText: true
 
  });

  $(".js_list_product_slider").owlCarousel({
 
      items : 1,
      navigation: true,
      pagination: true,
      navigationText: true
 
  });

(function($) {
$(function() {

  $('select').styler();

});
})(jQuery);

});

  $('.js_product_click'). on('click', function(){
    $('.js_toggle'). toggle ('easing', function(){
      });
  });

 


