// JavaScript Document

/* ////////////// ON PAGE SCROLL SHRINK HEADER LOGO ///////////////////// */

$(window).scroll(function () {

var windowWidth = $(window).width();

/* removed above 750 only nav shallow */
/*if (windowWidth > 750) {*/
	
if(!$(window).scrollTop()) {
  /*$(".logoShort2016").fadeOut(500);
  setTimeout(function(){$(".logoFull2016").fadeIn(500);},500);
  */
  
  if (windowWidth > 750) {
  
  // removing logo shrink 27092016  
  //$(".logoFull2016").removeClass("shrinkLogo");
  $(".headerWrapper2016Inner").removeClass("minimalPadding");
  //$(".headerRHS_2016 #nav_full li ul").removeClass("minimalSubNavPadder");
  }
  
  /* fade out more opaque BG */
  /* only if mobile nav is not open and in view */
  if(!$('.NEWmobileNav').is(':visible')) {
 	 $(".scrolledNavBG").fadeOut(500);
  }
  
}
if($(window).scrollTop()) { //abuse 0 == false :)
  /*$(".logoFull2016").fadeOut(500);
  setTimeout(function(){$(".logoShort2016").fadeIn(500);},500);
  */
  
  if (windowWidth > 750) {
  // removing logo shrink 27092016
  // $(".logoFull2016").addClass("shrinkLogo");
  $(".headerWrapper2016Inner").addClass("minimalPadding");
  //$(".headerRHS_2016 #nav_full li ul").addClass("minimalSubNavPadder");
  }
  
  /* fade in more opaque BG */
  $(".scrolledNavBG").fadeIn(500);
  
/*}*/



}

});


/* ///////////////// ADD LEFT PADDING TO SUBNAV TRIANGLE TO MAKE IT SIT IN CENTER BELOW PARENT NAV ITEM /////////////// */

/*
function paddSubNavTriangle () {


var parentLI = $('.headerRHS_2016 #nav_full li a').width();
var parentLIPaddingLeft = $('.headerRHS_2016 #nav_full li a').innerWidth() - $('.headerRHS_2016 #nav_full li a').width();

var valuetoPadLeft = (parentLI / 2) + (parentLIPaddingLeft - 11);

$('.subnavTriangle').css('margin-left' , valuetoPadLeft +'px');

}
*/



function paddSubNavTriangle () {

    $('.headerRHS_2016 #nav_full li a').each(function () {
        var parentLI = $(this).width();
        var parentLIPaddingLeft = $(this).innerWidth() - parentLI;
        var valuetoPadLeft = (parentLI / 2) + (parentLIPaddingLeft - 11);
        
		/* pre 26092016 update */
		/* $(this).parent().find('.subnavTriangle').css('margin-left' , valuetoPadLeft +'px'); */
		
		/* 26092016 - making nav flyouts work better*/
		var valuetoPadLeft = valuetoPadLeft+500;
		$(this).parent().find('.subnavTriangle').css('margin-left' , valuetoPadLeft +'px');
		/* end of 26092016 - making nav flyouts work better*/
		
		
    });

}


paddSubNavTriangle();

$(document).ready(function() { paddSubNavTriangle(); });
$(window).load(function() { paddSubNavTriangle(); });
$(window).resize(function() { paddSubNavTriangle(); });

/* //////////////// WORK OUT SUBNAV MENU PADDING BASED ON HEIGHT OF HEADER ///////////////// */

function paddSubNavBar () {

var headerHeight = $('.headerWrapper2016Inner').outerHeight();


if ($(window).scrollTop() == 0){
var setTopPadder = (headerHeight - 63);
}
else { var setTopPadder = (headerHeight - 53); }

$('.headerRHS_2016 #nav_full li ul').css('padding-top' , setTopPadder +'px');

}

paddSubNavBar();

$(document).ready(function() { paddSubNavBar(); });
$(window).load(function() { paddSubNavBar(); });
$(window).resize(function() { paddSubNavBar(); });

/* call after scrolls also to make sure it reads when header shrinks */
(function() {        
    var timer;
    $(window).bind('scroll',function () {
        clearTimeout(timer);
        timer = setTimeout( refresh , 750 );
    });
    var refresh = function () { 
        // do stuff
        //console.log('Stopped Scrolling');
		paddSubNavBar();
    };
})();


/* /////////////// SUBNAV LINKS CHANGE IMAGE COLOUR ON A HOVER ////////////////// */

/* b4 sprites */ /*
$('.subnavWrapperInner2016 li a').hover(function() {
      
	  $(this).find('.subnavIcon').toggleClass("subnavWrapperInner2016ImgOVER");

});
*/

