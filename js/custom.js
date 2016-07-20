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
