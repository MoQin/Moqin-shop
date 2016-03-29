
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
        "url": "http://moqin89.com/js/php.php",
		"template":".pro-more-list",
		"trigger":".get_more"
	})
	var lock=true;


			    // $.ajax({
			    //     type: "post",
			    //     dataType: "jsonp",
			    //     contentType: "application/json",
			    //     url: "http://moqin89.com/js/php.php",
			    //     data: "",
			    //     success: function(data){
			    //     	alert(data.d[2].imgSrc)
			    //     },
			    //     error:function(XMLRequest,textStatue,errorThrown){
			    //     	alert(XMLRequest.status);
			    //     	alert(XMLRequest.readyState);
			    //     }

		   		//  });




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

