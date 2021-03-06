//progress-bar
var simplebar = new Nanobar();
simplebar.go(100);
var colorbar = new Nanobar({target: document.getElementById('color')});
colorbar.go(100);
var centeredbar = new Nanobar({target: document.getElementById('centered')});
centeredbar.go(100);

// slider
$(".slider").slick({
     lazyLoad: 'ondemand',
     dots: true,
     infinite: true,
     speed: 500,
     //fade: true,
     //cssEase: 'linear',
     autoplay: false,
     //dots: true,
     responsive: [{
         breakpoint: 500,
         settings: {
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1
         }
     }]
});
//featherlight
$(document).ready(function(){
      $('.img-holder a img').hover(function() {
          var imgPath = $(this).attr('src');
          //alert(imgPath);
          $(this).attr('data-featherlight', imgPath);
     });
});
//    smooth scrolling
$('a[href^=#]').on("click",function(){
    var t= $(this.hash);
    var t=t.length&&t||$('[name='+this.hash.slice(1)+']');
    if(t.length){
        var tOffset=t.offset().top;
        $('html,body').animate({scrollTop:tOffset-20},'slow');
        return false;
    }
});
// change on scroll
$(document).ready(function(){
    var scroll_start = 0;
    var startchange = $('#startchange');
    var offset = startchange.offset();
    if (startchange.length){
       $(document).scroll(function() {
       scroll_start = $(this).scrollTop();
            if(scroll_start > offset.top) {
                $(".main-menu-container").addClass('top-menu-container');
                $('.navbar-default .navbar-brand').css('display', 'block');
            } else {
                $(".main-menu-container").removeClass('top-menu-container');
                $('.navbar-default .navbar-brand').css('display', 'none');

            }
       });
    }
});
$(document).ready(function(){
    //     nav
    $('.main-menu-container').load('parts/nav.html');
    //$('head').load('parts/header.html');
});
$(document).ready(function(){
    // for contact page
    $('.input-box').mouseover(function(){
        //alert("sample");
        $(this).find('label').addClass("small-label");
        $(this).find('.write-here').focus().addClass("write-padding-zero");
    }).mouseleave(function(){
        $(this).find('label').removeClass("small-label");
        $(this).find('.write-here').removeClass("write-padding-zero");
        //$(this).find('.write-here').blur().removeClass("write-padding-zero");
    });

    // lazy load images in home page
    $(function() {
        $('.lazy').lazy();
    });
});
