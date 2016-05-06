
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
	//回到顶部
	$.scrollUp({
		"scrollText":"",
	});
	$(window).scroll(function(){
		if($(this).scrollTop()>300){
			$("#scrollUp").fadeIn();
			$("#scrollUp").html('<i class="glyphicon glyphicon-arrow-up myup"></i>');
		}else{
			$("#scrollUp").fadeOut();
		}
	})
	// 首页加载更多
	$(".pro-more").more({
        "url": "http://moqin89.com/js/php.php",
		"template":".pro-more-list",
        'amount': '2',
		"trigger":".pro-more-pic"
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

	// 单击搜索按钮
	$(".input-search").focus(function(){
		$(".contain").css({"display":"none"});
		$(".search").css({"display":"block"});
	})
	// 单击关闭
	$(".search-close").click(function(){
		$(".contain").css({"display":"block"});
		$(".search").css({"display":"none"});
	})


	// 单击搜索
	$(".search-text").click(function(){
		var searchText=$(".search-input").val();
		if(searchText!=""){
			alert("单击搜索"+searchText)
		}else{
			alert("单击搜索,不过是空的	")
		}
	})
	// 单击清除最近
	$(".search-clear").click(function(){
		alert("单击清楚最近")
	})
	//单击热搜
	$(".ul-hot li").click(function(){
		var searchText=$(this).text();
		alert("单击了热搜："+searchText)
	})

})

