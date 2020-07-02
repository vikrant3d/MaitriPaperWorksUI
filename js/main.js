var productMap = {};
function mainList(){
	var map = {};
	map["main-1"]="All Products";
	map["main-2"]="Patravali";
	map["main-3"]="Paper Dish";
	map["main-4"]="Paper Dona";
	map["main-5"]="Spoon";
	map["main-6"]="Tissue Paper";
	map["main-7"]="Paper Glass";		
	createMainList(map);
}

function productList(){	
	productMap["product-1"]="Silver-White Flat Thali#main-2#This dish was design by silver foil paper from both side It is made in circular shape with small design.<br><br><b>Quantity: 25 piece per packet </b><br><br><b>Price: Rs 70 per packet. </b>";
	productMap["product-2"]="Brown Leaf Dish#main-2#It is mainly made from Sal leaves and Banyan tree leaves. It is made in circular shape and compartment inside, by stitching 6 to 8 sal leaves with tiny wooden sticks.<br><br><b>Quantity: 25 piece per packet </b><br><br><b>Price: Rs 40 per packet. </b>";
	productMap["product-3"]="Silver Both Side Thali#main-2#It is mainly made from Silver foil paper from both side. It is made in circular shape and compartment inside.<br><br><b>Quantity: 25 piece per packet </b><br><br><b>Price: Rs 60 per packet. </b>";
	productMap["product-4"]="Silver-White Brown Ploy#main-2#It is mainly made from Silver/White foil paper and Brown paper. It is made in circular shape and compartment inside.<br><br><b>Quantity: 25 piece per packet </b><br><br><b>Price: Rs 65 per packet. </b>";
	productMap["product-5"]="Silver-White White Poly#main-2#It is mainly made from Silver/White foil paper and White paper. It is made in circular shape and compartment inside.<br><br><b>Quantity: 25 piece per packet </b><br><br><b>Price: Rs 70 per packet. </b>";
	productMap["product-6"]="Silver Dish 4-inch#main-3#This dish was design by silver foil paper from both side.<br><br><b>Quantity: 30 piece per packet </b><br><br><b>Size: 4-inch</b><br><br><b>Price: Rs 20 per packet. </b>";
	productMap["product-7"]="Silver Dish 5-inch#main-3#This dish was design by silver foil paper from both side.<br><br><b>Quantity: 30 piece per packet </b><br><br><b>Size: 5-inch</b><br><br><b>Price: Rs 30 per packet. </b>";
	productMap["product-8"]="White Dish 4-inch#main-3#This dish was design by white paper from both side.<br><br><b>Quantity: 30 piece per packet </b><br><br><b>Size: 4-inch</b><br><br><b>Price: Rs 15 per packet. </b>";
	productMap["product-9"]="White Dish 5-inch#main-3#This dish was design by white paper from both side.<br><br><b>Quantity: 30 piece per packet </b><br><br><b>Size: 5-inch</b><br><br><b>Price: Rs 25 per packet. </b>";
	productMap["product-10"]="Silver Dona#main-4#This Dona was design by silver paper from both side.<br><br><b>Quantity: 30 piece per packet </b><br><br><b>Price: Rs 12 per packet. </b>";
	productMap["product-11"]="Plastic White Spoon#main-5#This small is white in color made with plastic.<br><br><b>Quantity: 100 piece per packet </b><br><br><b>Price: Rs 12 per packet. </b>";
	productMap["product-12"]="Tissue Paper#main-6#This soft tissue paper used for handwash, They are white in color.<br><br><b>Quantity: 100 piece per packet </b><br><br><b>Price: Rs 13 per packet. </b>";
	productMap["product-13"]="Cold Drink Glass#main-7#This glass is used for Cold Drink, Made up of white paper with brown design from all corners, very handy to use.<br><br><b>Quantity: 50 piece per packet </b><br><br><b>Size: 120 ml of capacity. </b><br><br><b>Price: Rs 40 per packet. </b>";
	productMap["product-14"]="IceCream Cup#main-7#This glass is used for Ice-cream, Made up of white paper, very handy to use.<br><br><b>Quantity: 50 piece per packet </b><br><br><b>Size: 120 ml of capacity. </b><br><br><b>Price: Rs 45 per packet. </b>";
	productMap["product-15"]="Tea Glass#main-7#This glass is used for Tea Drink, Made up of white paper, very handy to use.<br><br><b>Quantity: 50 piece per packet </b><br><br><b>Size: 90 ml of capacity. </b><br><br><b>Price: Rs 25 per packet. </b>";
	productMap["product-16"]="Water Glass#main-7#This glass is used for Water Drink, Made up of white paper with brown design from all corners, very handy to use.<br><br><b>Quantity: 50 piece per packet </b><br><br><b>Size: 160 ml of capacity. </b><br><br><b>Price: Rs 60 per packet. </b>";	
	createProductList(productMap);	
}

	$(document).ready(function () {
		  mainList();
		$(".filter").click(function (){
			
			$(".filter").removeClass("active");
			$(".item").hide();
			
			$(this).addClass("active");
			$("."+$(this).attr('data-id')).show();
			
			if("main-1" == $(this).attr('data-id')){
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
		
		checkCartStatus();
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
  

function createMainList(map){
	var str="";
	$.each(map, function(key,val){
       str = str + '<li class="filter" data-id="'+key+'">'+val+'</li>';
    });
	$(".mainListClass").html(str);
	$(".mainListClass > li:first").addClass("active");
	productList();
}	



function createProductList(map){
	var str="";
	$.each(map, function(key,val){
		var value = val.split("#");
       str = str + '<li class="item '+value[1]+'"><img src="images/'+key+'.jpg" alt="Food" ><h2 class="">'+value[0]+'</h2><div class="row" style="margin-bottom:10px"><div class=""><input type="button" value="Add to Order" class="btn btn-primary btn-sm" data-id='+key+' onClick="return addToCart(this)"/><input type="button" style="margin-left:5px" value="View Details" class="btn btn-primary btn-sm" data-id='+key+' onClick="return displayModalDetails(this)" /></div></div></li>';
    });
	$("#portfolio").html(str);	
}

function addToCart(obj){
	$("#modalLabel").html("Add to Cart Details");
	$("#modal-body-content").html(productMap[$(obj).attr('data-id')].split("#")[0] + " Successfully added to Order section.");
	$("#detailsModal").modal('show');		
	$("#cartTable").append('<tr><td>'+(++$("#cartTable > tr").length)+'</td><td><img src="images/'+$(obj).attr('data-id')+'.jpg" alt="Food" style="height:80px"></td><td>'+productMap[$(obj).attr('data-id')].split("#")[0]+'</td><td><input type="number" size="2" class="qty" style="width:55px" value="1"></td><td><input type="button" onClick="return removeCart(this)" value="Remove"></td></tr>');
	checkCartStatus();
}

function displayModalDetails(obj){	
	$("#modalLabel").html(productMap[$(obj).attr('data-id')].split("#")[0] + " Details");
	var str = '<div class="row"><div class="col-md-5" id="modal-img"><img src="images/'+$(obj).attr('data-id')+'.jpg" height="200px" width="200px" /></div><div class="col-md-7" id="modal-content">'+productMap[$(obj).attr('data-id')].split("#")[2]+'</div></div>';
	$("#modal-body-content").html(str);
	$("#detailsModal").modal('show');	
}

function removeCart(obj){
	
	$(obj).parent().parent().remove();
	checkCartStatus();
}

function checkCartStatus(){
	if($("#cartTable > tr").length == 0){
		$("#cartImgDiv").show();
		$("#cartTableDiv").hide();
	}else{
		$("#cartImgDiv").hide();
		$("#cartTableDiv").show();
	}
	
}
function closePopup(){	
	$("#detailsModal").modal('hide');	
}

function submitOrder(obj){
	if($("#cartTable > tr").length == 0){
		alert("Please add some Item in cart befor placing Order.");
		return false;
	}
    
    if($("#name").val() == '' ){
		   alert('Please enter your Name.');
		   $("#name").focus()
		   return false;
	   	}
		 if($("#email").val() == '' ){
		   alert('Please enter a valid email.');
		 $("#email").focus()
		   return false;
	   	}
		 if($("#Phone").val() == '' ){
		   alert('Please enter 10 digit Phone/Mobile Number.');
		   $("#Phone").focus()
		   return false;
		 }

		  $(obj).attr('disabled',true);
		  $(obj).attr('value','Please wait ...');
		 var orderMgs = "<br><br><br><b>Below are list of Products Ordered </b><br><ol>";
		$("#cartTable > tr").each(function(){
			orderMgs = orderMgs + "<li>" + $(this).find("td").eq(2).html() +", With Quantity "+ $(this).find("td").eq(3).find('.qty').val()+"</li>";
		});
		orderMgs = orderMgs + "</ol>";
		
		  var map={}
		  map["name"]=$("#name").val();
		  map["emailid"]=$("#email").val();
		  map["phoneNo"]=$("#Phone").val();
		  map["message"]=$("#message").val();
		  map["otherDetails"]=orderMgs;
		  $.ajax({
		   type: 'POST',
		   data: JSON.stringify(map),
		   url: "https://5vvnjl5hii.execute-api.ap-south-1.amazonaws.com/dev/MP/sendEmail",
		   success: function (response) {
		  alert("Thanks you, for Submitting order, We will get back you soon.");
		  location.reload();
		  },
		   error : function (response) {
		  alert("Error while submitting response, Please contact admin")
		  location.reload();
		  }
		  
		  });
  return false;
  }
