

	$(document).ready(function () {
		$(".filter").click(function (){
			
			$(".filter").removeClass("active");
			$(".item").hide();
			
			$(this).addClass("active");
			$("."+$(this).attr('data-id')).show();
			
			if("all" == $(this).attr('data-id')){
				$(".item").show();
			}
		})
		
		$(document).on("scroll", onScroll);
 
		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");
 
			$('a').each(function () {
				$(this).removeClass('navactive');
			})
			$(this).addClass('navactive');
 
			var target = this.hash;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top+2
			}, 500, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	});
 
	function onScroll(event){
		var scrollPosition = $(document).scrollTop();
		$('.nav li a').each(function () {
			var currentLink = $(this);
			var refElement = $(currentLink.attr("href"));
			if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
				$('ul.nav li a').removeClass("navactive");
				currentLink.addClass("navactive");
				if($(currentLink).attr('href') == '#top'){
					$("#mainLabel").html("Morya EnterPrises")
				}
			}
			else{
				if($(currentLink).attr('href') == '#top'){
					$("#mainLabel").html("Maitri PaperWorks")
				}
				currentLink.removeClass("navactive");
			}
		});
	
       
        $(function(){
            $('#portfolio').mixitup({
                targetSelector: '.item',
                transitionSpeed: 350
            });
        });
   };
