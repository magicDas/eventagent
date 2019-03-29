$(document).ready(function() {
  $(".trigger").click(function() {
    $(".menu").toggleClass("active"); 
  });

/*Скрипт при прокрутке уменьшаем шапку*/
var menu = $(".header-top"),
      sms = $(".sms-phone");

$(window).scroll(function() {
  var top = $(this).scrollTop();
  if ( top >= 100 ) {
    menu.css('height','30px');
    sms.css('margin-top','5px');
  } else if ( top <= 200 ) {
    menu.css('height','45px');
    sms.css('margin-top','13px');
  }
});


  //<!-- Обеспечить прокрутку и присвоение класса для активного пункта меню. -->
  $(document).on("scroll", onScroll);

  	//smoothscroll
    $('#navbarSupportedContent ul li a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");
            
            $('#navbarSupportedContent ul li a').each(function () {
                $(this).removeClass('activel');
            })
            $(this).addClass('activel');
          
            var target = this.hash,
                menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 1200, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });

	  function onScroll(event){
	        var scrollPos = $(document).scrollTop();
	        $('#navbarSupportedContent ul li a').each(function () {               
	            var refElement = $(this).attr("href");
	            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	                $('#navbarSupportedContent ul li a').removeClass("activel");
	                $(this).addClass("activel");
	            }
	            else{
	                $(this).removeClass("activel");
	            }
	        });
	  } ; 

 


});


   
    