$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20 ){
			$('.navbar').addClass("sticky");
		}
		else{
			$('.navbar').removeClass("sticky");
		}
		if(this.scrollY > 500){
			$('.scroll-up-btn').addClass("show");
		}
		else 
			$('.scroll-up-btn').removeClass("show");
	})
	$('.menu-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
	});
	// scroll-up-btn script
	$('.scroll-up-btn').click(function(){
		$('html').animate({scrollTop: 0});
	});
	// typing animation script
	var typed = new Typed(".typing",{
		strings :["Developer","Designer", "Freelanser"],
		typeSpeed:100,
		backSpeed:100,
		loop:true
	});
	var typed = new Typed(".typing-2",{
		strings :["Developer","Designer", "Freelanser"],
		typeSpeed:100,
		backSpeed:60,
		loop:true
	});

	// owl caruosel script
	$('.carousel').owlCarousel({
		margin:20,
		loop: true,
		autopleyTimeOut:2000,
		autopleyHoverPause: true,
		responsive: {
			0 : {
				items: 1,
				new: false
			},
			600 : {
				items: 2,
				new: false
			},
			1000 : {
				items: 3,
				new : false
			}
		}

	});

});
