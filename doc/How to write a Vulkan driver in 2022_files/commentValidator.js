// JavaScript Document

/**
 * Protect window.console method calls, e.g. console is not defined on IE
 * unless dev tools are open, and IE doesn't define console.debug
 * 
 * Chrome 41.0.2272.118: debug,error,info,log,warn,dir,dirxml,table,trace,assert,count,markTimeline,profile,profileEnd,time,timeEnd,timeStamp,timeline,timelineEnd,group,groupCollapsed,groupEnd,clear
 * Firefox 37.0.1: log,info,warn,error,exception,debug,table,trace,dir,group,groupCollapsed,groupEnd,time,timeEnd,profile,profileEnd,assert,count
 * Internet Explorer 11: select,log,info,warn,error,debug,assert,time,timeEnd,timeStamp,group,groupCollapsed,groupEnd,trace,clear,dir,dirxml,count,countReset,cd
 * Safari 6.2.4: debug,error,log,info,warn,clear,dir,dirxml,table,trace,assert,count,profile,profileEnd,time,timeEnd,timeStamp,group,groupCollapsed,groupEnd
 * Opera 28.0.1750.48: debug,error,info,log,warn,dir,dirxml,table,trace,assert,count,markTimeline,profile,profileEnd,time,timeEnd,timeStamp,timeline,timelineEnd,group,groupCollapsed,groupEnd,clear
 */
(function() {
  // Union of Chrome, Firefox, IE, Opera, and Safari console methods
  var methods = ["assert", "assert", "cd", "clear", "count", "countReset",
    "debug", "dir", "dirxml", "dirxml", "dirxml", "error", "error", "exception",
    "group", "group", "groupCollapsed", "groupCollapsed", "groupEnd", "info",
    "info", "log", "log", "markTimeline", "profile", "profileEnd", "profileEnd",
    "select", "table", "table", "time", "time", "timeEnd", "timeEnd", "timeEnd",
    "timeEnd", "timeEnd", "timeStamp", "timeline", "timelineEnd", "trace",
    "trace", "trace", "trace", "trace", "warn"];
  var length = methods.length;
  var console = (window.console = window.console || {});
  var method;
  var noop = function() {};
  while (length--) {
    method = methods[length];
    // define undefined methods as noops to prevent errors
    if (!console[method])
      console[method] = noop;
  }
})();


// set vars
ErrorFree_name = 0;
ErrorFree_email = 0;
ErrorFree_comment = 0;

// Check inputs for content on load in modal
/*if (!$("._2016blogpostLHS #quip-comment-name-qcom").val().length == 0) { ErrorFree_name = 1; $(".modalBlogReplyWrapper #nameFieldError").hide(); }
if (!$("._2016blogpostLHS #quip-comment-email-qcom").val().length == 0) { ErrorFree_email = 1; $(".modalBlogReplyWrapper #emailFieldError").hide(); }
if (!$("._2016blogpostLHS #quip-comment-box-qcom").val().length == 0) { ErrorFree_comment = 1; $(".modalBlogReplyWrapper #commentFieldError").hide(); }*/
if (!$("#quip-comment-name-qcom").val().length == 0) { ErrorFree_name = 1; $(".modalBlogReplyWrapper #nameFieldError").hide(); }
if (!$("#quip-comment-email-qcom").val().length == 0) { ErrorFree_email = 1; $(".modalBlogReplyWrapper #emailFieldError").hide(); }
if (!$("#quip-comment-box-qcom").val().length == 0) { ErrorFree_comment = 1; $(".modalBlogReplyWrapper #commentFieldError").hide(); }