/* with sprites */
$('.subnavWrapperInner2016 li a').mouseover(function() {
      
	  //$(this).find('.subnavIcon').toggleClass("subnavWrapperInner2016ImgOVER");
	   
	  var backgroundPos = $(this).find('.subnavIcon').css("backgroundPosition").split(" ");
      var xPos = backgroundPos[0],
          yPos = backgroundPos[1];

   	xPosWithPx = xPos;
	yPosWithPX = "80px";
	
	newValue = xPosWithPx+" 80px";
	
	//console.log(xPosWithPx,yPosWithPX);
	//console.log(newValue);
	
	$(this).find('.subnavIcon').css('background-position', newValue);
	
	//console.log("over");
	  
});

$('.subnavWrapperInner2016 li a').mouseleave(function() {
      
	 //$(this).find('.subnavIcon').toggleClass("subnavWrapperInner2016ImgOVER");
	   
	  var backgroundPos = $(this).find('.subnavIcon').css("backgroundPosition").split(" ");
      var xPos = backgroundPos[0],
          yPos = backgroundPos[1];

   	xPosWithPx = xPos;
	yPosWithPX = "80px";
	
	newValue = xPosWithPx+" 0px";
	
	//console.log(xPosWithPx,yPosWithPX);
	//console.log(newValue);
	
	$(this).find('.subnavIcon').css('background-position', newValue);
	 
	//console.log("out");
	  
});


/* /////////////// 2ND TIER INDEX PAGE LINKS CHANGE IMAGE COLOUR ON A HOVER ////////////////// */

/* with sprites */
$('._2016ServicesPromoItemsWrapper li a').mouseover(function() {
      
	  //$(this).find('.subnavIcon').toggleClass("subnavWrapperInner2016ImgOVER");
	   
	  var backgroundPos = $(this).find('.subnavIcon').css("backgroundPosition").split(" ");
      var xPos = backgroundPos[0],
          yPos = backgroundPos[1];

   	xPosWithPx = xPos;
	yPosWithPX = "80px";
	
	newValue = xPosWithPx+" -80px";
	
	//console.log(xPosWithPx,yPosWithPX);
	//console.log(newValue);
	
	$(this).find('.subnavIcon').css('background-position', newValue);
	
	//console.log("over");
	  
});

$('._2016ServicesPromoItemsWrapper li a').mouseleave(function() {
      
	 //$(this).find('.subnavIcon').toggleClass("subnavWrapperInner2016ImgOVER");
	   
	  var backgroundPos = $(this).find('.subnavIcon').css("backgroundPosition").split(" ");
      var xPos = backgroundPos[0],
          yPos = backgroundPos[1];

   	xPosWithPx = xPos;
	yPosWithPX = "0px";
	
	newValue = xPosWithPx+" 160px";
	
	//console.log(xPosWithPx,yPosWithPX);
	//console.log(newValue);
	
	$(this).find('.subnavIcon').css('background-position', newValue);
	 
	//console.log("out");
	  
});


/* INDUSTRIES QUICK LINKS VERSION */

$('._2016IndustriesQuickLinkPanel ._2016ServicesPromoItemsWrapper li a').mouseover(function() {
      
	  //$(this).find('.subnavIcon').toggleClass("subnavWrapperInner2016ImgOVER");
	   
	  var backgroundPos = $(this).find('.subnavIcon').css("backgroundPosition").split(" ");
      var xPos = backgroundPos[0],
          yPos = backgroundPos[1];

   	xPosWithPx = xPos;
	yPosWithPX = "80px";
	
	newValue = xPosWithPx+" -80px";
	
	//console.log(xPosWithPx,yPosWithPX);
	//console.log(newValue);
	
	$(this).find('.subnavIcon').css('background-position', newValue);
	
	//console.log("over");
	  
});

$('._2016IndustriesQuickLinkPanel ._2016ServicesPromoItemsWrapper li a').mouseleave(function() {
      
	 //$(this).find('.subnavIcon').toggleClass("subnavWrapperInner2016ImgOVER");
	   
	  var backgroundPos = $(this).find('.subnavIcon').css("backgroundPosition").split(" ");
      var xPos = backgroundPos[0],
          yPos = backgroundPos[1];

   	xPosWithPx = xPos;
	yPosWithPX = "0px";
	
	newValue = xPosWithPx+" 0px";
	
	//console.log(xPosWithPx,yPosWithPX);
	//console.log(newValue);
	
	$(this).find('.subnavIcon').css('background-position', newValue);
	 
	//console.log("out");
	  
});



/* ///////////// HERO OVERLAID TEXT SIZES /////////////////// */

