/* HIDE ALL NOSCRIPT STUFF */
$(".noJSPromot").remove();
$("noscript").remove();

/* IE ALERT */
/*
$(document).ready(function() {
		$("body").iealert({
			support:"ie7",
			title: "Oh dear, It seems your browser is out of date!",
			text: "Thanks for viewing the Collabora website - we are pushing the boundaries of web technologies and we are sorry to report that your browser is a little too old to support the new Collabora website correctly. We would advise you upgrade your browser to one of the latest builds to view the Collabora website."
		});
});
*/
/* end of IE ALERT */

/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* INDEX PAGES - SET DISC TEXT INNER WRAPPER TO SIZE OF PARENT DISC DIV TO HOLD TEXT INSIDE CENTERED WITHOUT USING DISPLAY:TABLE ON DISC DIV DUE TO POOR SUPPORT BY SAFARI */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */

var reference = $('.discTextDivWrapper'),
    Target = $('.disc');

function sizeDiscTextInner () {
    reference.height(Target.height());
    reference.width(Target.width());
	
	//$( '.discTextDivWrapper' ).each(function () { this.style.setProperty( 'display', 'table-cell', 'important' ); });
	$('.discTextDivWrapper').addClass("sortRoundeText");
	
	
}

sizeDiscTextInner();

//$(document).ready(function() { sizeDiscTextInner(); });
$(window).load(function() { sizeDiscTextInner(); });
$(window).resize(function() { sizeDiscTextInner(); });

/* ////////////////////////////// */
/* DO FOR INTERNAL A LINK AS WELL */
/* ////////////////////////////// */

var reference2 = $('.discTextDivWrapper a'),
    Target2 = $('.disc');

function sizeDiscTextInner2 () {
	reference2.width(Target2.width()-12);
	
	//$( '.discTextDivWrapper' ).each(function () { this.style.setProperty( 'display', 'table-cell', 'important' ); });
	$('.discTextDivWrapper').addClass("sortRoundeText");
	
}

sizeDiscTextInner2();

//$(document).ready(function() { sizeDiscTextInner2(); });
$(window).load(function() { sizeDiscTextInner2(); });
$(window).resize(function() { sizeDiscTextInner2(); });

/* ////////////////////////////// */
/* DO FOR LARGE CONTENT LHS ROUNDELL */
/* ////////////////////////////// */

var reference3 = $('.contentRoundellWrapper .discTextDivWrapper'),
    Target3 = $('.contentRoundellWrapper .disc');

function sizeDiscTextInner3 () {
	reference3.height(Target3.height());
	reference3.width(Target3.width());
	
	//$( '.discTextDivWrapper' ).each(function () { this.style.setProperty( 'display', 'table-cell', 'important' ); });
	$('.discTextDivWrapper').addClass("sortRoundeText");
	
}

sizeDiscTextInner3();

//$(document).ready(function() { sizeDiscTextInner3(); });
$(window).load(function() { sizeDiscTextInner3(); });
$(window).resize(function() { sizeDiscTextInner3(); });

/* end of INDEX PAGES - SET DISC TEXT INNER WRAPPER TO SIZE OF PARENT DISC DIV TO HOLD TEXT INSIDE CENTERED WITHOUT USING DISPLAY:TABLE ON DISC DIV DUE TO POOR SUPPORT BY SAFAR */


/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* INDEX PAGES - SET DIV TO SAME SIZE AS IMG SRC */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */



function resizeDiv () {

var imageDIV = $('.heroElementWrapper'),
    imageDIVTitle = $('.contentTitleWrapper'),
    imageTarget = $('#HeroElementBGImage');

    imageDIV.height(imageTarget.height());
	imageDIVTitle.height(imageTarget.height());
	
	//alert("Real image height:" + imageTarget.height());
}

resizeDiv();

$(document).ready(function() { resizeDiv();});
$(window).resize(function() { resizeDiv(); });
$(window).load(function() { resizeDiv(); });


/* edits -- 010820014 */

