(function ($) {

  "use strict";
  
  Drupal.behaviors.customBehavior = {
    // perform jQuery as normal in here
      attach: function (context, settings) {

          if (!(context instanceof HTMLDocument)) return;


          $(function () {
              $(".feedback-slider").responsiveSlides({
                  auto: false,
                  nav: true,
                  prevText: " ",
                  nextText: " ",
                  pager: true,
                  speed: 800
              });

              ////////////////Sticky header on scroll///////////////////////////////

              $(window).scroll(function() {
                  if($(this).scrollTop() >= 70) {
                      $('#navbar').addClass('stickytop');
                      $('.topcontrol').addClass('visible');
                  }
                  else{
                      $('#navbar').removeClass('stickytop');
                      $('.topcontrol').removeClass('visible');
                  }
              });


              /////////////////////////////////////

              $(document).ready(function(){

                  $(".topcontrol").click(function() {
                      $("html, body").animate({ scrollTop: 0 }, "slow");
                      //return false;
                  });

                  //$('.dropdown-toggle').prop('disabled', true);

                  $('.dropdown-toggle').on('click', function(e) {
                      if ( $('.navbar-toggle').css('display') !== 'none' ) {
                          var aria_expanded    = $(this).attr('aria-expanded'),
                              $dm       = $(this).next('.dropdown-menu'),
                              dm_li        = $dm.find('li'),
                              h        = 0;

                          for(var i=0; i < dm_li.length; i++) {
                              h += +$(dm_li[i]).outerHeight();
                          }
                          $dm.height( aria_expanded === 'true' ? 0 : h );
                      }
                  });

                  function lockScroll() {
                      if ($('body').hasClass('lock-scroll')) {
                          $('body').removeClass('lock-scroll');
                      }
                      else {
                          $('body').addClass('lock-scroll');
                      }
                  }

                  $('.navbar-toggle').on('click', function (event) {

                      lockScroll(); //disabling body scroll when menu opened
                  });

                  /////////////////////////////////////
                  $(document).on('click', '.navbar-collapse.in', function (e) {
                      console.log(e);
                      if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
                          $(this).collapse('hide');
                      }
                  });
              });

              /////////////////////////////////////////////

              new WOW().init();



          });


      }
  };
  
})(jQuery);