function workwoutFontSizes () {

//var windowWidth = $(window).width(); 
var windowWidth = $('.fullwidthWrapper2016').width() +15; 

//console.log(windowWidth)

/* oversized scalable */

if (windowWidth >= 2201) {

$('._2016HeroSlide_TextWrapper h1').css('font-size', '56px');
$('._2016HeroSlide_TextWrapper p').css('font-size', '28px');
$('._2016HeroSlide_TextWrapper p a.Linker').css('font-size', '34px');
$('._2016HeroSlide_RoundelWrapper .discTextDivWrapper').css('font-size', '44px');
	
}

if (windowWidth >= 1300 && windowWidth <= 2200) {

$('._2016HeroSlide_TextWrapper h1').css('font-size', (windowWidth*0.03) +'px');
$('._2016HeroSlide_TextWrapper p').css('font-size', (windowWidth*0.015) +'px');
$('._2016HeroSlide_TextWrapper p a.Linker').css('font-size', (windowWidth*0.018) +'px');
$('._2016HeroSlide_RoundelWrapper .discTextDivWrapper').css('font-size', (windowWidth*0.023) +'px');

}

/* fixed width desktop between 996 and 1300 */

if (windowWidth >= 995 && windowWidth <= 1299) {

$('._2016HeroSlide_TextWrapper h1').css('font-size', '39px');
$('._2016HeroSlide_TextWrapper p').css('font-size', '19px');
$('._2016HeroSlide_TextWrapper p a.Linker').css('font-size', '23px');
$('._2016HeroSlide_RoundelWrapper .discTextDivWrapper').css('font-size', '32px');

}

/* tablet scalable */

if (windowWidth >= 496 && windowWidth <= 994) {

$('._2016HeroSlide_TextWrapper h1').css('font-size', (windowWidth*0.035) +'px');
$('._2016HeroSlide_TextWrapper p').css('font-size', (windowWidth*0.02) +'px');
$('._2016HeroSlide_TextWrapper p a.Linker').css('font-size', (windowWidth*0.023) +'px');
$('._2016HeroSlide_RoundelWrapper .discTextDivWrapper').css('font-size', (windowWidth*0.030) +'px');

}

/* mobile scalable */

if (windowWidth <= 495) {

$('._2016HeroSlide_RoundelWrapper .discTextDivWrapper').css('font-size', (windowWidth*0.08) +'px');
$('._2016HeroSlide_RoundelWrapper_shallow .discTextDivWrapper').css('font-size', (windowWidth*0.065) +'px');
$('._2016HeroSlide_TextWrapper_Mobile h1').css('font-size', (windowWidth*0.075) +'px');
$('._2016HeroSlide_TextWrapper_Mobile p').css('font-size', (windowWidth*0.035) +'px');
$('._2016HeroSlide_TextWrapper_Mobile p a.Linker').css('font-size', (windowWidth*0.048) +'px');


}



}

workwoutFontSizes();

$(document).ready(function() { workwoutFontSizes(); });
$(window).load(function() { workwoutFontSizes(); });
$(window).resize(function() { workwoutFontSizes(); });




/* ///////////// WHAT WE DO ICON H4 SCALE TEXT ///////////////////// */

function workwoutFontSizes_whatwedoh4 () {
	
var windowWidth = $('.fullwidthWrapper2016').width() +15; 

if (windowWidth >= 996) {

$('.whatwedoItem h4').css('font-size','41px');

}

if (windowWidth >=651 && windowWidth <= 995) {

$('.whatwedoItem h4').css('font-size', (windowWidth*0.03) +'px');

}

if (windowWidth <= 650) {

$('.whatwedoItem h4').css('font-size', '32px');

}

if (windowWidth <= 480) {

$('.whatwedoItem h4').css('font-size', '28px');

}

}

workwoutFontSizes_whatwedoh4();

$(document).ready(function() { workwoutFontSizes_whatwedoh4(); });
$(window).load(function() { workwoutFontSizes_whatwedoh4(); });
$(window).resize(function() { workwoutFontSizes_whatwedoh4(); });

/* ////////////// HERO ROUNDEL VERT MIDDLE TEXT ///////////////// */





/* MAKE SUBNAV ICON GO TO GREEN IF ON ACTIVE PAGE */

function activeSubNavLogic () {

$('.subnavWrapperInner2016 li.hereNav a').each(function (index, value) { 

var backgroundPos = $(this).find('.subnavIcon').css("backgroundPosition").split(" ");
      var xPos = backgroundPos[0],
          yPos = backgroundPos[1];

   	xPosWithPx = xPos;
	yPosWithPX = "80px";
	
	newValue = xPosWithPx+" 80px";
	
	//console.log(xPosWithPx,yPosWithPX);
	//console.log(newValue);
	
	$(this).find('.subnavIcon').css('background-position', newValue);

});

}

activeSubNavLogic();
$(document).ready(function() { activeSubNavLogic(); });
$(window).load(function() { activeSubNavLogic(); });
$(window).resize(function() { activeSubNavLogic(); });




/* /////////// WHAT WE DO PANELS - SET RHS DIV TO HEIGHT OF LHS //////////// */


