// 商品标题省略号
$(function(){
	$(".index-pro-title a").each(function(index){
		console.log($(this).text().length)
		var maxWidth=40;
		if($(this).text().length>maxWidth){
			$(this).text($(this).text().substring(0,maxWidth));
			$(this).html($(this).html()+"....")
		}
	})
})