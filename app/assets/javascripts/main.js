 $(window).scroll(function() {    

	//Show related article when within 1000px from bottom of article
	if($(window).scrollTop() + $(window).height() > $(document).height() - 1000) {
		$("#sidebar-left article").addClass("sidebar-left--article-show");
		$("#white-dim").fadeIn();
	}

	//Hide related article when above 1000px from bottom of article
	if($(window).scrollTop() + $(window).height() < $(document).height() - 1000) {
		$("#sidebar-left article").removeClass("sidebar-left--article-show");
		$("#white-dim").fadeOut();
	}

});

//Disable skrollr if touch screen

	//Disable skrollr if touch screen or if not an article
	//if ( !Modernizr.touch && $("body").hasClass("article") ) { 

$(window).resize(function() {
    if ( !Modernizr.touch || $(window).width() > 640 ) { 
		var s = skrollr.init({forceHeight: false});
	}
});

$(window).on("orientationchange",function(){
	if ( !Modernizr.touch || $(window).width() > 640 ) { 
		var s = skrollr.init({forceHeight: false});
	}
});

//Open code editor and lock scrolling
$(".code-editor").click(function() {
	$("#side-view").addClass("side-view--show");
	$("body").addClass("body--lock");
	return false;
});

//Close code editor and unlock scrolling
$(".side-view--close").click(function() {
	$("#side-view").removeClass("side-view--show");
	$("body").removeClass("body--lock");
	return false;
});

//Night time theme
var hr = (new Date()).getHours();

if ( (hr >= 21 && hr <= 24) || (hr >= 0 && hr <= 4) ) {
	loadCSS("css/night.css");
}

//Load CSS file
function loadCSS(href) {
	var cssLink = $("<link rel='stylesheet' type='text/css' href='"+href+"'>");
	$("head").append(cssLink); 
};

//Load JS file
function loadJS(href) {
	var jsLink = $("<script src='"+href+"'</script>");
	$("head").append(jsLink); 
};

//When title is in viewport, show header bar title
$('.main h1').bind('inview', function(event, isInView) {
  if (isInView) {
	$(".article #main-menu .active-title, .page #main-menu .active-title").removeClass("active-title--show");
  } else {
	$(".article #main-menu .active-title, .page #main-menu .active-title").addClass("active-title--show");
  }
});

//When title is not in viewport, hide header bar title
if ( $('.main h1').offset().top <= $(window).scrollTop() ) {
	$(".article #main-menu .active-title").addClass("active-title--show");
}

//Mobile menu
$("#nav-toggle").click(function() {
	$( "#nav-toggle" ).toggleClass( "active" );
	$( "#menu-links" ).toggleClass( "active" );
	return false;
});

//Konami Code
$( window ).konami({
    cheat: function() {
        loadCSS("http://fonts.googleapis.com/css?family=VT323");
        loadCSS("css/old-skoo.css");
        $(".logo").attr("src", "img/generic-logo_retro.png");

        var pongWidth = $(".article-featured--medium").width();
        
        $(".article-featured--medium").fadeTo( 0, 0 );

        if ($('#pong').is(":hidden")) {
        	$("#pong").show();
        	$("#pong").pong('img/circle.gif',{
		        targetSpeed: 30,   //ms
			    ballAngle: 45,     //degrees
			    ballSpeed: 8,      //pixels per update
			    compSpeed: 5,      //speed of your opponent!!
			    playerSpeed: 8,    //pixels per update
			    difficulty: 1,
			    width: pongWidth,  //px
			    height: pongWidth, //px
			    paddleWidth: 10,   //px
			    paddleHeight: 40,  //px
			    paddleBuffer: 1,   //px from the edge of the play area
			    ballWidth: 14,     //px
			    ballHeight: 14,    //px
			    playTo: 5          //points
		    });
        }
    }
});

//Disable animations while resizing
var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

$( window ).resize(function() {
	$("body").addClass("body--no-transitions");
});

