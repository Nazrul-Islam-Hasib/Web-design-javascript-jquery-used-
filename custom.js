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




//lightbox gallery manually

     function showImage1(){
       jQuery(".image-bg-gallery").show();
       jQuery(".imgg1").show();
       jQuery(".imgg2").hide();
       jQuery(".imgg3").hide();
       jQuery(".imgg4").hide();
       jQuery(".imgg5").hide();
       jQuery(".imgg6").hide();
       jQuery(".imgg7").hide();
       jQuery(".imgg8").hide();
       jQuery(".imgg9").hide();
     }
     function closeImage1(){
       jQuery(".image-bg-gallery").hide();
       jQuery(".imgg1").hide();
     }
     jQuery(".z1").click(function(){
      showImage1();   
     })
     jQuery(".image-bg-gallery").click(function(){
      closeImage1();
     })


     function showImage2(){
       jQuery(".image-bg-gallery").show();
       jQuery(".imgg2").show();
       jQuery(".imgg1").hide();
       jQuery(".imgg3").hide();
       jQuery(".imgg4").hide();
       jQuery(".imgg5").hide();
       jQuery(".imgg6").hide();
       jQuery(".imgg7").hide();
       jQuery(".imgg8").hide();
       jQuery(".imgg9").hide();
     }
     function closeImage2(){
       jQuery(".image-bg-gallery").hide();
       jQuery(".imgg2").hide();
     }
     jQuery(".z2").click(function(){
      showImage2();   
     })
     jQuery(".image-bg-gallery").click(function(){
      closeImage2();
     })

     function showImage3(){
       jQuery(".image-bg-gallery").show();
       jQuery(".imgg3").show();
       jQuery(".imgg2").hide();
       jQuery(".imgg1").hide();
       jQuery(".imgg4").hide();
       jQuery(".imgg5").hide();
       jQuery(".imgg6").hide();
       jQuery(".imgg7").hide();
       jQuery(".imgg8").hide();
       jQuery(".imgg9").hide();
     }
     function closeImage3(){
       jQuery(".image-bg-gallery").hide();
       jQuery(".imgg3").hide();
     }
     jQuery(".z3").click(function(){
      showImage3();   
     })
     jQuery(".image-bg-gallery").click(function(){
      closeImage3();
     })

     function showImage4(){
       jQuery(".image-bg-gallery").show();
       jQuery(".imgg4").show();
       jQuery(".imgg2").hide();
       jQuery(".imgg3").hide();
       jQuery(".imgg1").hide();
       jQuery(".imgg5").hide();
       jQuery(".imgg6").hide();
       jQuery(".imgg7").hide();
       jQuery(".imgg8").hide();
       jQuery(".imgg9").hide();
     }
     function closeImage4(){
       jQuery(".image-bg-gallery").hide();
       jQuery(".imgg4").hide();
     }
     jQuery(".z4").click(function(){
      showImage4();   
     })
     jQuery(".image-bg-gallery").click(function(){
      closeImage4();
     })

     function showImage5(){
       jQuery(".image-bg-gallery").show();
       jQuery(".imgg5").show();
       jQuery(".imgg2").hide();
       jQuery(".imgg3").hide();
       jQuery(".imgg4").hide();
       jQuery(".imgg1").hide();
       jQuery(".imgg6").hide();
       jQuery(".imgg7").hide();
       jQuery(".imgg8").hide();
       jQuery(".imgg9").hide();
     }
     function closeImage5(){
       jQuery(".image-bg-gallery").hide();
       jQuery(".imgg5").hide();
     }
     jQuery(".z5").click(function(){
      showImage5();   
     })
     jQuery(".image-bg-gallery").click(function(){
      closeImage5();
     })

     function showImage6(){
       jQuery(".image-bg-gallery").show();
       jQuery(".imgg6").show();
       jQuery(".imgg2").hide();
       jQuery(".imgg3").hide();
       jQuery(".imgg4").hide();
       jQuery(".imgg5").hide();
       jQuery(".imgg1").hide();
       jQuery(".imgg7").hide();
       jQuery(".imgg8").hide();
       jQuery(".imgg9").hide();
     }
     function closeImage6(){
       jQuery(".image-bg-gallery").hide();
       jQuery(".imgg6").hide();
     }
     jQuery(".z6").click(function(){
      showImage6();   
     })
     jQuery(".image-bg-gallery").click(function(){
      closeImage6();
     })

     function showImage7(){
       jQuery(".image-bg-gallery").show();
       jQuery(".imgg7").show();
       jQuery(".imgg2").hide();
       jQuery(".imgg3").hide();
       jQuery(".imgg4").hide();
       jQuery(".imgg5").hide();
       jQuery(".imgg6").hide();
       jQuery(".imgg1").hide();
       jQuery(".imgg8").hide();
       jQuery(".imgg9").hide();
     }
     function closeImage7(){
       jQuery(".image-bg-gallery").hide();
       jQuery(".imgg7").hide();
     }
     jQuery(".z7").click(function(){
      showImage7();   
     })
     jQuery(".image-bg-gallery").click(function(){
      closeImage7();
     })

     function showImage8(){
       jQuery(".image-bg-gallery").show();
       jQuery(".imgg8").show();
       jQuery(".imgg2").hide();
       jQuery(".imgg3").hide();
       jQuery(".imgg4").hide();
       jQuery(".imgg5").hide();
       jQuery(".imgg6").hide();
       jQuery(".imgg7").hide();
       jQuery(".imgg1").hide();
       jQuery(".imgg9").hide();
     }
     function closeImage8(){
       jQuery(".image-bg-gallery").hide();
       jQuery(".imgg8").hide();
     }
     jQuery(".z8").click(function(){
      showImage8();   
     })
     jQuery(".image-bg-gallery").click(function(){
      closeImage8();
     })

     function showImage9(){
       jQuery(".image-bg-gallery").show();
       jQuery(".imgg9").show();
       jQuery(".imgg2").hide();
       jQuery(".imgg3").hide();
       jQuery(".imgg4").hide();
       jQuery(".imgg5").hide();
       jQuery(".imgg6").hide();
       jQuery(".imgg7").hide();
       jQuery(".imgg8").hide();
       jQuery(".imgg1").hide();
     }
     function closeImage9(){
       jQuery(".image-bg-gallery").hide();
       jQuery(".imgg9").hide();
     }
     jQuery(".z9").click(function(){
      showImage9();   
     })
     jQuery(".image-bg-gallery").click(function(){
      closeImage9();
     })
