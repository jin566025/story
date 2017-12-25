//炒鸡阉割版本的懒加载
(function(){
	function calWidth(){
		var recommendsWidth = $(".recommends").width();
		$(".recommends").css({"height":recommendsWidth+"px","line-height":recommendsWidth+"px"})
		var sectionWidth = $(".section").width();
		$(".section-container").css("height",sectionWidth+"px");
		$(".section-container2").css("height",sectionWidth+"px");
	}
	var aImg = document.querySelectorAll('.section-container');
	
    var len = aImg.length;
    var n = 0;//存储图片加载到的位置，避免每次都从第一张图片开始遍历
    window.onscroll = function() {
        loadImage()
    };
    window.onresize=function(){
		calWidth();
		loadImage()
	}
    window.onload=function(){
    	calWidth();
		loadImage()
		
	};
	function loadImage(){
		var seeHeight = document.documentElement.clientHeight;
	
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        for (var i = n; i < len; i++) {
            if (aImg[i].offsetTop < seeHeight + scrollTop) {
             	if(aImg[i].className=="section-container"){
             		var img_url = aImg[i].getAttribute('data-bg')
             		console.log(img_url)
             		aImg[i].style.backgroundImage = img_url;
             		aImg[i].setAttribute("class","section-container2")
             	}        
                n = i + 1;
            }
        }
	}

})();