function setSize () {
var reference = $('.whatwedoItemHeaderLHS'), Target = $('.whatwedoItemHeaderRHS');

    Target.height(reference.height());
	//alert("adasd")
}

setSize();

$(document).ready(function() { setSize(); });
$(window).load(function() { setSize(); });
$(window).resize(function() { setSize(); });


/* /////////// FIX NTH ISSUE ON ORIGINAL JS RE: RHS PROMOS AND RHS IMAGE //////////// */

$(".bodyContent_2ndTier_RHS img").last().css("margin-bottom", "15px !important");



/* ////////////// WHAT WE DO - WARP BOXES //////////////// */

/*

function whatwedoWrapItems () {
	
var windowWidth = $(window).width(); 

if (windowWidth >= 611) {

var divs = $(".bodyContentInnerWrapper > .whatwedoItem");
for(var i = 0; i < divs.length; i+=2) {
  divs.slice(i, i+2).wrapAll("<div class='whatwedoRowWrapper'></div>");
}

} else if (windowWidth <= 610) {

var divs = $(".bodyContentInnerWrapper > .whatwedoItem");
for(var i = 0; i < divs.length; i+=1) {
  divs.slice(i, i+1).wrapAll("<div class='whatwedoRowWrapper'></div>");
}

}

}

whatwedoWrapItems();
$(document).ready(function() { whatwedoWrapItems(); });
$(window).load(function() { whatwedoWrapItems(); });
$(window).resize(function() { whatwedoWrapItems(); });

*/

/* //////////////// WHAT WE DO PANELS - SAME SIZES /////////////// */

function whatwedoPanelsSameHeightSetter () {


  $('.whatwedoItemInner').css('min-height','auto');

  // Get an array of all element heights
  var elementHeights = $('.whatwedoItemInner').map(function() {
    return $(this).height();
  }).get();

  // Math.max takes a variable number of arguments
  // `apply` is equivalent to passing each height as an argument
  var maxHeight = Math.max.apply(null, elementHeights);

  // Set each height to the max height
  $('.whatwedoItemInner').css('min-height',maxHeight+'px');


}


whatwedoPanelsSameHeightSetter();

$(document).ready(function() { whatwedoPanelsSameHeightSetter(); });
$(window).load(function() { whatwedoPanelsSameHeightSetter(); });
$(window).resize(function() { whatwedoPanelsSameHeightSetter(); });


/* //////////////// OUR WORK INDEX FEED PANELS - SAME SIZES /////////////// */

function ourworkindexfeeedpanelsSameHeightSetter () {


  $('._2016OurWork-CaseStudyInnerWrapper').css('min-height','auto');

  // Get an array of all element heights
  var elementHeights = $('._2016OurWork-CaseStudyInnerWrapper').map(function() {
    return $(this).height();
  }).get();

  // Math.max takes a variable number of arguments
  // `apply` is equivalent to passing each height as an argument
  var maxHeight = Math.max.apply(null, elementHeights);

  // Set each height to the max height
  $('._2016OurWork-CaseStudyInnerWrapper').css('min-height',maxHeight+'px');


}


ourworkindexfeeedpanelsSameHeightSetter();

$(document).ready(function() { ourworkindexfeeedpanelsSameHeightSetter(); });
$(window).load(function() { ourworkindexfeeedpanelsSameHeightSetter(); });
$(window).resize(function() { ourworkindexfeeedpanelsSameHeightSetter(); });





/* /////////////// SERVICES HERO NAV HOVERS ///////////////// */

/* IF ON CHANGE TO -ON VERSION - SET IT TO ON FORM ON PAGE */	
$('.servicesArticleHERONavSliceOuterWrapper a.here img').each(function (index, value) { 
	var src = $(this).attr("src").match(/[^\.]+/) + "-on.png";
            $(this).attr("src", src);
	 // alert("nothing");
});

/* ROLLOVER CHANGE TO -ON VERSION */	
$(function() {

    $(".servicesArticleHERONavSliceWrapper a:not('.here') img")
        .mouseover(function() { 
            var src = $(this).attr("src").match(/[^\.]+/) + "-on.png";
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("-on.png", ".png");
            $(this).attr("src", src);
        });

	


});




/* /////////// MOBILE NAV ON CLICK MAKE HEADER BG MORE OPAQUE //////////// */

$(".NEWmobileNavTrigger").click(function() {
	if(!$('.scrolledNavBG').is(':visible')) {
		$(".scrolledNavBG").fadeIn(500);
		}
});


/* ////////// NEW MOBILE NAV UL FULL HEIGHT ////////////// */

function setNewMovileNavToViewportHeight () {
	
var heightSetter = $(window).height();

$(".NEWmobileNavContactBits").height(heightSetter);

}

setNewMovileNavToViewportHeight();