/* call resize after 1 sec to force it to sort page layout after 1 sec */
setTimeout(function(){
	resizeDiv();
}, 1000);

/* 5 sec call resize after 1 sec to force it to sort page layout */
setTimeout(function(){
	resizeDiv();
}, 5000);

/* end of edits -- 010820014 */


/* end of INDEX PAGES - SET DIV TO SAME SIZE AS IMG SRC */


$(document).ready(function(){
	
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */	
<!-- nTH CODE FIXES -->	
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
$(".primaryNav ul li a").last().css("margin-right", "0px");
$("#makeMeScrollable div.disc").last().css("margin-right", "50px");
$(".bodyContent_2ndTier_RHS img:nth-child(2n)").css("margin-right", "0px");
$(".bodyContent_2ndTier_RHS img").last().css("margin-bottom", "0px");
$(".industriesArticle_mainCol:nth-child(2n)").css("margin-right", "0px");

/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* MOBILE NAV DO IT */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
$("#nav_mobile").change(function() {
    window.location = $(this).find("option:selected").val();
});



/**/
		
		
		/*
		var origfilename = $('#HeroElementBGImage').attr('src');
		var origfilenamelessextension = origfilename.slice(0, -4)
		//alert(origfilenamelessextension)
		
		$('#HeroElementBGImage').attr('src' , origfilenamelessextension + '@2x.jpg');
		var newfilename = $('#HeroElementBGImage').attr('src');
		
		//alert(newfilename)
		*/
		
		
/**/

});


/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* ON RESIZE CHANGE HERO CAROUSEL SRC TO MOBILE VERSION */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

var clientsLIControl = function() {
	
	var windowSizeClients = $(window).width();
		
		
		if (windowSizeClients <= 480) {
		//if (windowSizeClients <= 568) {
		 
		 
		
		
		/**/
		
		
		 $("div.nivoSlider img").each(function() {
			 
			/* For @2x.jpg files */
			if (!endsWith($(this).attr('src'), '_mobile@2x.jpg') && (endsWith($(this).attr('src'), '@2x.jpg'))) {
			$(this).attr('src', $(this).attr('src').replace(/\@2x.jpg/, '') + '_mobile@2x.jpg');
			}
			
			else
			
			/* For .jpg files */
			if (!endsWith($(this).attr('src'), '_mobile@2x.jpg')) {
			$(this).attr('src', $(this).attr('src').replace(/\.jpg/, '') + '_mobile@2x.jpg');
			}
			 
		//call div resizer
		resizeDiv();	 
			 
		 });		 
		
		/**/
		
		
		$("#HeroElementBGImage").each(function() {
		
		/* For @2x.jpg files */
		if (!endsWith($(this).attr('src'), '_mobile@2x.jpg') && (endsWith($(this).attr('src'), '@2x.jpg'))) {
		
        /* 17032022 - removed as causing issue on blog pages on scroll hiding the hero image - not sure needed! basically prevents the hero image from going back to a large one on resize of window is only missing feature */
        /*
		var origfilename = $('#HeroElementBGImage').attr('src');
		var origfilenamelessextension = origfilename.slice(0, -7)
		//alert(origfilenamelessextension)
		$('#HeroElementBGImage').attr('src' , origfilenamelessextension + '_mobile@2x.jpg');
		var newfilename = $('#HeroElementBGImage').attr('src');
		//alert(newfilename)
		*/
        
		}
		
		else 
		
		/* For .jpg files */
		if (!endsWith($(this).attr('src'), '_mobile@2x.jpg')) {
		
		var origfilename = $('#HeroElementBGImage').attr('src');
		var origfilenamelessextension = origfilename.slice(0, -4)
		//alert(origfilenamelessextension)
		$('#HeroElementBGImage').attr('src' , origfilenamelessextension + '_mobile@2x.jpg');
		var newfilename = $('#HeroElementBGImage').attr('src');
		//alert(newfilename)
		
		}
		
		/**/
		
		
			 
		//call div resizer
		resizeDiv();	
			 
		});
		 
		}
		
		else if (windowSizeClients >= 481) {
		//else if (windowSizeClients >= 569) {
		  
		 $("div.nivoSlider img").each(function() {
			 if (endsWith($(this).attr('src'), '_mobile@2x.jpg')) {
		 	$(this).attr('src', $(this).attr('src').replace(/\_mobile@2x.jpg/, '') + '.jpg');
			 }
			 
		//call div resizer
		resizeDiv();	
			 
		 });
		 
		 $("div.heroElementWrapper img").each(function() {
			 if (endsWith($(this).attr('src'), '_mobile@2x.jpg')) {
		 	$(this).attr('src', $(this).attr('src').replace(/\_mobile@2x.jpg/, '') + '.jpg');
			 }
			 
		//call div resizer
		resizeDiv();	
			 
		 });		  
		  
		 }		
		 
	
};

