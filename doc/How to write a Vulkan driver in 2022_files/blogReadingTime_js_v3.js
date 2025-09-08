function countWordsInDiv () {

var txtTotal = $(".newsroom2019PostBodyWrapper").text();
var wordCount = txtTotal.replace( /[^\w ]/g, "" ).split( /\s+/ ).length;

var txtIgnoreTotal = $(".newsroom2019PostBodyWrapper .ignoreMe").text();
var wordCountIgnore = txtIgnoreTotal.replace( /[^\w ]/g, "" ).split( /\s+/ ).length;

var calcedtxtTotal = (wordCount-wordCountIgnore);

// console.log(wordCount, wordCountIgnore, calcedtxtTotal);

var readingTimeInMinutes = Math.floor(calcedtxtTotal / 200) + 1;
var readingTimeAsString = readingTimeInMinutes + " minutes";
    
$('.estimatedReadingTimeWrapper span').html(readingTimeAsString);

// move label into body area now
$('.estimatedReadingTimeWrapper').prependTo(".newsroom2019PostBodyWrapper");
// display it now all worked out
$('.estimatedReadingTimeWrapper').fadeIn(0);

}

countWordsInDiv();
$(window).load(function() { countWordsInDiv(); });
$(document).ready(function() { countWordsInDiv(); });