$(document).ready(function() { setNewMovileNavToViewportHeight(); });
$(window).load(function() { setNewMovileNavToViewportHeight(); });
$(window).resize(function() { setNewMovileNavToViewportHeight(); });




/* /////////// FEATURED ITEM SORT WIDTH //////////////// */

function sortFeatItemWidths () {	

/* disabled it as it seemed to be causing problems not fixing now we have blog filtering in place - 01092016 */
/*

var windowWidth = $(window).width(); 

if (windowWidth >= 755) {

var $itemElement = $('._2016FeaturedArticleItem');
var paddingSingleVal = parseInt($itemElement.css('padding-left'));
var paddingTotalVal = paddingSingleVal*2;
var widthWith15px = $(".No").width();
var calculatedWidth = widthWith15px-15-paddingTotalVal;
$("._2016FeaturedArticleItem").width(calculatedWidth);


}

if (windowWidth >= 605 && windowWidth <= 754) {

var $itemElement = $('._2016FeaturedArticleItem');
var paddingSingleVal = parseInt($itemElement.css('padding-left'));
var paddingTotalVal = paddingSingleVal*2;
var widthWith15px = $(".bodyContentWrapper").width();
var calculatedWidth = widthWith15px-67-paddingTotalVal;
$("._2016FeaturedArticleItem").width(calculatedWidth);

}

if (windowWidth <= 604) {

var $itemElement = $('._2016FeaturedArticleItem');
var paddingSingleVal = parseInt($itemElement.css('padding-left'));
var paddingTotalVal = paddingSingleVal*2;
var widthWith15px = $(".bodyContentWrapper").width();
var calculatedWidth = widthWith15px-47-paddingTotalVal;
$("._2016FeaturedArticleItem").width(calculatedWidth);

}

*/

}

sortFeatItemWidths();


$(document).ready(function() { sortFeatItemWidths(); });
$(window).load(function() { sortFeatItemWidths(); });
$(window).resize(function() { sortFeatItemWidths(); });






/* NEWSROOM FILTERING BY PARAMETER */