clientsLIControl();

$(window).resize(function() { clientsLIControl(); });
$(window).load(function() { clientsLIControl(); });
$(document).ready(function() { clientsLIControl(); });

/* end of ON RESIZE CHANGE HERO CAROUSEL SRC TO MOBILE VERSION */


/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* IF MOBILE MAKE HEADER RHS POSITION:ABSOLUTE AND NOT FIXED REGARDLESS OF SCREEN SIZE */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */

jQuery(document).ready(function($) {

	if(jQuery.support.touch){

			$(".headerRHS").css("position", "absolute");
			
	}
	
});

/* end of IF MOBILE MAKE HEADER RHS POSITION:ABSOLUTE AND NOT FIXED REGARDLESS OF SCREEN SIZE */

/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* INLINE MOBILE NAV TREATMENT */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */

/* set var for velocity anims */
window.navisInview=0;

$(".nav_mobileInlineTrigger").click(function() {
	$("#nav_mobileInlineSolution ul").animate({ height: "toggle", opacity: "toggle" }, 350);
	$("#nav_mobileInlineSolution p a img").toggleClass("rotateDropperArrow");
});

$(".NEWmobileNavTrigger").click(function() {
	
	/* original animations - too slow on Android */
	/*$("#nav_mobileInlineSolution ul").animate({ height: "toggle", opacity: "toggle" }, 350);*/
	/*$("#nav_mobileInlineSolution ul").animate({ opacity: "toggle" }, 350);*/
	
	
	/* Velocity anims - quicker on android ??? */	
	if (window.navisInview == 0){
	
	var $AnimElement = $(".NEWmobileNavAnimWrapper");
	$AnimElement.velocity({ right: 0 }, { duration: 500 });
	window.navisInview=1;
	
	}
	
	else if (window.navisInview == 1){
	
	var $AnimElement = $(".NEWmobileNavAnimWrapper");
	$AnimElement.velocity({ right: -600 }, { duration: 500 });
	window.navisInview=0;
	
	}
	
});






/* end of INLINE MOBILE NAV TREATMENT */









/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* ON RESIZE CHANGE HERO CAROUSEL SRC TO OVERSIZED VERSION ON BIG SCREENS */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */

