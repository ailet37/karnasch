// Page scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// Window resize
$(window).resize(function() {
  mobileNav();
});

mobileNav();

function mobileNav() {
  if ($(window).width() >= 768) {
    $('header a.dropdown-toggle').removeAttr('data-toggle');
  }
  else {
    $('header a.dropdown-toggle').attr('data-toggle','dropdown');
  }
}


$(function(){
	
	/* Add title attribute to parent Tag */
	$('.click').each(function(index) {
		$(this).attr("title",$(this).find("a").attr("title"));
	});
	
	/* Add href attribute to parent Tag */
	$(".click").click(function(){
		window.location=$(this).find("a").attr("href");
		return false;
	});
});


//  Video- Expander

  $( ".expander .cuttingdata" ).click(function() {
    //$( "div.toggle" ).slideToggle( "slow" );

    $( this ).next( ".toggle" ).slideToggle( "slow" );

  });

  $( ".btnexpander" ).click(function() {
    //$( "div.expander-body" ).slideToggle( "slow" );

    $( this ).next('.expander-body').slideToggle( "slow" );

  });



  //$(".video-container").lightGallery();
  
  $('.video-container').lightGallery({
        html:true,
        thumbnail:false,
        videoMaxWidth:'90%'
    });

  /* VIDEO BOX */
  $('.video-file .video-link').lightGallery({
    controls: false
  });
  $(".video-box .caption span").click(function() {
    $( this ).parent().parent().find('.expand').slideToggle("fast");
  });
  /* // VIDEO BOX */

/* === RUN IF DOM READY === */
$(function() {

  $(".trade .event-toggle").click(function() {
    $( this ).parent().find('.expand').toggle("slow");
    //$( 'i',this ).toggleClass('fa-angle-down','fa-angle-up');
  });

  });