$(document).ready(function() {

/* SHOW ALL BY DEFUALT */

$(".showJustBlogs").fadeOut(0);
$(".showJustNewsAndEvents").fadeOut(0);
$(".showAll").fadeIn(0);

$("._2016NewsRoomFilters_BTN_ShowBlogs").removeClass("_2016NewsRoomFilters_BTN_ON");
$("._2016NewsRoomFilters_BTN_ShowNewsAndEvents").removeClass("_2016NewsRoomFilters_BTN_ON");
$("._2016NewsRoomFilters_BTN_ShowAll").addClass("_2016NewsRoomFilters_BTN_ON");

/* BLOG */

if (window.location.search == "?blogs" || window.location.search == "?blogs=" || window.location.search == "?blogs_page=2&blogs=" || window.location.search == "?blogs_page=3&blogs=" || window.location.search == "?blogs_page=4&blogs=" || window.location.search == "?blogs_page=5&blogs=" || window.location.search == "?blogs_page=6&blogs=" || window.location.search == "?blogs_page=7&blogs=" || window.location.search == "?blogs_page=8&blogs=" || window.location.search == "?blogs_page=9&blogs=" || window.location.search == "?blogs_page=10&blogs=" || window.location.search == "?blogs_page=11&blogs=" || window.location.search == "?blogs_page=12&blogs=" || window.location.search == "?blogs_page=13&blogs=" || window.location.search == "?blogs_page=14&blogs=" || window.location.search == "?blogs_page=15&blogs=" || window.location.search == "?blogs_page=16&blogs=" || window.location.search == "?blogs_page=17&blogs=" || window.location.search == "?blogs_page=18&blogs=" || window.location.search == "?blogs_page=19&blogs=" || window.location.search == "?blogs_page=20&blogs=" || window.location.search == "?blogs_page=21&blogs=" || window.location.search == "?blogs_page=22&blogs=" || window.location.search == "?blogs_page=23&blogs=" || window.location.search == "?blogs_page=24&blogs=" || window.location.search == "?blogs_page=25&blogs=" || window.location.search == "?blogs_page=26&blogs=" || window.location.search == "?blogs_page=27&blogs=" || window.location.search == "?blogs_page=28&blogs=" || window.location.search == "?blogs_page=29&blogs=" || window.location.search == "?blogs_page=30&blogs=" ) {
	
	$(".showJustBlogs").fadeIn(0);
	$(".showJustNewsAndEvents").fadeOut(0);
	$(".showAll").fadeOut(0);
	
	$("._2016NewsRoomFilters_BTN_ShowBlogs").addClass("_2016NewsRoomFilters_BTN_ON");
	$("._2016NewsRoomFilters_BTN_ShowNewsAndEvents").removeClass("_2016NewsRoomFilters_BTN_ON");
	$("._2016NewsRoomFilters_BTN_ShowAll").removeClass("_2016NewsRoomFilters_BTN_ON");
	
}

/* NEWS AND EVENTS */

if (window.location.search == "?newsandevents" || window.location.search == "?newsandevents=" || window.location.search == "?newsandevents_page=2&newsandevents=" || window.location.search == "?newsandevents_page=3&newsandevents=" || window.location.search == "?newsandevents_page=4&newsandevents=" || window.location.search == "?newsandevents_page=5&newsandevents=" || window.location.search == "?newsandevents_page=6&newsandevents=" || window.location.search == "?newsandevents_page=7&newsandevents=" || window.location.search == "?newsandevents_page=8&newsandevents=" || window.location.search == "?newsandevents_page=9&newsandevents=" || window.location.search == "?newsandevents_page=10&newsandevents=" || window.location.search == "?newsandevents_page=11&newsandevents=" || window.location.search == "?newsandevents_page=12&newsandevents=" || window.location.search == "?newsandevents_page=13&newsandevents=" || window.location.search == "?newsandevents_page=14&newsandevents=" || window.location.search == "?newsandevents_page=15&newsandevents=" || window.location.search == "?newsandevents_page=16&newsandevents=" || window.location.search == "?newsandevents_page=17&newsandevents=" || window.location.search == "?newsandevents_page=18&newsandevents=" || window.location.search == "?newsandevents_page=19&newsandevents=" || window.location.search == "?newsandevents_page=20&newsandevents=" || window.location.search == "?newsandevents_page=21&newsandevents=" || window.location.search == "?newsandevents_page=22&newsandevents=" || window.location.search == "?newsandevents_page=23&newsandevents=" || window.location.search == "?newsandevents_page=24&newsandevents=" || window.location.search == "?newsandevents_page=25&newsandevents=" || window.location.search == "?newsandevents_page=26&newsandevents=" || window.location.search == "?newsandevents_page=27&newsandevents=" || window.location.search == "?newsandevents_page=28&newsandevents=" || window.location.search == "?newsandevents_page=29&newsandevents=" || window.location.search == "?newsandevents_page=30&newsandevents=" ) {
	
	
	
	$(".showJustBlogs").fadeOut(0);
	$(".showJustNewsAndEvents").fadeIn(0);
	$(".showAll").fadeOut(0);
	
	$("._2016NewsRoomFilters_BTN_ShowBlogs").removeClass("_2016NewsRoomFilters_BTN_ON");
	$("._2016NewsRoomFilters_BTN_ShowNewsAndEvents").addClass("_2016NewsRoomFilters_BTN_ON");
	$("._2016NewsRoomFilters_BTN_ShowAll").removeClass("_2016NewsRoomFilters_BTN_ON");
	
}



});


/* //////////// BLOG - PRE NUMBERED LINES CODE ////////////// */

$(document).ready(function(){
$('pre.numberedLines').html(function(i, old) {
return '<span>' + old.split('\n').join('</span>\n<span>') + '</span>';
});
});


/* ////// ECOSYSTEM BITS /////// */

function ecoItemsSizer () {
var ecoItemWidth = $(".ecosystemItem img").width();
$(".ecosystemItemOver").css('width', ecoItemWidth + 'px')
$(".ecosystemItemOver").css('height', ecoItemWidth + 'px');
}

ecoItemsSizer();
$(document).ready(function() { ecoItemsSizer(); });
$(window).load(function() { ecoItemsSizer(); });
$(window).resize(function() { ecoItemsSizer(); });


$(document).ready(function(){

$(".ecosystemItemOver").hover(function (){
    $(this).addClass("ecosystemfadeIn")
}, function () {
    $(this).removeClass("ecosystemfadeIn")
});


// tap for touch
$(".ecosystemItem").click(function (){
	//alert("click")
    $(this).addClass("ecosystemfadeIn")
}, function () {
    $(this).removeClass("ecosystemfadeIn")
});

$(".ecosystemItem h4").hover(function (){
    $(this).closest(".ecosystemItem").find(".ecosystemItemOver").addClass("ecosystemfadeIn")
}, function () {
    $(this).closest(".ecosystemItem").find(".ecosystemItemOver").removeClass("ecosystemfadeIn")
});


});




/* /////// SMOOTHSCROLL ON MOBILE SEARCH ICON CLICK //////// */
$("a.searchIt").click(function() {
	event.preventDefault();
	
	/* scroll too bottom search box code */
    /*
	$([document.documentElement, document.body]).animate({
        scrollTop: $("#searchIt").offset().top
    }, 2000);
	*/
	
	/* fade in search box at top code */
	$(".mobileSearchWrapper").fadeToggle(750);
	
});