function endsWith2(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

var bigImages = function() {
	
	var windowSizeClients2 = $(window).width();
		
		
		if (windowSizeClients2 >= 1330) {
		 
		 $("div.nivoSlider img").each(function() {
			 if (!endsWith2($(this).attr('src'), '@2x.jpg')) {
		 	$(this).attr('src', $(this).attr('src').replace(/\.jpg/, '') + '@2x.jpg');
			 }
			 
			 
			 
		 });
		 
		 $("div.heroElementWrapper img").not("div.heroElementWrapper .iconWrapper img").each(function() {
			 if (!endsWith2($(this).attr('src'), '@2x.jpg')) {
		 	$(this).attr('src', $(this).attr('src').replace(/\.jpg/, '') + '@2x.jpg');
			 }
			 	
			 
		 });
		 
		 
		 //body content images - original
		 /*
		  $(".bodyContent_2ndTier_RHS img, .industriesArticle_mainWrapper img, .blog img , .blogpostLHS img").each(function() {
			 if (!endsWith2($(this).attr('src'), '@2x.jpg')) {
		 	$(this).attr('src', $(this).attr('src').replace(/\.jpg/, '') + '@2x.jpg');
		 }
		 
		 });
		 */
		 
		 /* my idea - adds @2x many times though.... */ /*
		  $(".bodyContent_2ndTier_RHS img, .industriesArticle_mainWrapper img, .blog img , .blogpostLHS img").each(function() {
		 var origfilename = $(this).attr('src');
		 var lastFourDigits = origfilename.substr(origfilename.length - 4); 
		var origfilenamelessextension = origfilename.slice(0, -4)
		//alert(origfilenamelessextension)
		$(this).attr('src' , origfilenamelessextension + '@2x' + lastFourDigits);
		alert(origfilenamelessextension + '@2x' + lastFourDigits)
		//var newfilename = $('#HeroElementBGImage').attr('src');
		
		});
		*/
		
		
		$('.bodyContent_2ndTier_RHS img, .industriesArticle_mainWrapper img, .blog img , .blogpostLHS img , .partnerLogosOuterWrapper img , ._2016peepsSlider img').prop('src', function(_, src) {
    	src = src.replace(/@2x\./, '.');         // strip if it's already there
    	return src.replace(/(\.\w+$)/, '@2x$1');
		});
		
		
		}
		
		else if (windowSizeClients2 >= 996 && windowSizeClients2 <= 1329) {
		  
		 $("div.nivoSlider img").each(function() {
			 if (endsWith2($(this).attr('src'), '@2x.jpg')) {
		 	$(this).attr('src', $(this).attr('src').replace(/\@2x.jpg/, '') + '.jpg');
			 }
			 
			
			 
		 });
		 
		 $("div.heroElementWrapper img").not("div.heroElementWrapper .iconWrapper img").each(function() {
			 if (endsWith2($(this).attr('src'), '@2x.jpg')) {
		 	$(this).attr('src', $(this).attr('src').replace(/\@2x.jpg/, '') + '.jpg');
			 }
			 
			
			 
		 });	
		 
		 //body content images
		 $(".bodyContent_2ndTier_RHS img, .industriesArticle_mainWrapper img, .blog img , .blogpostLHS img , .partnerLogosOuterWrapper img, ._2016peepsSlider img").each(function() {
			 if (endsWith2($(this).attr('src'), '@2x.jpg')) {
		 	$(this).attr('src', $(this).attr('src').replace(/\@2x.jpg/, '') + '.jpg');
			 }
			 
			 if (endsWith2($(this).attr('src'), '@2x.png')) {
		 	$(this).attr('src', $(this).attr('src').replace(/\@2x.png/, '') + '.png');
			 }
			 	
			 
		 });
		 
		 
		 
		 
		 
		 	  
		  
		 }		
		 
	
	
};

bigImages();

$(window).resize(function() { bigImages(); });

/* end of ON RESIZE CHANGE HERO CAROUSEL SRC TO OVERSIZED VERSION ON BIG SCREENS */





/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* BODY CONTENT IMAGE -- Show original if no @2x version exits */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */


//$(document).ready(function() { 

function endsWith2(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

var checkifAT2xexists = function() { 

var windowSizeClients2 = $(window).width();
		
		
		if (windowSizeClients2 >= 1330) {

	$('.bodyContent_2ndTier_RHS img, .industriesArticle_mainWrapper img, .blog img , .blogpostLHS img , .partnerLogosOuterWrapper img').error(function() {
	 //alert('Image does not exist !!');
	$(".bodyContent_2ndTier_RHS img, .industriesArticle_mainWrapper img, .blog img , .blogpostLHS img , .partnerLogosOuterWrapper img").each(function() {
				 
		 if (endsWith2($(this).attr('src'), '@2x.jpg')) {
		$(this).attr('src', $(this).attr('src').replace(/\@2x.jpg/, '') + '.jpg');
		 }
		 
		 if (endsWith2($(this).attr('src'), '@2x.png')) {
		$(this).attr('src', $(this).attr('src').replace(/\@2x.png/, '') + '.png');
		 }
			
		 
	 });
			
	});
	
	}
	
}

checkifAT2xexists();
	
//});	

/* call function on resize after last resize and 0.5s wait */

$(window).bind('resizeEnd', function() {
    //do something, window hasn't changed size in 500ms
	checkifAT2xexists();
});

$(window).resize(function() {
        if(this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function() {
            $(this).trigger('resizeEnd');
        }, 500);
});

/* end of call function on resize after last resize and 0.5s wait */

/* end of BODY CONTENT IMAGE -- Show original if no @2x version exits */




/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* REVEAL CONTENT PAGE HERO ON PAGE LOAD */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/*
var windowSizeDeets = $(window).width();

if (windowSizeDeets >= 621) {

$(window).load(function() {
  $("#HeroElementBGImage").fadeIn(500);
  $("#makeMeScrollable").fadeIn(1000);
  $(".contentTitleWrapper").fadeIn(1000);
});

}

if (windowSizeDeets <= 620) {

$(window).load(function() {
  $("#HeroElementBGImage").fadeIn(500);
  $("#makeMeScrollable").fadeIn(1000);
});

}
*/
/* end of REVEAL CONTENT PAGE HERO ON PAGE LOAD */


/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* RESIZE HERO DIV TO HEIGHT OF HERO ON LOAD OF ANY VERSION OF THE HERO */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */

$(function() {
 $('#HeroElementBGImage').each(function() {
    $(this).load(function() {
      //do stuff
	  
	  //alert("image loaded now....")
	  resizeDiv();
	  
    });
 });
});

/* end of RESIZE HERO DIV TO HEIGHT OF HERO ON LOAD OF ANY VERSION OF THE HERO */


/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* WRAP PARTNERS LOGOS WITH WRAPPING DIVS */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */
/* ///////////////////////////////////////////////////////////////////////// */

function reWrapPartnerDIVs () {

var windowWidth = $(window).width();



/*

if(windowWidth <= 481){
var divs = $(".partnerLogosOuterWrapper > div");
    for(var i = 0; i < divs.length; i+=1) {
      divs.slice(i, i+1).wrapAll("<div class='partnerLogosRowWrapper'></div>");
    }
}

if(windowWidth <= 767){
var divs = $(".partnerLogosOuterWrapper > div");
    for(var i = 0; i < divs.length; i+=2) {
      divs.slice(i, i+2).wrapAll("<div class='partnerLogosRowWrapper'></div>");
    }
}

if(windowWidth >= 768){
var divs = $(".partnerLogosOuterWrapper > div");
    for(var i = 0; i < divs.length; i+=3) {
      divs.slice(i, i+3).wrapAll("<div class='partnerLogosRowWrapper'></div>");
    }
}

*/


if($('#is3s').is(':visible')) {
var divs = $(".partnerLogosOuterWrapper > div");
    for(var i = 0; i < divs.length; i+=3) {
      divs.slice(i, i+3).wrapAll("<div class='partnerLogosRowWrapper'></div>");
    }
}

if($('#is2s').is(':visible')) {
var divs = $(".partnerLogosOuterWrapper > div");
    for(var i = 0; i < divs.length; i+=2) {
      divs.slice(i, i+2).wrapAll("<div class='partnerLogosRowWrapper'></div>");
    }
}

if($('#is1s').is(':visible')) {
var divs = $(".partnerLogosOuterWrapper > div");
    for(var i = 0; i < divs.length; i+=1) {
      divs.slice(i, i+1).wrapAll("<div class='partnerLogosRowWrapper'></div>");
    }
}

}


reWrapPartnerDIVs();

$(window).load(function() { reWrapPartnerDIVs(); });

$(window).on('resize',function() {
  $('.partnerLogosRowWrapper').contents().unwrap();
  reWrapPartnerDIVs();
});