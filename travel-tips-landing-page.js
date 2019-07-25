	$(document).ready(function() {
		
		$("#appStore").click(function(){
			
			window.open("https://www.apple.com/uk/ios/app-store/");
			
		});
		
		$("#googlePlay").click(function(){
			
			window.open("https://play.google.com/store");
			
		});
		
		//Scroll Spy
		$(".nav-link").on('click', function(event) {

			if (this.hash !== "") {
				
				event.preventDefault();

				var hash = this.hash;

				$('html, body').animate({
					
					scrollTop: $(hash).offset().top
					
				}, 800, function(){
				   
					window.location.hash = hash;
					
				});
				
			};
			
		});
		
	});