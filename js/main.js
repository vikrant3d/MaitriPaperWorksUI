

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
		
		$('#portfolio').mixitup({
                targetSelector: '.item',
                transitionSpeed: 350
            });
		
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
	
       
        /*$(function(){
            
        });*/
   };


function generateProductList(){
	var str = '[{"id":"27-06-2020-10:50:37","productId":1,"productName":"Flat Thali (25 piece)","stockStatus":"Y","category":"P","productDetailsList":[{"id":0,"minPrice":"70","maxPrice":"70","discount":" ","stockStatus":"Y","productDesc":"Flat Silver - White"}]},{"id":"27-06-2020-10:54:34","productId":2,"productName":"Leaf Thali (25 piece)","stockStatus":"Y","category":"P","productDetailsList":[{"id":0,"minPrice":"40","maxPrice":"40","discount":" ","stockStatus":"Y","productDesc":"Brown Leaf Thali"}]},{"id":"27-06-2020-10:57:22","productId":3,"productName":"Silver Thali (25 piece)","stockStatus":"Y","category":"P","productDetailsList":[{"id":0,"minPrice":"60","maxPrice":"60","discount":" ","stockStatus":"Y","productDesc":"Both Side Silver"},{"id":1,"minPrice":"65","maxPrice":"65","discount":" ","stockStatus":"Y","productDesc":"Silver and Brown Poly"},{"id":2,"minPrice":"70","maxPrice":"70","discount":" ","stockStatus":"Y","productDesc":"Silver and White Poly"}]},{"id":"27-06-2020-10:59:35","productId":4,"productName":"Silver Dish (30 piece)","stockStatus":"Y","category":"P","productDetailsList":[{"id":0,"minPrice":"20","maxPrice":"20","discount":" ","stockStatus":"Y","productDesc":"4 inch"},{"id":1,"minPrice":"30","maxPrice":"30","discount":" ","stockStatus":"Y","productDesc":"5 inch"}]},{"id":"27-06-2020-11:00:21","productId":5,"productName":"White Dish (30 piece)","stockStatus":"Y","category":"P","productDetailsList":[{"id":0,"minPrice":"15","maxPrice":"15","discount":" ","stockStatus":"Y","productDesc":"4 inch"},{"id":1,"minPrice":"25","maxPrice":"25","discount":" ","stockStatus":"Y","productDesc":"5 inch"}]},{"id":"27-06-2020-11:01:53","productId":6,"productName":"Silver Dona (30 piece)","stockStatus":"Y","category":"P","productDetailsList":[{"id":0,"minPrice":"12","maxPrice":"12","discount":" ","stockStatus":"Y","productDesc":"Silver Dona"}]},{"id":"28-06-2020-11:14:30","productId":7,"productName":"Cold Drink Cup (50 piece)","stockStatus":"Y","category":"P","productDetailsList":[{"id":0,"minPrice":"40","maxPrice":"40","discount":" ","stockStatus":"Y","productDesc":"120ml"}]},{"id":"28-06-2020-11:15:14","productId":8,"productName":"Ice-Cream Cup (50 piece)","stockStatus":"Y","category":"P","productDetailsList":[{"id":0,"minPrice":"45","maxPrice":"45","discount":" ","stockStatus":"Y","productDesc":"120ml"}]},{"id":"28-06-2020-11:15:50","productId":9,"productName":"Tea Glass  (50 piece)","stockStatus":"Y","category":"P","productDetailsList":[{"id":0,"minPrice":"25","maxPrice":"25","discount":" ","stockStatus":"Y","productDesc":"90ml"}]},{"id":"28-06-2020-11:16:24","productId":10,"productName":"Water Glass  (50 piece)","stockStatus":"Y","category":"P","productDetailsList":[{"id":0,"minPrice":"60","maxPrice":"60","discount":" ","stockStatus":"Y","productDesc":"160ml"}]},{"id":"28-06-2020-11:17:10","productId":11,"productName":"Spoon (100 piece)","stockStatus":"Y","category":"P","productDetailsList":[{"id":0,"minPrice":"25","maxPrice":"25","discount":" ","stockStatus":"Y","productDesc":"Spoon"}]},{"id":"28-06-2020-11:18:07","productId":12,"productName":"Tissue Paper (100 piece)","stockStatus":"Y","category":"P","productDetailsList":[{"id":0,"minPrice":"15","maxPrice":"15","discount":" ","stockStatus":"Y","productDesc":"Tissue Paper"}]}]';
	$(JSON.parse(str)).each(function(){
		console.log(this);
	})	
}