"use strict";function _(e){return document.getElementById(e)}function uploadFile(){var e=_("file1").files[0],t=new FormData;t.append("file1",e);var a=new XMLHttpRequest;a.upload.addEventListener("progress",progressHandler,!1),a.addEventListener("load",completeHandler,!1),a.addEventListener("error",errorHandler,!1),a.addEventListener("abort",abortHandler,!1),a.open("POST","file_upload_parser.php"),a.send(t)}function progressHandler(e){_("loaded_n_total").innerHTML="Uploaded "+e.loaded+" bytes of "+e.total;var t=e.loaded/e.total*100;_("progressBar").value=Math.round(t),_("status").innerHTML=Math.round(t)+"% uploaded... please wait"}function completeHandler(e){_("status").innerHTML=e.target.responseText,_("progressBar").value=0}function errorHandler(e){_("status").innerHTML="Upload Failed"}function abortHandler(e){_("status").innerHTML="Upload Aborted"}$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);t=t.length?t:$("[name="+this.hash.slice(1)+"]"),t.length&&(e.preventDefault(),$("html, body").animate({scrollTop:t.offset().top},500,function(){var e=$(t);if(e.focus(),e.is(":focus"))return!1;e.attr("tabindex","-1"),e.focus()}))}}),$(function(){function e(){$("#testimonials li:visible").delay(8e3).fadeOut("slow",function(){$(this).appendTo("#testimonials ul"),$("#testimonials li:first").fadeIn("slow",e)})}var t=Math.floor(Math.random()*$("#testimonials li").length);$("#testimonials li").hide().eq(t).show(),e()});