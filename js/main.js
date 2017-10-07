
function main() {

(function () {
   'use strict';

   /*====================================
    Main Navigation Stick to Top when Scroll
    ======================================*/
    function sticky_relocate() {
      var window_top = $(window).scrollTop();
      var div_top = $('#sticky-anchor').offset().top;
      if (window_top > div_top) {
          $('#tf-menu').addClass('stick');
		  $('#scroll-spacer').html('.');
		  $('#scroll-spacer').attr('style', 'transition: none;padding: 2% 0;line-height: 50px;');
		  
      } else {
          $('#tf-menu').removeClass('stick');
		  $('#scroll-spacer').html('');
		  $('#scroll-spacer').attr('style', 'transition: all 0.5s;padding: 0;');
      }
  }
  $(function () {
      $(window).scroll(sticky_relocate);
      sticky_relocate();
  });

    
 $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

 


}());


}

main();