/* //// 25102019 - FIXING CASE STUDIES LOGO ISSUE TO MAKE SURE THEY ALL APPEAR AS SQUARES EVEN IF IMAGE IS NOT ///// */
function caseStudiesImgSquareFixer () {

    $('._2016OurWork-CaseStudyInnerWrapper .imgDIVholder').each(function () {
        var thisWidth = $(this).width();
  		$(this).css('height' , thisWidth +'px');
		
		
    });

}

caseStudiesImgSquareFixer();

$(document).ready(function() { caseStudiesImgSquareFixer(); });
$(window).load(function() { caseStudiesImgSquareFixer(); });
$(window).resize(function() { caseStudiesImgSquareFixer(); });

/* 21052024 - Collapsible element for Careers page */
$('.readMoreP a').on('click',function(e){
e.preventDefault();
$(".readMoreWrapper").toggleClass('showMePlease');
$('.readMoreP').fadeOut(0);
});







/* ////////// CAREERS PAGE UPDATES NOV 2023 - - NEW CAREERS FEED - IMPLEMENTED 28052024 //////////////// */

/* optimised option - calling feed in once and cloning it rather than multiple loads per job sector */
$(".fetchedJobs .jsonPHPFeed").clone().appendTo($(".jobsSectorWrapper_Delivery"));
$(".fetchedJobs .jsonPHPFeed").clone().appendTo($(".jobsSectorWrapper_Engineering"));
$(".fetchedJobs .jsonPHPFeed").clone().appendTo($(".jobsSectorWrapper_Finance"));
$(".fetchedJobs .jsonPHPFeed").clone().appendTo($(".jobsSectorWrapper_Marketing"));
$(".fetchedJobs .jsonPHPFeed").clone().appendTo($(".jobsSectorWrapper_Operations"));
$(".fetchedJobs .jsonPHPFeed").clone().appendTo($(".jobsSectorWrapper_Productivity"));
$(".fetchedJobs .jsonPHPFeed").clone().appendTo($(".jobsSectorWrapper_SystemsAdministration"));
$(".fetchedJobs .jsonPHPFeed").clone().appendTo($(".jobsSectorWrapper_SystemsDevelopment"));

/* 17112023 */
// Delivery
$('.jobsSectorWrapper_Delivery .job').each(function(){
if ($(this).hasClass("Delivery")) {
$(this).addClass("displayJobAd");
} else {
$(this).remove();
}
});


// Engineering
$('.jobsSectorWrapper_Engineering .job').each(function(){
if ($(this).hasClass("Engineering")) {
$(this).addClass("displayJobAd");
} else {
$(this).remove();
}
});


// Finance
$('.jobsSectorWrapper_Finance .job').each(function(){
if ($(this).hasClass("Finance")) {
$(this).addClass("displayJobAd");
} else {
$(this).remove();
}
});


// Markeeting
$('.jobsSectorWrapper_Marketing .job').each(function(){
if ($(this).hasClass("Marketing")) {
$(this).addClass("displayJobAd");
} else {
$(this).remove();
}
});


// People Operations
$('.jobsSectorWrapper_Operations .job').each(function(){
if ($(this).hasClass("People Operations")) {
$(this).addClass("displayJobAd");
} else {
$(this).remove();
}
});


// Productivity
$('.jobsSectorWrapper_Productivity .job').each(function(){
if ($(this).hasClass("Productivity")) {
$(this).addClass("displayJobAd");
} else {
$(this).remove();
}
});


// Systems Administration
$('.jobsSectorWrapper_SystemsAdministration .job').each(function(){
if ($(this).hasClass("Systems Administration")) {
$(this).addClass("displayJobAd");
} else {
$(this).remove();
}
});


// Systems Development
$('.jobsSectorWrapper_SystemsDevelopment .job').each(function(){
if ($(this).hasClass("Systems Development")) {
$(this).addClass("displayJobAd");
} else {
$(this).remove();
}
});



// all departments - hide if no job ad children
$(".jsonPHPFeed").each(function() {
if( ($(this).children().length == 0) || ($(this).children(".job").hasClass("isotope-hidden")) ) {
$(this).closest('.jobsSectorWrapper').hide();
}
});



; (function(){

jQuery('document').ready(function() {
	function filter_JOBS() {
		var department = jQuery('#selectFieldDepartment').val();
		//var location = jQuery('#selectFieldLocation').val();
		//var type = jQuery('#selectFieldType').val();
		var target = '';
		
		if(department != 'job') { target += '.' + department; }
		//if(location != 'job') { target += '.' + location; }
		//if(type != 'job') { target += '.' + type; }
		if(target == '') target = '.job';
		var $items_container = jQuery(".jsonPHPFeed");		
		$items_container.isotope({
			itemSelector : ".job",
			layoutMode: "masonry",
			filter: target
		});
	}
	jQuery('#selectFieldDepartment').on('change', function() {
		filter_JOBS();


	});
});	
})();





