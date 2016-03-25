
$(function(){
	// 商品标题省略号
	$(".index-pro-title a").each(function(index){
		var maxWidth=40;
		if($(this).text().length>maxWidth){
			$(this).text($(this).text().substring(0,maxWidth));
			$(this).html($(this).html()+"....")
		}
	})
	// 首页轮播
	$(function() {
	    var mySwiper = new Swiper(".swiper-container", {
	        speed: 400,
	        loop: true,
	        pagination: ".swiper-pagination",
	        autoplay: 2000
	    })
	})
	// 首页加载更多
	$(".pro-more").more({
		"url":"http://115yz.com/moqin/php.php",
		"template":".pro-more-list",
		"trigger":".pro-more-pic",
		"scroll":"true"
	})
	var lock=true;


			    $.ajax({
			        type: "post",
			        dataType: "json",
			        contentType: "text/json",
			        url: "http://115yz.com/moqin/php.php",
			        data: "{'pageSize':'00'}",
			        success: function(data){
			        	alert("d")
			        },
			        error:function(aa){
			        	alert("错误");
			        }

		   		 });




	// $(window).scroll(function() {
			
	// 		var scrollTop = $(window).scrollTop() + 100;
	// 		var documentHeight = $(document).height() - $(window).height();
	// 		if (scrollTop >= documentHeight &&lock==true) {
				

	// 			lock=false;
	// 			$.ajax({
	// 				type:"post",
	// 				url:"http://115yz.com/moqin/php.php",
	// 				data:{},
	// 				dataType:"json",
	// 				success:function(data){
	// 						alert(data)
	// 				}
	// 			})
	// 		}
	// });


})