//lightbox gallery manually ends

//lightbox blog manually
     function showImage10(){
       jQuery(".image-bg").show();
       jQuery(".imgg3").show();
       jQuery(".imgg7").hide();
       jQuery(".imgg9").hide();
     }
     function closeImage10(){
       jQuery(".image-bg").hide();
       jQuery(".imgg3").hide();
     }
     jQuery(".zoom1").click(function(){
      showImage10();   
     })
     jQuery(".image-bg").click(function(){
      closeImage10();
     })

     function showImage11(){
       jQuery(".image-bg").show();
       jQuery(".imgg7").show();
       jQuery(".imgg9").hide();
       jQuery(".imgg3").hide();
     }
     function closeImage11(){
       jQuery(".image-bg").hide();
       jQuery(".imgg7").hide();
     }
     jQuery(".zoom2").click(function(){
      showImage11();   
     })
     jQuery(".image-bg").click(function(){
      closeImage11();
     })

     function showImage12(){
       jQuery(".image-bg").show();
       jQuery(".imgg9").show();
       jQuery(".imgg3").hide();
       jQuery(".imgg7").hide();
     }
     function closeImage12(){
       jQuery(".image-bg").hide();
       jQuery(".imgg9").hide();
     }
     jQuery(".zoom3").click(function(){
      showImage12();   
     })
     jQuery(".image-bg").click(function(){
      closeImage12();
     })
//lightbox blog manually ends
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