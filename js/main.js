
$(function(){
	$(".logo").click(function(){
		window.location.href='index.html'
	})
	
	$(".navs").eq(0).click(function(){
		window.location.href='index.html'
	})
	$(".navs").eq(1).click(function(){
		window.location.href='travel.html'
	})
	$(".navs").eq(2).click(function(){
		window.location.href='trifles.html'
	})
	$(".navs").eq(3).click(function(){
		window.location.href='life.html'
	})
	$(".navs").eq(4).click(function(){
		window.location.href='quotations.html'
	})
	$(".navs").eq(5).click(function(){
		window.location.href='about.html'
	})
	
	$(".section").click(function(){})
	$(".main").on("click",".section",function(){
		window.open("detail.html")
	})
	$(".collect").click(function() {
	    var ctrl = (navigator.userAgent.toLowerCase()).indexOf('mac') != -1 ? 'Command/Cmd': 'CTRL';
	    if (document.all) {
	        window.external.addFavorite('url', 'story')
	    } else if (window.sidebar) {
	        window.sidebar.addPanel('story', 'url', "")
	    } else {
	        alert('您可以尝试通过快捷键' + ctrl + ' + D 加入到收藏夹~')
	    }
	})

	$(".setIndex").click(function(){ 
        var url = this.href; 
        try { 
            this.style.behavior = "url(#default#homepage)"; 
            this.setHomePage(url); 
        } catch (e) { 
            if (document.all) { 
	        document.body.style.behavior="url(#default#homepage)"; 
	        document.body.setHomePage(url);	            
	            } else if (window.sidebar) { 
					if (window.netscape) { 
					                try { 
					                    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"); 
					                } catch (e) { 
					                    alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。"); 
					                    return false; 
					                } 
					} 
	                var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch); 
	                prefs.setCharPref('browser.startup.homepage',url);	
	            } else { 
	               alert('您的浏览器不支持自动设置首页, 使用浏览器菜单或在浏览器地址栏输入“chrome://settings/browser”手动设置!'); 
	                
	            } 
	        } 
	        return false;	
	});	

})