//Enable animations after done resizing
$(window).resize(function() {
    delay(function(){
		$("body").removeClass("body--no-transitions");
    }, 500);
});

//Active article scroll up
$(".active-title").click(function() {
	$("html, body").animate({scrollTop:0});
	return false;
});

//Nav hide on mobile
if ( $(window).width() < 640 ) { 
	var start = 1;

	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('#main-menu').outerHeight();

	$(window).scroll(function(event){
	    didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 250);

	function hasScrolled() {

	    var st = $(this).scrollTop();
	    
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;
	    
	    if (st > lastScrollTop && st > navbarHeight){

	    	if ( $( "#menu-links" ).hasClass( "active" ) ) {
	    		$( "#nav-toggle" ).toggleClass( "active" );
	    		$( "#menu-links" ).toggleClass( "active" );
	    	}

	        $('#main-menu').addClass('nav-up');

	    } 
	    else {

	        if(st + $(window).height() < $(document).height()) {
	            $('#main-menu').removeClass('nav-up')	;
	        }

	    }
	    
	    lastScrollTop = st;
	}
}

//Home page sidebar article list highlight when article is in viewport
if ( $('article:nth-child(1)').offset().top <= $(window).scrollTop() ) {
	$(".article-list--sidebar li").removeClass("active");
	$(".article-list--sidebar li:nth-child(1)").addClass("active");
}

 $(window).scroll(function() {

 	if ( $('article:nth-child(1)').offset().top <= $(window).scrollTop() ) {
 		$(".article-list--sidebar li").removeClass("active");
		$(".article-list--sidebar li:nth-child(1)").addClass("active");
	}

	if ( $('article:nth-child(2)').offset().top -200 <= $(window).scrollTop() ) {
		$(".article-list--sidebar li").removeClass("active");
		$(".article-list--sidebar li:nth-child(2)").addClass("active");
	}

	if ( $('article:nth-child(3)').offset().top -200 <= $(window).scrollTop() ) {
		$(".article-list--sidebar li").removeClass("active");
		$(".article-list--sidebar li:nth-child(3)").addClass("active");
	}

	if ( $('article:nth-child(4)').offset().top -200 <= $(window).scrollTop() ) {
		$(".article-list--sidebar li").removeClass("active");
		$(".article-list--sidebar li:nth-child(4)").addClass("active");
	}

	if ( $('article:nth-child(5)').offset().top -200 <= $(window).scrollTop() ) {
		$(".article-list--sidebar li").removeClass("active");
		$(".article-list--sidebar li:nth-child(5)").addClass("active");
	}

	if ( $('article:nth-child(6)').offset().top -200 <= $(window).scrollTop() ) {
		$(".article-list--sidebar li").removeClass("active");
		$(".article-list--sidebar li:nth-child(6)").addClass("active");
	}

	if ( $('article:nth-child(7)').offset().top -200 <= $(window).scrollTop() ) {
		$(".article-list--sidebar li").removeClass("active");
		$(".article-list--sidebar li:nth-child(7)").addClass("active");
	}

	if ( $('article:nth-child(8)').offset().top -200 <= $(window).scrollTop() ) {
		$(".article-list--sidebar li").removeClass("active");
		$(".article-list--sidebar li:nth-child(8)").addClass("active");
	}

	//Bug fix. Highlight article 8 when within 100px from bottom of article
	if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
		$(".article-list--sidebar li").removeClass("active");
		$(".article-list--sidebar li:nth-child(8)").addClass("active");
	}

});

//Home page sidebar jump to
$(".article-list--sidebar li").click(function() {
	var activeArticle = $(this).attr('class');
	activeArticle = activeArticle.replace("main ", "");
	
	var $container = $("html,body");
	var $scrollTo = $('article.'+activeArticle);

	$container.animate({scrollTop: $scrollTo.offset().top - 65 - $container.offset().top, scrollLeft: 0},500); 
});

//GA tracking
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','http://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-58975902-1', 'auto');
ga('send', 'pageview');