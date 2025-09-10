var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function($){Drupal.behaviors.intel_filter_syntaxhighlighter={attach:function(context,settings){SyntaxHighlighter.toolbar.items.copyToClipboard=function(highlighter){var flashDiv,flashSwf,highlighterId=highlighter.id,sh=SyntaxHighlighter;this.create=function(){return sh.config.strings.copyToClipboard};this.execute=function(sender,event,args){var code=sh.utils.unindent(sh.utils.fixInputString(highlighter.originalCode).replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"));var textArea=document.createElement("textarea");textArea.style.position="fixed";textArea.style.top=0;textArea.style.left=0;textArea.style.width="2em";textArea.style.height="2em";textArea.style.padding=0;textArea.style.border="none";textArea.style.outline="none";textArea.style.boxShadow="none";textArea.style.background="transparent";textArea.value=code;document.body.appendChild(textArea);textArea.select();try{var successful=document.execCommand("copy");if(successful)sh.utils.alert(Drupal.t("The code is in your clipboard now."));else sh.utils.alert(Drupal.t("Oops, unable to copy"))}catch(err){sh.utils.alert(Drupal.t("Oops, unable to copy"))}document.body.removeChild(textArea)}};delete SyntaxHighlighter.toolbar.items.about;delete SyntaxHighlighter.toolbar.items.viewSource;delete SyntaxHighlighter.toolbar.items.printSource;SyntaxHighlighter.defaults.gutter=true;SyntaxHighlighter.config.strings.copyToClipboard=Drupal.t("Copy Code");$("#page, #page-wrapper",context).once("intel_filter_syntaxhighlighter",function(){if(typeof SyntaxHighlighter=="object"){if(SyntaxHighlighter.vars&&SyntaxHighlighter.vars.highlighters){var sh_keys=[],highlighters={},countAsking=0;$("script").load(function(){highlighters=SyntaxHighlighter.vars.highlighters;function askObject(){sh_keys=Object.keys(highlighters);if(typeof sh_keys!=="undefined"&&sh_keys.length>0){sh_keys.forEach(function(key){var highlighter=highlighters[key];$("#"+key).scroll(function(){var movementX=$(this).scrollLeft();var positionX=-movementX;$(this).find(".toolbar").attr("style","position: absolute !important; right:"+positionX+"px !important;")})})}else{if(countAsking<=5){setTimeout(askObject,2e3);countAsking++}}}setTimeout(askObject,500)})}var brushCount=0;for(i in SyntaxHighlighter.brushes){brushCount++;break}if(brushCount>0){SyntaxHighlighter.all();$("pre").each(function(){countLines=0;var text_highlighted=$(this).html().split("\n");for(var i=0;i<text_highlighted.length;i++){if(text_highlighted[i].length>0)countLines++}if(countLines<=1){$(this).addClass("gutter: false;")}})}}})}}})(jQuery);;
(function ($) {
    dataLayer.push({'canonicalURL': $("link[rel='canonical']").attr("href")});
})(jQuery)
;


}
/*
     FILE ARCHIVED ON 21:40:29 May 02, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:53:11 Sep 10, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.478
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 6.362
  LoadShardBlock: 119.08 (3)
  PetaboxLoader3.datanode: 110.576 (5)
  PetaboxLoader3.resolve: 139.64 (3)
  load_resource: 143.223 (2)
*/