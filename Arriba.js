// JavaScript Document
$(document).ready(function(){
 
	$('.irarriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.irarriba').slideDown(300);
		} else {
			$('.irarriba').slideUp(300);
		}
	});
 
});



