$(function() {

  if ($("#teaser-slider").length > 0){

    var slider = $('#teaser-slider').bxSlider({
    touchEnabled: true,
    pager: false,
    controls: false,
    adaptiveHeight: true,
    auto: true,
    pause: 6000,
    autoHover: true,
    mode: 'fade',
    onSlideBefore: function($slideElement, oldIndex, newIndex){
      $(".teaser__pager a.active").removeClass("active");
      $('.teaser__pager a[data-pos="' + newIndex + '"]').addClass("active");
      }
    });
    
    $(".teaser__pager a").click(function(event) {
      event.preventDefault();
      var goSlide = $(this).attr("data-pos");
      slider.goToSlide(goSlide);
    });
  
  }

});