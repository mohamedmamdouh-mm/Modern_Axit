$(function(){
    "use Strict";
    $(window).scroll(function(){
       
        
        var navbar = $(".navbar");
        
        
        if($(window).scrollTop() >= navbar.height()) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
    });
    // deal with tabs
    $('.tab-switch li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
        // hide all divs
        $('.tabs-section .tabs-content > div').hide();
        $('.' +$(this).data("class")).show();
        window.console.log($(this).data("class"));
    })
});