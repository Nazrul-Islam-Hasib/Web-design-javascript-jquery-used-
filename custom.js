jQuery(document).ready(function(){
	new WOW().init();
  jQuery('.owl-carousel').owlCarousel({
    loop:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
     var owl = jQuery('.owl-carousel');
     owl.owlCarousel();
     // Go to the next item
     jQuery('.owl-next').click(function() {
         owl.trigger('next.owl.carousel');
     })
     // Go to the previous item
     jQuery('.owl-prev').click(function() {
         // With optional speed parameter
         // Parameters has to be in square bracket '[]'
         owl.trigger('prev.owl.carousel', [300]);
     })
     //responsive menu btn
     jQuery(".menu-btn i").click(function(){
     	jQuery(".menu-area").slideToggle();
     })
     jQuery(window).resize(function(){
     	var screenSize=jQuery(window).width();
     	if (screenSize > 768) {
     		jQuery(".menu-area").removeAttr("style");
     	}
     })



     function showImage(){
 		jQuery(".img1").fadeIn({'display' : 'block'}, 500);
 		jQuery(".Image-bg").fadeIn({'display' : 'block'}, 500);
 	}
 	function closeImage(){
 		jQuery(".img1").hide();
 		jQuery(".Image-bg").hide();
 	}

 	jQuery(".img1").click(function(){
        showImage();   
 	})
 	jQuery(".Image-bg").click(function(){
 		closeImage();
 	})

 	//counter strats
 	var a = 0;
    $(window).scroll(function() {

      var oTop = $('#counter').offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function() {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
              countNum: countTo
            },
            {
              duration: 4000,
              easing: 'swing',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }
            });
        });
        a = 1;
      }
    });

    //counter ends
    jQuery(window).scroll(function(){
		var distance = jQuery(window).scrollTop();
	    jQuery(".office").text(distance);
    });
    //menu click
    jQuery("#home").click(function(){
 		jQuery("html").animate({'scrollTop' : '0'}, 1000);
 		return false;
 	});
 	jQuery("#about").click(function(){
 		jQuery("html").animate({'scrollTop' : '560'}, 1000);
 		return false;
 	});
 	jQuery("#gallery").click(function(){
 		jQuery("html").animate({'scrollTop' : '1160'}, 1000);
 		return false;
 	});
 	jQuery("#blog").click(function(){
 		jQuery("html").animate({'scrollTop' : '2260'}, 1000);
 		return false;
 	});
 	jQuery("#services").click(function(){
 		jQuery("html").animate({'scrollTop' : '2960'}, 1000);
 		return false;
 	});
 	jQuery("#sponsorship").click(function(){
 		jQuery("html").animate({'scrollTop' : '3559'}, 1000);
 		return false;
 	});
 	jQuery("#contact").click(function(){
 		jQuery("html").animate({'scrollTop' : '3960'}, 1000);
 		return false;
 	});




 	jQuery(window).scroll(function(){
 		var durotto = jQuery(window).scrollTop();

 		if(durotto >= 0 && durotto < 555){
 			jQuery("#home").addClass("active");
 		}
 		else{
 			jQuery("#home").removeClass("active");
 		}

 		if(durotto >= 555 && durotto < 1155){
 			jQuery("#about").addClass("active");
 		}
 		else{
 			jQuery("#about").removeClass("active");
 		}
 		if(durotto >= 1155 && durotto < 2255){
 			jQuery("#gallery").addClass("active");
 		}
 		else{
 			jQuery("#gallery").removeClass("active");
 		}
 		if(durotto >= 2255 && durotto < 2955){
 			jQuery("#blog").addClass("active");
 		}
 		else{
 			jQuery("#blog").removeClass("active");
 		}
 		if(durotto >= 2955 && durotto < 3554){
 			jQuery("#services").addClass("active");
 		}
 		else{
 			jQuery("#services").removeClass("active");
 		}
 		if(durotto >= 3554 && durotto < 3955){
 			jQuery("#sponsorship").addClass("active");
 		}
 		else{
 			jQuery("#sponsorship").removeClass("active");
 		}
 		if(durotto >= 3955){
 			jQuery("#contact").addClass("active");
 		}
 		else{
 			jQuery("#contact").removeClass("active");
 		}

 		if (durotto > 555) {
 			jQuery(".office").fadeIn();
 		}
 		else{
 			jQuery(".office").fadeOut();
 		} 		
 	});
    
});