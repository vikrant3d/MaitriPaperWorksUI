var productMap = {};
function mainList(){
	var map = {};
	map["main-1"]="ALL PRODUCTS";
	map["main-2"]="PATRAVALI (THALI)";
	map["main-3"]="DISH";
	map["main-4"]="DONA";
	map["main-5"]="PAPER GLASS";
	map["main-6"]="TISSUE PAPER";
	map["main-7"]="SPOON";
	createMainList(map);
}

function productList(){
	productMap["product-1"]="<strong>SILVER WHITE FLAT THALI</strong>#main-2#<p><strong>COLOUR:&nbsp; &nbsp; &nbsp;&nbsp;</strong>Silver above and white below</p><p><strong>SHAPE:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</strong>Round shape with no compartments</p><p><strong>QUANTITY:</strong>&nbsp; 25 pieces per packet</p><p><strong>PRICE:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>Rs.70 per packet</p>";

	productMap["product-2"]="<strong>LEAF THALI</strong>#main-2#<p><strong>COLOUR:</strong><span style='white-space:pre;'>&nbsp; &nbsp; &nbsp;&nbsp;</span>Brown colour. Made of 8-10 stitched sal leaves</p><p><strong>SHAPE:</strong><span style='white-space:pre;'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span>Round shape with 3 compartments</p><p><strong>SIZE:</strong><span style='white-space:pre;'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span>13 Inches</p><p><strong>QUANTITY:</strong> &nbsp;25 pieces per packet</p><p><strong>PRICE:</strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Rs.40 per packet</p>";

	productMap["product-3"]="<strong>SILVER THALI</strong>#main-2#<p><strong>COLOUR:</strong><span style='white-space:pre;'>&nbsp; &nbsp;&nbsp; </span>Silver above and white below</p><p><strong>SHAPE:</strong><span style='white-space:pre;'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span>Round shape with 3 compartments</p><p><strong>SIZE:</strong><span style='white-space:pre;'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span>13 Inches</p><p><strong>QUANTITY:</strong>&nbsp; 25 pieces per packet</p><p><strong>PRICE: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</strong>Rs.60 per packet</p>";

	productMap["product-4"]="<strong>SILVER-BROWN (BROWN POLY) THALI</strong>#main-2#<p><strong>COLOUR: &nbsp; &nbsp; &nbsp;</strong>Silver above and brown below. This thali is thick &amp; hard than usual</p><p><strong>SHAPE: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>Round shape with 3 compartments.</p><p><strong>SIZE: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>13 Inches</p><p><strong>QUANTITY: &nbsp;</strong>25 pieces per packet</p><p><strong>PRICE:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>Rs.65 per packet</p>";

	productMap["product-5"]="<strong>SILVER-WHITE (WHITE POLY) THALI</strong>#main-2#<p><strong>COLOUR: &nbsp; &nbsp; &nbsp;</strong>Silver above and white below. This thali thick &amp; hard than usual</p><p><strong>SHAPE:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</strong>Round shape with 3 compartments.</p><p><strong>SIZE: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>13 Inches</p><p><strong>QUANTITY: &nbsp;</strong>25 piece per packet</p><p><strong>PRICE: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</strong>Rs.70 per packet</p>";

	productMap["product-6"]="<strong>SILVER DISH (SMALL)</strong>#main-3#<p><strong>COLOUR: &nbsp; &nbsp; &nbsp;</strong>Silver above and white below.</p><p><strong>SHAPE:</strong><span style='white-space:pre;'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span>Round shape with no compartments</p><p><strong>SIZE:</strong><span style='white-space:pre;'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span>4 Inches</p><p><strong>QUANTITY:</strong>&nbsp; 30 pieces per packet</p><p><strong>PRICE: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</strong>Rs.30 per packet</p>";

	productMap["product-7"]="<strong>SILVER DISH (BIG)</strong>#main-3#<p><strong>COLOUR: &nbsp; &nbsp; &nbsp;</strong>Silver above and white below.</p><p><strong>SHAPE:</strong><span style='white-space:pre;'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span>Round shape with no compartments</p><p><strong>SIZE:</strong><span style='white-space:pre;'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span>5 Inches</p><p><strong>QUANTITY: &nbsp;</strong>30 pieces per packet</p><p><strong>PRICE:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>Rs.35 per packet</p>";

	productMap["product-8"]="<strong>PAPER DISH (SMALL)</strong>#main-3#<p><strong>COLOUR: &nbsp; &nbsp; &nbsp;</strong>White paper on both sides</p><p><strong>SHAPE: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>Round shape with no compartments</p><p><strong>SIZE: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>4 Inches</p><p><strong>QUANTITY: &nbsp;</strong>30 pieces per packet</p><p><strong>PRICE:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>Rs.15 per packet</p>";

	productMap["product-9"]="<strong>PAPER DISH (BIG)</strong>#main-3#<p><strong>COLOUR:&nbsp; &nbsp; &nbsp;&nbsp;</strong>White paper on both sides.</p><p><strong>SHAPE: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>Round shape with no compartments</p><p><strong>SIZE: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>5 Inches</p><p><strong>QUANTITY: &nbsp;</strong>30 pieces per packet</p><p><strong>PRICE:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>Rs.20 per packet</p>";

	productMap["product-10"]="<strong>SILVER DONA</strong>#main-4#<p><strong>COLOUR: &nbsp; &nbsp; &nbsp;</strong>Silver above and white below</p><p><strong>SHAPE:</strong><span style='white-space:pre;'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span>Round shape with liquid&nbsp;</p><p><strong>SIZE:</strong><span style='white-space:pre;'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span>3 Inches</p><p><strong>QUANTITY: &nbsp;</strong>30 pieces per packet</p><p><strong>PRICE: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</strong>Rs.10 per packet</p>";

	productMap["product-11"]="<strong>WATER GLASS</strong>#main-5#<p><strong>MATERIAL:</strong>&nbsp; Paper</p><p><strong>COLOUR:</strong>&nbsp; &nbsp; &nbsp; Descent colour</p><p><strong>SIZE:</strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 160 ml</p><p><strong>QUANTITY:</strong>&nbsp; 50 pieces per packet</p><p><strong>PRICE: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</strong>Rs.60 per packet</p>";

	productMap["product-12"]="<strong>COLD DRINK GLASS</strong>#main-5#<p><strong>MATERIAL:</strong>&nbsp; Paper</p><p><strong>COLOUR:</strong>&nbsp; &nbsp; &nbsp; Descent colour</p><p><strong>SIZE:</strong><span style='white-space:pre;'>&nbsp; &nbsp;&nbsp;</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 120 ml</p><p><strong>QUANTITY:</strong>&nbsp; 50 pieces per packet</p><p><strong>PRICE: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</strong>Rs.40 per packet</p>";

	productMap["product-13"]="<strong>TEA GLASS</strong>#main-5#<p><strong>MATERIAL:</strong> Paper</p><p><strong>COLOUR:</strong>&nbsp; &nbsp; &nbsp;Descent colour</p><p><strong>SIZE:</strong><span style='white-space:pre;'>&nbsp; &nbsp;&nbsp;</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 90 ml</p><p><strong>QUANTITY: &nbsp;</strong>50 pieces per packet</p><p><strong>PRICE: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</strong>Rs.25 per packet</p>";

	productMap["product-14"]="<strong>ICE-CREAM CUP</strong>#main-5#<p><strong>MATERIAL:</strong>&nbsp; Paper</p><p><strong>COLOUR:</strong>&nbsp; &nbsp; &nbsp; Descent colour</p><p><strong>SIZE:</strong><span style='white-space:pre;'>&nbsp; &nbsp;&nbsp;</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 120 ml Base</p><p><strong>QUANTITY: &nbsp;</strong>50 pieces per packet</p><p><strong>PRICE: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</strong>Rs.45 per packet</p>";

	productMap["product-15"]="<strong>TISSUE PAPER</strong>#main-6#<p><strong>COLOUR:</strong><span style='white-space:pre;'>&nbsp; &nbsp; &nbsp;&nbsp;</span>Soft white tissue for wiping and cleaning</p><p><strong>SHAPE:</strong><span style='white-space:pre;'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span>Square with 4 folds</p><p><strong>QUANTITY: &nbsp;</strong>50 pieces per packet</p><p><strong>PRICE: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</strong>Rs.45 per packet</p>";

	productMap["product-16"]="<strong>SPOON</strong>#main-7#<p><strong>COLOUR:</strong><span style='white-space:pre;'>&nbsp; &nbsp; &nbsp;&nbsp;</span>Bright white</p><p><strong>SIZE: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>4 Inches</p><p><strong>QUANTITY: &nbsp;</strong>100 pieces per packet</p><p><strong>PRICE:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</strong>Rs.25 per packet</p>";

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
