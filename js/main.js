$('#tab').click(
    function(){
        $(this).find(':radio').attr('checked','checked');
});
var owl = $('.owl-carousel');
	owl.owlCarousel({
		items:1,
		loop:true,
		margin:0,
        nav:true,
        dots: true,
		autoplay:true,
		autoplayTimeout:3000,
        autoplayHoverPause:true
	});
	$('.play').on('click',function(){
		owl.trigger('autoplay.play.owl',[3000])
	})
				
	$('.stop').on('click',function(){
		owl.trigger('autoplay.stop.owl')
	})
    
$(document).ready(function() {
    $('#cart').bind('click', function () {
        $('#cart, #cart_content').toggleClass('show');
        var time;
        $('#cart_content').mouseout(function () {
            time = setTimeout(function () {
                $('#cart, #cart_content').removeClass('show');
            }, 3000);
        });
        $('#cart_content').mouseover(function () {
            clearTimeout(time);
        });
        if ($('.cart_content .mini-cart-info tr').length != 0) {
            $('.quick_order').addClass('show')
        }
    });
});
$('.cart-go').click(function(){
    $('#cart, #cart_content').toggleClass('show');
});
 $(document).ready(function(){
    $(".navbar-nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});