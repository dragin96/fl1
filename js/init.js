$(function(){

    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
    
    $('.slider-cont').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      adaptiveHeight: false,
      dots: false,
      arrows: true,
      fade: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<span data-role="none" class="slick-prev animate" aria-label="Previous" tabindex="0" role="button"></span>',
      nextArrow: '<span data-role="none" class="slick-next animate" aria-label="Next" tabindex="0" role="button"></span>'
    });  
    
    $('.rev-block-v1 .rev-cont').slick({
      infinite: true,
      autoplay: false,
      adaptiveHeight: true,
      dots: false,
      arrows: true,
      fade: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<span data-role="none" class="slick-prev animate" aria-label="Previous" tabindex="0" role="button"></span>',
      nextArrow: '<span data-role="none" class="slick-next animate" aria-label="Next" tabindex="0" role="button"></span>'
    });
    
    now = new Date();
    var perem = (24-now.getHours())*3600;
    $(".el-timer").attr("data-timer", perem);
    $(".el-timer").TimeCircles({
        "animation": "smooth",
        "bg_width": 0.5,
        "fg_width": 0.022,
        "circle_bg_color": "#fc7f39",
        "time": {
            "Days": {
                "text": "Days",
                "color": "#ffffff",
                "show": false
            },
            "Hours": {
                "text": "Часов",
                "color": "#ffffff",
                "show": true
            },
            "Minutes": {
                "text": "Минут",
                "color": "#ffffff",
                "show": true
            },
            "Seconds": {
                "text": "Секунд",
                "color": "#ffffff",
                "show": true
            }
        }
    }); 
});