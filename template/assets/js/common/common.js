// Module name: Scroll Top
// Dependencies: no dependencies
(function(){
	var scrollButton = $('.js-scroll-top');

	scrollButton.on("click", function(e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: "0px" }, 2000);
	});
})();

// Module name: Scroll To
// Dependencies: no dependencies
(function(){
	var buttons = $('.js-scroll-to');

	buttons.each(function () {
		var button = $(this);
		var target = button.attr('href');
		var speed = button.data('speed') ? button.data('speed') : 1000;

		if(typeof target !== 'undefined' && $(target).length){
			button.on('click', function(event) {
				event.preventDefault();

				$('html, body').animate({
			        scrollTop: $(target).first().offset().top - $('.js-header').outerHeight()
			    }, speed);
			});
		}
	});
})();


(function($) { 
    var element = $('.follow-scroll-box '),
        originalY = 0;
    


    // Space between element and top of screen (when scrolling)
    var topMargin = $( element ).data( 'margin-top' ) || 100;
    
    // Should probably be set in CSS; but here just for emphasis
   // element.css('position', 'absolute');
    
    $(window).on('scroll', function(event) {
        var scrollTop 	= $(window).scrollTop();
        var newTop		= scrollTop < originalY
		                    ? 0
		                    : scrollTop - originalY + topMargin;
        
		if (newTop < 750 ) {
			element.addClass( 'follow-scroll-box--invisible' );

		}  else {
			element.removeClass( 'follow-scroll-box--invisible' );	
		}                  

        element.stop(false, false).animate({
            top: newTop
        }, 300);
    });
})(jQuery);