/* Jump menu logic */
; (function(){

jQuery('document').ready(function() {
	function filter_JOBS() {
		var department = jQuery('#selectFieldDepartment').val();
		//var location = jQuery('#selectFieldLocation').val();
		//var type = jQuery('#selectFieldType').val();
		var target = '';
		
		if(department != 'job') { target += '.' + department; }
		//if(location != 'job') { target += '.' + location; }
		//if(type != 'job') { target += '.' + type; }
		if(target == '') target = '.job';
		var $items_container = jQuery(".jsonPHPFeed");		
		$items_container.isotope({
			itemSelector : ".job",
			layoutMode: "masonry",
			filter: target
		});




// hide department if no children
$(".jsonPHPFeed").each(function() {
if ( $(this).height() == 0) {
//alert("hide");
$(this).parent( $(this).find('.jobsSectorWrapper') ).addClass("hideMeNow");
} else {
//alert("show");
$(this).parent( $(this).find('.jobsSectorWrapper') ).removeClass("hideMeNow");
}
});
// end hide department if no children






	}
	jQuery('#selectFieldDepartment').on('change', function() {
		filter_JOBS();




/* if no results then show the no results text */
$(".jobResultsWrapper").each(function() {
if ( $(this).height() < 100) {
//alert("NO results");
$(".jobResultsWrapper p.noResults").removeClass("hideMeNow");
} else {
//alert("have got results");
$(".jobResultsWrapper p.noResults").addClass("hideMeNow");
}
});







	});
});	
})();




/* script to remove commas from class to make this function work properly! feed includes some commas after a few class names from level */
var value;
 $(document).ready(function(){
    
    $(".job").each(function() {
        value = $(this).attr("class").replace(",", "");
        $(this).attr("class", value);
        //alert("asd")
    });
    
    
    setTimeout(function() {
     $(".job").each(function() {
        value = $(this).attr("class").replace(",", "");
        $(this).attr("class", value);
        //alert("asd")
    });
    
    }, 3000);
    
    setTimeout(function() {
     $(".job").each(function() {
        value = $(this).attr("class").replace(",", "");
        $(this).attr("class", value);
        //alert("asd")
    });
    
    }, 3000);
    
    setTimeout(function() {
     $(".job").each(function() {
        value = $(this).attr("class").replace(",", "");
        $(this).attr("class", value);
        //alert("asd")
    });
    
    }, 3000);
    
    setTimeout(function() {
     $(".job").each(function() {
        value = $(this).attr("class").replace(",", "");
        $(this).attr("class", value);
        //alert("asd")
    });
    
    }, 3000);
    
    
});

/* remove fetchedjobs div once page fully loaded and all logic been implemented */
jQuery('document').ready(function() {
setTimeout(function() {
$(".fetchedJobs").remove();
}, 1000);
});

/**
 * Isotope v1.5.25
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time purchase of a commercial license
 * http://isotope.metafizzy.co/docs/license.html
 *
 * Non-commercial use is licensed under the MIT License
 *
 * Copyright 2013 Metafizzy
 */
(function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+l;b("html").addClass(m)}if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[j],r=h("transitionDuration"));var s=b.event,t=b.event.handle?"handle":"dispatch",u;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",u&&clearTimeout(u),u=setTimeout(function(){s[t].apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var v=["width","height"],w=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=v.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&w.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return c=c.filter(function(a,b){return b.nodeType===1}),this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!e.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",f=this.options.animationOptions,g=this.options.onLayout,h,i,j,k;i=function(a,b){b.$el[d](b.style,f)};if(this._isInserting&&this.isUsingJQueryAnimation)i=function(a,b){h=b.$el.hasClass("no-transition")?"css":d,b.$el[h](b.style,f)};else if(c||g||f.complete){var l=!1,m=[c,g,f.complete],n=this;j=!0,k=function(){if(l)return;var b;for(var c=0,d=m.length;c<d;c++)b=m[c],typeof b=="function"&&b.call(n.element,a,n);l=!0};if(this.isUsingJQueryAnimation&&d==="animate")f.complete=k,j=!1;else if(e.csstransitions){var o=0,p=this.styleQueue[0],s=p&&p.$el,t;while(!s||!s.length){t=this.styleQueue[o++];if(!t)return;s=t.$el}var u=parseFloat(getComputedStyle(s[0])[r]);u>0&&(i=function(a,b){b.$el[d](b.style,f).one(q,k)},j=!1)}}b.each(this.styleQueue,i),j&&k(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a);var c=this,d=function(){a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),w.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",d=a?"height":"width",e=a?"rows":"cols",g=this.element[d](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+f(d)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][e]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var x=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c){x("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(c[a])||a.charAt(0)==="_"){x("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);