/*
if ($(".modalBlogReplyWrapper #quip-comment-name-qcom").val().length == 0) { ErrorFree_name = 0; $(".modalBlogReplyWrapper #nameFieldError").show(); }
if ($(".modalBlogReplyWrapper #quip-comment-email-qcom").val().length == 0) { ErrorFree_email = 0; $(".modalBlogReplyWrapper #emailFieldError").show(); }
if ($(".modalBlogReplyWrapper #quip-comment-box-qcom").val().length == 0) { ErrorFree_comment = 0; $(".modalBlogReplyWrapper #commentFieldError").show(); }
*/


	// Name
	//$('.modalBlogReplyWrapper #quip-comment-name-qcom').on('input', function() {
	$('#quip-comment-name-qcom').keyup(function(event) {
			var input=$(this)
			/*var is_name=input.val();*/
			
			var is_name=$(this).val();
			console.log(is_name);
			
			if(is_name){
				input.removeClass("invalid").addClass("valid");
				$("#nameFieldError").hide();
				ErrorFree_name = 1;
				
			}
			else{
				input.removeClass("valid").addClass("invalid");
				$("#nameFieldError").show();
				ErrorFree_name = 0;
			}
	});
	
	// Email
	//$('.modalBlogReplyWrapper #quip-comment-email-qcom').on('input', function() {
	$('#quip-comment-email-qcom').keyup(function(event) {
			var input=$(this);
			var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
			/*var is_email=re.test(input.val());*/
			
			var is_email=re.test($(this).val());
			console.log(is_email);
			
			if(is_email){
				input.removeClass("invalid").addClass("valid");
				$("#emailFieldError").hide();
				ErrorFree_email = 1;
			}
			else{
				input.removeClass("valid").addClass("invalid");
				$("#emailFieldError").show();
				ErrorFree_email = 0;
			}
	});
		
	
	// Message
	$('#quip-comment-box-qcom').keyup(function(event) {
			var input=$(this);
			var message=$(this).val();
			console.log(message);
			if(message){
				input.removeClass("invalid").addClass("valid");
				$("#commentFieldError").hide();
				ErrorFree_comment = 1;
			}
			else{
				input.removeClass("valid").addClass("invalid");
				$("#commentFieldError").show();
				ErrorFree_comment = 0;
			}	
	});
	
	
	
	
	
	
	// remember ts and cs checkbox state
	/*$('.modalBlogReplyWrapper #quip-comment-privacyconsent-qcom').click(function(e){
		if (e.target.checked) {
  			localStorage.checked = true;
  		} else {
  			localStorage.checked = false;
  		}	
	})
 
	$( document ).ready(function() {
		document.querySelector('.modalBlogReplyWrapper #quip-comment-privacyconsent-qcom').checked = localStorage.checked
	});
*/


	// After Form Submitted Validation
	$(".quip-add-comment button").click(function(event){
		
		

// 18072022 hcaptcha
ErrorFree_hcaptcha = 0;

var hcaptchaVal = document.querySelector('[name="h-captcha-response"]').value;
   if (hcaptchaVal === "") {
      event.preventDefault();
      ErrorFree_hcaptcha = 0;
      //alert("Please complete the hCaptcha element");
   }
   else {
   ErrorFree_hcaptcha = 1;
   }
// end of 18072022 hcaptcha
	
	
	
		
		//alert("ErrorFree_name =" + ErrorFree_name + ", ErrorFree_email =" + ErrorFree_email + ", ErrorFree_comment = " + ErrorFree_comment);		
		
		/* if no errors */
		if (ErrorFree_name == 1 && ErrorFree_email == 1 && ErrorFree_comment == 1 && ErrorFree_hcaptcha == 1){
			
			// process form button now
			//alert('No errors: Form will be submitted');
			
			// Privacy checkbox test
	if ($('#quip-comment-privacyconsent-qcom').is(':checked')){
		return true;
		//localStorage.checked = true;		
	} else {
		alert("Please indicate that you have read and accept the terms of our privacy notice regarding collection/storage and usage of your personal data");
		//localStorage.checked = false;
		return false;
	}
	
			
					
		}
		
		/* if errors */
		else{
			event.preventDefault();
			
			if (ErrorFree_name == 0) { $("#nameFieldError").show(); $('#quip-comment-name-qcom').addClass("invalid"); }
			if (ErrorFree_email == 0) { $("#emailFieldError").show(); $('#quip-comment-email-qcom').addClass("invalid"); }
			if (ErrorFree_comment == 0) { $("#commentFieldError").show(); $('#quip-comment-box-qcom').addClass("invalid"); }
			
			alert("Please ensure you complete all mandatory form fields, these are Name, Email address, Privacy Notice checkbox, your Comment and the hCaptcha box. Thanks");

		
		
	
		
			
		}
	});