/* [CODEVZ] + lightgallery 1.10 + zoom 1.3 + video 1.4 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof module&&module.exports?module.exports=b(require("jquery")):b(a.jQuery)}(this,function(a){!function(){"use strict";function b(b,d){if(this.el=b,this.$el=a(b),this.s=a.extend({},c,d),this.s.dynamic&&"undefined"!==this.s.dynamicEl&&this.s.dynamicEl.constructor===Array&&!this.s.dynamicEl.length)throw"When using dynamic mode, you must also define dynamicEl as an Array.";return this.modules={},this.lGalleryOn=!1,this.lgBusy=!1,this.hideBarTimeout=!1,this.isTouch="ontouchstart"in document.documentElement,this.s.slideEndAnimatoin&&(this.s.hideControlOnEnd=!1),this.s.dynamic?this.$items=this.s.dynamicEl:"this"===this.s.selector?this.$items=this.$el:""!==this.s.selector?this.s.selectWithin?this.$items=a(this.s.selectWithin).find(this.s.selector):this.$items=this.$el.find(a(this.s.selector)):this.$items=this.$el.children(),this.$slide="",this.$outer="",this.init(),this}var c={mode:"lg-slide",cssEasing:"ease",easing:"linear",speed:600,height:"100%",width:"100%",addClass:"",startClass:"lg-start-zoom",backdropDuration:150,hideBarsDelay:6e3,useLeft:!1,ariaLabelledby:"",ariaDescribedby:"",closable:!0,loop:!0,escKey:!0,keyPress:!0,controls:!0,slideEndAnimatoin:!0,hideControlOnEnd:!1,mousewheel:!0,getCaptionFromTitleOrAlt:!0,appendSubHtmlTo:".lg-sub-html",subHtmlSelectorRelative:!1,preload:1,showAfterLoad:!0,selector:"",selectWithin:"",nextHtml:"",prevHtml:"",index:!1,iframeMaxWidth:"100%",download:!0,counter:!0,appendCounterTo:".lg-toolbar",swipeThreshold:50,enableSwipe:!0,enableDrag:!0,dynamic:!1,dynamicEl:[],galleryId:1,supportLegacyBrowser:!0};b.prototype.init=function(){var b=this;b.s.preload>b.$items.length&&(b.s.preload=b.$items.length);var c=window.location.hash;c.indexOf("lg="+this.s.galleryId)>0&&(b.index=parseInt(c.split("&slide=")[1],10),a("body").addClass("lg-from-hash"),a("body").hasClass("lg-on")||(setTimeout(function(){b.build(b.index)}),a("body").addClass("lg-on"))),b.s.dynamic?(b.$el.trigger("onBeforeOpen.lg"),b.index=b.s.index||0,a("body").hasClass("lg-on")||setTimeout(function(){b.build(b.index),a("body").addClass("lg-on")})):b.$items.on("click.lgcustom",function(c){try{c.preventDefault(),c.preventDefault()}catch(a){c.returnValue=!1}b.$el.trigger("onBeforeOpen.lg"),b.index=b.s.index||b.$items.index(this),a("body").hasClass("lg-on")||(b.build(b.index),a("body").addClass("lg-on"))})},b.prototype.build=function(b){var c=this;c.structure(),a.each(a.fn.lightGallery.modules,function(b){c.modules[b]=new a.fn.lightGallery.modules[b](c.el)}),c.slide(b,!1,!1,!1),c.s.keyPress&&c.keyPress(),c.$items.length>1?(c.arrow(),setTimeout(function(){c.enableDrag(),c.enableSwipe()},50),c.s.mousewheel&&c.mousewheel()):c.$slide.on("click.lg",function(){c.$el.trigger("onSlideClick.lg")}),c.counter(),c.closeGallery(),c.$el.trigger("onAfterOpen.lg"),c.s.hideBarsDelay>0&&c.$outer.on("mousemove.lg click.lg touchstart.lg",function(){c.$outer.removeClass("lg-hide-items"),clearTimeout(c.hideBarTimeout),c.hideBarTimeout=setTimeout(function(){c.$outer.addClass("lg-hide-items")},c.s.hideBarsDelay)}),c.$outer.trigger("mousemove.lg")},b.prototype.structure=function(){var b,c="",d="",e=0,f="",g=this;for(a("body").append('<div class="lg-backdrop"></div>'),a(".lg-backdrop").css("transition-duration",this.s.backdropDuration+"ms"),e=0;e<this.$items.length;e++)c+='<div class="lg-item"></div>';if(this.s.controls&&this.$items.length>1&&(d='<div class="lg-actions"><button type="button" aria-label="Previous slide" class="lg-prev lg-icon">'+this.s.prevHtml+'</button><button type="button" aria-label="Next slide" class="lg-next lg-icon">'+this.s.nextHtml+"</button></div>"),".lg-sub-html"===this.s.appendSubHtmlTo&&(f='<div role="status" aria-live="polite" class="lg-sub-html"></div>'),b='<div tabindex="-1" aria-modal="true" '+(this.s.ariaLabelledby?'aria-labelledby="'+this.s.ariaLabelledby+'"':"")+" "+(this.s.ariaDescribedby?'aria-describedby="'+this.s.ariaDescribedby+'"':"")+' role="dialog" class="lg-outer '+this.s.addClass+" "+this.s.startClass+'"><div class="lg" style="width:'+this.s.width+"; height:"+this.s.height+'"><div class="lg-inner">'+c+'</div><div class="lg-toolbar lg-group"><button type="button" aria-label="Close gallery" class="lg-close lg-icon"></button></div>'+d+f+"</div></div>",a("body").append(b),this.$outer=a(".lg-outer"),this.$outer.focus(),this.$slide=this.$outer.find(".lg-item"),this.s.useLeft?(this.$outer.addClass("lg-use-left"),this.s.mode="lg-slide"):this.$outer.addClass("lg-use-css3"),g.setTop(),a(window).on("resize.lg orientationchange.lg",function(){setTimeout(function(){g.setTop()},100)}),this.$slide.eq(this.index).addClass("lg-current"),this.doCss()?this.$outer.addClass("lg-css3"):(this.$outer.addClass("lg-css"),this.s.speed=0),this.$outer.addClass(this.s.mode),this.s.enableDrag&&this.$items.length>1&&this.$outer.addClass("lg-grab"),this.s.showAfterLoad&&this.$outer.addClass("lg-show-after-load"),this.doCss()){var h=this.$outer.find(".lg-inner");h.css("transition-timing-function",this.s.cssEasing),h.css("transition-duration",this.s.speed+"ms")}setTimeout(function(){a(".lg-backdrop").addClass("in")}),setTimeout(function(){g.$outer.addClass("lg-visible")},this.s.backdropDuration),this.s.download&&this.$outer.find(".lg-toolbar").append('<a id="lg-download" aria-label="Download" target="_blank" download class="lg-download lg-icon"></a>'),this.prevScrollTop=a(window).scrollTop()},b.prototype.setTop=function(){if("100%"!==this.s.height){var b=a(window).height(),c=(b-parseInt(this.s.height,10))/2,d=this.$outer.find(".lg");b>=parseInt(this.s.height,10)?d.css("top",c+"px"):d.css("top","0px")}},b.prototype.doCss=function(){return!!function(){var a=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],b=document.documentElement,c=0;for(c=0;c<a.length;c++)if(a[c]in b.style)return!0}()},b.prototype.isVideo=function(a,b){var c;if(c=this.s.dynamic?this.s.dynamicEl[b].html:this.$items.eq(b).attr("data-html"),!a)return c?{html5:!0}:(console.error("lightGallery :- data-src is not provided on slide item "+(b+1)+". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"),!1);var d=a.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),e=a.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)/i),f=a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),g=a.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);return d?{youtube:d}:e?{vimeo:e}:f?{dailymotion:f}:g?{vk:g}:void 0},b.prototype.counter=function(){this.s.counter&&a(this.s.appendCounterTo).append('<div id="lg-counter" role="status" aria-live="polite"><span id="lg-counter-current">'+(parseInt(this.index,10)+1)+'</span> / <span id="lg-counter-all">'+this.$items.length+"</span></div>")},b.prototype.addHtml=function(b){var c,d,e=null;if(this.s.dynamic?this.s.dynamicEl[b].subHtmlUrl?c=this.s.dynamicEl[b].subHtmlUrl:e=this.s.dynamicEl[b].subHtml:(d=this.$items.eq(b),d.attr("data-sub-html-url")?c=d.attr("data-sub-html-url"):(e=d.attr("data-sub-html"),this.s.getCaptionFromTitleOrAlt&&!e&&(e=d.attr("title")||d.find("img").first().attr("alt")))),!c)if(void 0!==e&&null!==e){var f=e.substring(0,1);"."!==f&&"#"!==f||(e=this.s.subHtmlSelectorRelative&&!this.s.dynamic?d.find(e).html():a(e).html())}else e="";".lg-sub-html"===this.s.appendSubHtmlTo?c?this.$outer.find(this.s.appendSubHtmlTo).load(c):this.$outer.find(this.s.appendSubHtmlTo).html(e):c?this.$slide.eq(b).load(c):this.$slide.eq(b).append(e),void 0!==e&&null!==e&&(""===e?this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html"):this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")),this.$el.trigger("onAfterAppendSubHtml.lg",[b])},b.prototype.preload=function(a){var b=1,c=1;for(b=1;b<=this.s.preload&&!(b>=this.$items.length-a);b++)this.loadContent(a+b,!1,0);for(c=1;c<=this.s.preload&&!(a-c<0);c++)this.loadContent(a-c,!1,0)},b.prototype.loadContent=function(b,c,d){var e,f,g,h,i,j,k,l=this,m=!1,n=function(b){for(var c=[],d=[],e=0;e<b.length;e++){var g=b[e].split(" ");""===g[0]&&g.splice(0,1),d.push(g[0]),c.push(g[1])}for(var h=a(window).width(),i=0;i<c.length;i++)if(parseInt(c[i],10)>h){f=d[i];break}};if(l.s.dynamic){if(l.s.dynamicEl[b].poster&&(m=!0,g=l.s.dynamicEl[b].poster),j=l.s.dynamicEl[b].html,f=l.s.dynamicEl[b].src,k=l.s.dynamicEl[b].alt,l.s.dynamicEl[b].responsive){n(l.s.dynamicEl[b].responsive.split(","))}h=l.s.dynamicEl[b].srcset,i=l.s.dynamicEl[b].sizes}else{var o=l.$items.eq(b);if(o.attr("data-poster")&&(m=!0,g=o.attr("data-poster")),j=o.attr("data-html"),f=o.attr("href")||o.attr("data-src"),k=o.attr("title")||o.find("img").first().attr("alt"),o.attr("data-responsive")){n(o.attr("data-responsive").split(","))}h=o.attr("data-srcset"),i=o.attr("data-sizes")}var p=!1;l.s.dynamic?l.s.dynamicEl[b].iframe&&(p=!0):"true"===l.$items.eq(b).attr("data-iframe")&&(p=!0);var q=l.isVideo(f,b);if(!l.$slide.eq(b).hasClass("lg-loaded")){if(p)l.$slide.eq(b).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:'+l.s.iframeMaxWidth+'"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="'+f+'"  allowfullscreen="true"></iframe></div></div>');else if(m){var r="";r=q&&q.youtube?"lg-has-youtube":q&&q.vimeo?"lg-has-vimeo":"lg-has-html5",l.$slide.eq(b).prepend('<div class="lg-video-cont '+r+' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="'+g+'" /></div></div>')}else q?(l.$slide.eq(b).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'),l.$el.trigger("hasVideo.lg",[b,f,j])):(k=k?'alt="'+k+'"':"",l.$slide.eq(b).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" '+k+' src="'+f+'" /></div>'));if(l.$el.trigger("onAferAppendSlide.lg",[b]),e=l.$slide.eq(b).find(".lg-object"),i&&e.attr("sizes",i),h&&(e.attr("srcset",h),this.s.supportLegacyBrowser))try{picturefill({elements:[e[0]]})}catch(a){console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.")}".lg-sub-html"!==this.s.appendSubHtmlTo&&l.addHtml(b),l.$slide.eq(b).addClass("lg-loaded")}l.$slide.eq(b).find(".lg-object").on("load.lg error.lg",function(){var c=0;d&&!a("body").hasClass("lg-from-hash")&&(c=d),setTimeout(function(){l.$slide.eq(b).addClass("lg-complete"),l.$el.trigger("onSlideItemLoad.lg",[b,d||0])},c)}),q&&q.html5&&!m&&l.$slide.eq(b).addClass("lg-complete"),!0===c&&(l.$slide.eq(b).hasClass("lg-complete")?l.preload(b):l.$slide.eq(b).find(".lg-object").on("load.lg error.lg",function(){l.preload(b)}))},b.prototype.slide=function(b,c,d,e){var f=this.$outer.find(".lg-current").index(),g=this;if(!g.lGalleryOn||f!==b){var h=this.$slide.length,i=g.lGalleryOn?this.s.speed:0;if(!g.lgBusy){if(this.s.download){var j;j=g.s.dynamic?!1!==g.s.dynamicEl[b].downloadUrl&&(g.s.dynamicEl[b].downloadUrl||g.s.dynamicEl[b].src):"false"!==g.$items.eq(b).attr("data-download-url")&&(g.$items.eq(b).attr("data-download-url")||g.$items.eq(b).attr("href")||g.$items.eq(b).attr("data-src")),j?(a("#lg-download").attr("href",j),g.$outer.removeClass("lg-hide-download")):g.$outer.addClass("lg-hide-download")}if(this.$el.trigger("onBeforeSlide.lg",[f,b,c,d]),g.lgBusy=!0,clearTimeout(g.hideBarTimeout),".lg-sub-html"===this.s.appendSubHtmlTo&&setTimeout(function(){g.addHtml(b)},i),this.arrowDisable(b),e||(b<f?e="prev":b>f&&(e="next")),c){this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide");var k,l;h>2?(k=b-1,l=b+1,0===b&&f===h-1?(l=0,k=h-1):b===h-1&&0===f&&(l=0,k=h-1)):(k=0,l=1),"prev"===e?g.$slide.eq(l).addClass("lg-next-slide"):g.$slide.eq(k).addClass("lg-prev-slide"),g.$slide.eq(b).addClass("lg-current")}else g.$outer.addClass("lg-no-trans"),this.$slide.removeClass("lg-prev-slide lg-next-slide"),"prev"===e?(this.$slide.eq(b).addClass("lg-prev-slide"),this.$slide.eq(f).addClass("lg-next-slide")):(this.$slide.eq(b).addClass("lg-next-slide"),this.$slide.eq(f).addClass("lg-prev-slide")),setTimeout(function(){g.$slide.removeClass("lg-current"),g.$slide.eq(b).addClass("lg-current"),g.$outer.removeClass("lg-no-trans")},50);g.lGalleryOn?(setTimeout(function(){g.loadContent(b,!0,0)},this.s.speed+50),setTimeout(function(){g.lgBusy=!1,g.$el.trigger("onAfterSlide.lg",[f,b,c,d])},this.s.speed)):(g.loadContent(b,!0,g.s.backdropDuration),g.lgBusy=!1,g.$el.trigger("onAfterSlide.lg",[f,b,c,d])),g.lGalleryOn=!0,this.s.counter&&a("#lg-counter-current").text(b+1)}g.index=b}},b.prototype.goToNextSlide=function(a){var b=this,c=b.s.loop;a&&b.$slide.length<3&&(c=!1),b.lgBusy||(b.index+1<b.$slide.length?(b.index++,b.$el.trigger("onBeforeNextSlide.lg",[b.index]),b.slide(b.index,a,!1,"next")):c?(b.index=0,b.$el.trigger("onBeforeNextSlide.lg",[b.index]),b.slide(b.index,a,!1,"next")):b.s.slideEndAnimatoin&&!a&&(b.$outer.addClass("lg-right-end"),setTimeout(function(){b.$outer.removeClass("lg-right-end")},400)))},b.prototype.goToPrevSlide=function(a){var b=this,c=b.s.loop;a&&b.$slide.length<3&&(c=!1),b.lgBusy||(b.index>0?(b.index--,b.$el.trigger("onBeforePrevSlide.lg",[b.index,a]),b.slide(b.index,a,!1,"prev")):c?(b.index=b.$items.length-1,b.$el.trigger("onBeforePrevSlide.lg",[b.index,a]),b.slide(b.index,a,!1,"prev")):b.s.slideEndAnimatoin&&!a&&(b.$outer.addClass("lg-left-end"),setTimeout(function(){b.$outer.removeClass("lg-left-end")},400)))},b.prototype.keyPress=function(){var b=this;this.$items.length>1&&a(window).on("keyup.lg",function(a){b.$items.length>1&&(37===a.keyCode&&(a.preventDefault(),b.goToPrevSlide()),39===a.keyCode&&(a.preventDefault(),b.goToNextSlide()))}),a(window).on("keydown.lg",function(a){!0===b.s.escKey&&27===a.keyCode&&(a.preventDefault(),b.$outer.hasClass("lg-thumb-open")?b.$outer.removeClass("lg-thumb-open"):b.destroy())})},b.prototype.arrow=function(){var a=this;this.$outer.find(".lg-prev").on("click.lg",function(){a.goToPrevSlide()}),this.$outer.find(".lg-next").on("click.lg",function(){a.goToNextSlide()})},b.prototype.arrowDisable=function(a){!this.s.loop&&this.s.hideControlOnEnd&&(a+1<this.$slide.length?this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-next").attr("disabled","disabled").addClass("disabled"),a>0?this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled"):this.$outer.find(".lg-prev").attr("disabled","disabled").addClass("disabled"))},b.prototype.setTranslate=function(a,b,c){this.s.useLeft?a.css("left",b):a.css({transform:"translate3d("+b+"px, "+c+"px, 0px)"})},b.prototype.touchMove=function(b,c){var d=c-b;Math.abs(d)>15&&(this.$outer.addClass("lg-dragging"),this.setTranslate(this.$slide.eq(this.index),d,0),this.setTranslate(a(".lg-prev-slide"),-this.$slide.eq(this.index).width()+d,0),this.setTranslate(a(".lg-next-slide"),this.$slide.eq(this.index).width()+d,0))},b.prototype.touchEnd=function(a){var b=this;"lg-slide"!==b.s.mode&&b.$outer.addClass("lg-slide"),this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity","0"),setTimeout(function(){b.$outer.removeClass("lg-dragging"),a<0&&Math.abs(a)>b.s.swipeThreshold?b.goToNextSlide(!0):a>0&&Math.abs(a)>b.s.swipeThreshold?b.goToPrevSlide(!0):Math.abs(a)<5&&b.$el.trigger("onSlideClick.lg"),b.$slide.removeAttr("style")}),setTimeout(function(){b.$outer.hasClass("lg-dragging")||"lg-slide"===b.s.mode||b.$outer.removeClass("lg-slide")},b.s.speed+100)},b.prototype.enableSwipe=function(){var a=this,b=0,c=0,d=!1;a.s.enableSwipe&&a.doCss()&&(a.$slide.on("touchstart.lg",function(c){a.$outer.hasClass("lg-zoomed")||a.lgBusy||(c.preventDefault(),a.manageSwipeClass(),b=c.originalEvent.targetTouches[0].pageX)}),a.$slide.on("touchmove.lg",function(e){a.$outer.hasClass("lg-zoomed")||(e.preventDefault(),c=e.originalEvent.targetTouches[0].pageX,a.touchMove(b,c),d=!0)}),a.$slide.on("touchend.lg",function(){a.$outer.hasClass("lg-zoomed")||(d?(d=!1,a.touchEnd(c-b)):a.$el.trigger("onSlideClick.lg"))}))},b.prototype.enableDrag=function(){var b=this,c=0,d=0,e=!1,f=!1;b.s.enableDrag&&b.doCss()&&(b.$slide.on("mousedown.lg",function(d){b.$outer.hasClass("lg-zoomed")||b.lgBusy||a(d.target).text().trim()||(d.preventDefault(),b.manageSwipeClass(),c=d.pageX,e=!0,b.$outer.scrollLeft+=1,b.$outer.scrollLeft-=1,b.$outer.removeClass("lg-grab").addClass("lg-grabbing"),b.$el.trigger("onDragstart.lg"))}),a(window).on("mousemove.lg",function(a){e&&(f=!0,d=a.pageX,b.touchMove(c,d),b.$el.trigger("onDragmove.lg"))}),a(window).on("mouseup.lg",function(g){f?(f=!1,b.touchEnd(d-c),b.$el.trigger("onDragend.lg")):(a(g.target).hasClass("lg-object")||a(g.target).hasClass("lg-video-play"))&&b.$el.trigger("onSlideClick.lg"),e&&(e=!1,b.$outer.removeClass("lg-grabbing").addClass("lg-grab"))}))},b.prototype.manageSwipeClass=function(){var a=this.index+1,b=this.index-1;this.s.loop&&this.$slide.length>2&&(0===this.index?b=this.$slide.length-1:this.index===this.$slide.length-1&&(a=0)),this.$slide.removeClass("lg-next-slide lg-prev-slide"),b>-1&&this.$slide.eq(b).addClass("lg-prev-slide"),this.$slide.eq(a).addClass("lg-next-slide")},b.prototype.mousewheel=function(){var a=this;a.$outer.on("mousewheel.lg",function(b){b.deltaY&&(b.deltaY>0?a.goToPrevSlide():a.goToNextSlide(),b.preventDefault())})},b.prototype.closeGallery=function(){var b=this,c=!1;this.$outer.find(".lg-close").on("click.lg",function(){b.destroy()}),b.s.closable&&(b.$outer.on("mousedown.lg",function(b){c=!!(a(b.target).is(".lg-outer")||a(b.target).is(".lg-item ")||a(b.target).is(".lg-img-wrap"))}),b.$outer.on("mousemove.lg",function(){c=!1}),b.$outer.on("mouseup.lg",function(d){(a(d.target).is(".lg-outer")||a(d.target).is(".lg-item ")||a(d.target).is(".lg-img-wrap")&&c)&&(b.$outer.hasClass("lg-dragging")||b.destroy())}))},b.prototype.destroy=function(b){var c=this;b||(c.$el.trigger("onBeforeClose.lg"),a(window).scrollTop(c.prevScrollTop)),b&&(c.s.dynamic||this.$items.off("click.lg click.lgcustom"),a.removeData(c.el,"lightGallery")),this.$el.off(".lg.tm"),a.each(a.fn.lightGallery.modules,function(a){c.modules[a]&&c.modules[a].destroy()}),this.lGalleryOn=!1,clearTimeout(c.hideBarTimeout),this.hideBarTimeout=!1,a(window).off(".lg"),a("body").removeClass("lg-on lg-from-hash"),c.$outer&&c.$outer.removeClass("lg-visible"),a(".lg-backdrop").removeClass("in"),setTimeout(function(){c.$outer&&c.$outer.remove(),a(".lg-backdrop").remove(),b||c.$el.trigger("onCloseAfter.lg"),c.$el.focus()},c.s.backdropDuration+50)},a.fn.lightGallery=function(c){return this.each(function(){if(a.data(this,"lightGallery"))try{a(this).data("lightGallery").init()}catch(a){console.error("lightGallery has not initiated properly",a)}else a.data(this,"lightGallery",new b(this,c))})},a.fn.lightGallery.modules={}}()});
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof module&&module.exports?module.exports=b(require("jquery")):b(a.jQuery)}(this,function(a){!function(){"use strict";var b=function(){var a=!1,b=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return b&&parseInt(b[2],10)<54&&(a=!0),a},c={scale:1,zoom:!0,actualSize:!0,enableZoomAfter:300,useLeftForZoom:b()},d=function(b){return this.core=a(b).data("lightGallery"),this.core.s=a.extend({},c,this.core.s),this.core.s.zoom&&this.core.doCss()&&(this.init(),this.zoomabletimeout=!1,this.pageX=a(window).width()/2,this.pageY=a(window).height()/2+a(window).scrollTop()),this};d.prototype.init=function(){var b=this,c='<button type="button" aria-label="Zoom in" id="lg-zoom-in" class="lg-icon"></button><button type="button" aria-label="Zoom out" id="lg-zoom-out" class="lg-icon"></button>';b.core.s.actualSize&&(c+='<button type="button" aria-label="Actual size" id="lg-actual-size" class="lg-icon"></button>'),b.core.s.useLeftForZoom?b.core.$outer.addClass("lg-use-left-for-zoom"):b.core.$outer.addClass("lg-use-transition-for-zoom"),this.core.$outer.find(".lg-toolbar").append(c),b.core.$el.on("onSlideItemLoad.lg.tm.zoom",function(c,d,e){var f=b.core.s.enableZoomAfter+e;a("body").hasClass("lg-from-hash")&&e?f=0:a("body").removeClass("lg-from-hash"),b.zoomabletimeout=setTimeout(function(){b.core.$slide.eq(d).addClass("lg-zoomable")},f+30)});var d=1,e=function(c){var d,e,f=b.core.$outer.find(".lg-current .lg-image"),g=(a(window).width()-f.prop("offsetWidth"))/2,h=(a(window).height()-f.prop("offsetHeight"))/2+a(window).scrollTop();d=b.pageX-g,e=b.pageY-h;var i=(c-1)*d,j=(c-1)*e;f.css("transform","scale3d("+c+", "+c+", 1)").attr("data-scale",c),b.core.s.useLeftForZoom?f.parent().css({left:-i+"px",top:-j+"px"}).attr("data-x",i).attr("data-y",j):f.parent().css("transform","translate3d(-"+i+"px, -"+j+"px, 0)").attr("data-x",i).attr("data-y",j)},f=function(){d>1?b.core.$outer.addClass("lg-zoomed"):b.resetZoom(),d<1&&(d=1),e(d)},g=function(c,e,g,h){var i,j=e.prop("offsetWidth");i=b.core.s.dynamic?b.core.s.dynamicEl[g].width||e[0].naturalWidth||j:b.core.$items.eq(g).attr("data-width")||e[0].naturalWidth||j;var k;b.core.$outer.hasClass("lg-zoomed")?d=1:i>j&&(k=i/j,d=k||2),h?(b.pageX=a(window).width()/2,b.pageY=a(window).height()/2+a(window).scrollTop()):(b.pageX=c.pageX||c.originalEvent.targetTouches[0].pageX,b.pageY=c.pageY||c.originalEvent.targetTouches[0].pageY),f(),setTimeout(function(){b.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")},10)},h=!1;b.core.$el.on("onAferAppendSlide.lg.tm.zoom",function(a,c){var d=b.core.$slide.eq(c).find(".lg-image");d.on("dblclick",function(a){g(a,d,c)}),d.on("touchstart",function(a){h?(clearTimeout(h),h=null,g(a,d,c)):h=setTimeout(function(){h=null},300),a.preventDefault()})}),a(window).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom",function(){b.pageX=a(window).width()/2,b.pageY=a(window).height()/2+a(window).scrollTop(),e(d)}),a("#lg-zoom-out").on("click.lg",function(){b.core.$outer.find(".lg-current .lg-image").length&&(d-=b.core.s.scale,f())}),a("#lg-zoom-in").on("click.lg",function(){b.core.$outer.find(".lg-current .lg-image").length&&(d+=b.core.s.scale,f())}),a("#lg-actual-size").on("click.lg",function(a){g(a,b.core.$slide.eq(b.core.index).find(".lg-image"),b.core.index,!0)}),b.core.$el.on("onBeforeSlide.lg.tm",function(){d=1,b.resetZoom()}),b.zoomDrag(),b.zoomSwipe()},d.prototype.getCurrentTransform=function(a){if(!a)return 0;var b=window.getComputedStyle(a,null),c=b.getPropertyValue("-webkit-transform")||b.getPropertyValue("-moz-transform")||b.getPropertyValue("-ms-transform")||b.getPropertyValue("-o-transform")||b.getPropertyValue("transform")||"none";return"none"!==c?c.split("(")[1].split(")")[0].split(","):0},d.prototype.getCurrentRotation=function(a){if(!a)return 0;var b=this.getCurrentTransform(a);return b?Math.round(Math.atan2(b[1],b[0])*(180/Math.PI)):0},d.prototype.getModifier=function(a,b,c){var d=a;a=Math.abs(a);var e=this.getCurrentTransform(c);if(!e)return 1;var f=1;if("X"===b){var g=Math.sign(parseFloat(e[0]));0===a||180===a?f=1:90===a&&(f=-90===d&&1===g||90===d&&-1===g?-1:1),f*=g}else{var h=Math.sign(parseFloat(e[3]));if(0===a||180===a)f=1;else if(90===a){var i=parseFloat(e[1]),j=parseFloat(e[2]);f=Math.sign(i*j*d*h)}f*=h}return f},d.prototype.getImageSize=function(a,b,c){var d={y:"offsetHeight",x:"offsetWidth"};return 90===b&&(c="x"===c?"y":"x"),a.prop(d[c])},d.prototype.getDragCords=function(a,b){return 90===b?{x:a.pageY,y:a.pageX}:{x:a.pageX,y:a.pageY}},d.prototype.getSwipeCords=function(a,b){var c=a.originalEvent.targetTouches[0].pageX,d=a.originalEvent.targetTouches[0].pageY;return 90===b?{x:d,y:c}:{x:c,y:d}},d.prototype.getPossibleDragCords=function(a,b){var c=(this.core.$outer.find(".lg").height()-this.getImageSize(a,b,"y"))/2,d=Math.abs(this.getImageSize(a,b,"y")*Math.abs(a.attr("data-scale"))-this.core.$outer.find(".lg").height()+c),e=(this.core.$outer.find(".lg").width()-this.getImageSize(a,b,"x"))/2,f=Math.abs(this.getImageSize(a,b,"x")*Math.abs(a.attr("data-scale"))-this.core.$outer.find(".lg").width()+e);return 90===b?{minY:e,maxY:f,minX:c,maxX:d}:{minY:c,maxY:d,minX:e,maxX:f}},d.prototype.getDragAllowedAxises=function(a,b){var c=this.getImageSize(a,b,"y")*a.attr("data-scale")>this.core.$outer.find(".lg").height(),d=this.getImageSize(a,b,"x")*a.attr("data-scale")>this.core.$outer.find(".lg").width();return 90===b?{allowX:c,allowY:d}:{allowX:d,allowY:c}},d.prototype.resetZoom=function(){this.core.$outer.removeClass("lg-zoomed"),this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"),this.core.$slide.find(".lg-image").removeAttr("style data-scale"),this.pageX=a(window).width()/2,this.pageY=a(window).height()/2+a(window).scrollTop()},d.prototype.zoomSwipe=function(){var a,b=this,c={},d={},e=!1,f=!1,g=!1,h=0;b.core.$slide.on("touchstart.lg",function(d){if(b.core.$outer.hasClass("lg-zoomed")){var e=b.core.$slide.eq(b.core.index).find(".lg-object");a=b.core.$slide.eq(b.core.index).find(".lg-img-rotate")[0],h=b.getCurrentRotation(a);var i=b.getDragAllowedAxises(e,Math.abs(h));g=i.allowY,f=i.allowX,(f||g)&&(d.preventDefault(),c=b.getSwipeCords(d,Math.abs(h)))}}),b.core.$slide.on("touchmove.lg",function(i){if(b.core.$outer.hasClass("lg-zoomed")){var j,k,l=b.core.$slide.eq(b.core.index).find(".lg-img-wrap");i.preventDefault(),e=!0,d=b.getSwipeCords(i,Math.abs(h)),b.core.$outer.addClass("lg-zoom-dragging"),k=g?-Math.abs(l.attr("data-y"))+(d.y-c.y)*b.getModifier(h,"Y",a):-Math.abs(l.attr("data-y")),j=f?-Math.abs(l.attr("data-x"))+(d.x-c.x)*b.getModifier(h,"X",a):-Math.abs(l.attr("data-x")),(Math.abs(d.x-c.x)>15||Math.abs(d.y-c.y)>15)&&(b.core.s.useLeftForZoom?l.css({left:j+"px",top:k+"px"}):l.css("transform","translate3d("+j+"px, "+k+"px, 0)"))}}),b.core.$slide.on("touchend.lg",function(){b.core.$outer.hasClass("lg-zoomed")&&e&&(e=!1,b.core.$outer.removeClass("lg-zoom-dragging"),b.touchendZoom(c,d,f,g,h))})},d.prototype.zoomDrag=function(){var b,c=this,d={},e={},f=!1,g=!1,h=!1,i=!1,j=0;c.core.$slide.on("mousedown.lg.zoom",function(e){b=c.core.$slide.eq(c.core.index).find(".lg-img-rotate")[0],j=c.getCurrentRotation(b);var g=c.core.$slide.eq(c.core.index).find(".lg-object"),k=c.getDragAllowedAxises(g,Math.abs(j));i=k.allowY,h=k.allowX,c.core.$outer.hasClass("lg-zoomed")&&a(e.target).hasClass("lg-object")&&(h||i)&&(e.preventDefault(),d=c.getDragCords(e,Math.abs(j)),f=!0,c.core.$outer.scrollLeft+=1,c.core.$outer.scrollLeft-=1,c.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))}),a(window).on("mousemove.lg.zoom",function(a){if(f){var k,l,m=c.core.$slide.eq(c.core.index).find(".lg-img-wrap");g=!0,e=c.getDragCords(a,Math.abs(j)),c.core.$outer.addClass("lg-zoom-dragging"),l=i?-Math.abs(m.attr("data-y"))+(e.y-d.y)*c.getModifier(j,"Y",b):-Math.abs(m.attr("data-y")),k=h?-Math.abs(m.attr("data-x"))+(e.x-d.x)*c.getModifier(j,"X",b):-Math.abs(m.attr("data-x")),c.core.s.useLeftForZoom?m.css({left:k+"px",top:l+"px"}):m.css("transform","translate3d("+k+"px, "+l+"px, 0)")}}),a(window).on("mouseup.lg.zoom",function(a){f&&(f=!1,c.core.$outer.removeClass("lg-zoom-dragging"),!g||d.x===e.x&&d.y===e.y||(e=c.getDragCords(a,Math.abs(j)),c.touchendZoom(d,e,h,i,j)),g=!1),c.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")})},d.prototype.touchendZoom=function(a,b,c,d,e){var f=this,g=f.core.$slide.eq(f.core.index).find(".lg-img-wrap"),h=f.core.$slide.eq(f.core.index).find(".lg-object"),i=f.core.$slide.eq(f.core.index).find(".lg-img-rotate")[0],j=-Math.abs(g.attr("data-x"))+(b.x-a.x)*f.getModifier(e,"X",i),k=-Math.abs(g.attr("data-y"))+(b.y-a.y)*f.getModifier(e,"Y",i),l=f.getPossibleDragCords(h,Math.abs(e));(Math.abs(b.x-a.x)>15||Math.abs(b.y-a.y)>15)&&(d&&(k<=-l.maxY?k=-l.maxY:k>=-l.minY&&(k=-l.minY)),c&&(j<=-l.maxX?j=-l.maxX:j>=-l.minX&&(j=-l.minX)),d?g.attr("data-y",Math.abs(k)):k=-Math.abs(g.attr("data-y")),c?g.attr("data-x",Math.abs(j)):j=-Math.abs(g.attr("data-x")),f.core.s.useLeftForZoom?g.css({left:j+"px",top:k+"px"}):g.css("transform","translate3d("+j+"px, "+k+"px, 0)"))},d.prototype.destroy=function(){var b=this;b.core.$el.off(".lg.zoom"),a(window).off(".lg.zoom"),b.core.$slide.off(".lg.zoom"),b.core.$el.off(".lg.tm.zoom"),b.resetZoom(),clearTimeout(b.zoomabletimeout),b.zoomabletimeout=!1},a.fn.lightGallery.modules.zoom=d}()});
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof module&&module.exports?module.exports=b(require("jquery")):b(a.jQuery)}(this,function(a){!function(){"use strict";function b(a,b,c,d){var e=this;if(e.core.$slide.eq(b).find(".lg-video").append(e.loadVideo(c,"lg-object",!0,b,d)),d)if(e.core.s.videojs)try{videojs(e.core.$slide.eq(b).find(".lg-html5").get(0),e.core.s.videojsOptions,function(){!e.videoLoaded&&e.core.s.autoplayFirstVideo&&this.play()})}catch(a){console.error("lightGallery:- Make sure you have included videojs")}else!e.videoLoaded&&e.core.s.autoplayFirstVideo&&e.core.$slide.eq(b).find(".lg-html5").length&&e.core.$slide.eq(b).find(".lg-html5").get(0).play()}function c(a,b){var c=this.core.$slide.eq(b).find(".lg-video-cont");c.hasClass("lg-has-iframe")||(c.css("max-width",this.core.s.videoMaxWidth),this.videoLoaded=!0)}function d(b,c,d){var e=this,f=e.core.$slide.eq(c),g=f.find(".lg-youtube").get(0),h=f.find(".lg-vimeo").get(0),i=f.find(".lg-dailymotion").get(0),j=f.find(".lg-vk").get(0),k=f.find(".lg-html5").get(0);if(g)g.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");else if(h)try{new Vimeo.Player(h).pause().catch(function(a){console.error("Unable to pause the video:",a.name)})}catch(a){console.warn("lightGallery:- Make sure you have included https://github.com/vimeo/player.js")}else if(i)i.contentWindow.postMessage("pause","*");else if(k)if(e.core.s.videojs)try{videojs(k).pause()}catch(a){console.error("lightGallery:- Make sure you have included videojs")}else k.pause();j&&a(j).attr("src",a(j).attr("src").replace("&autoplay","&noplay"));var l;l=e.core.s.dynamic?e.core.s.dynamicEl[d].src:e.core.$items.eq(d).attr("href")||e.core.$items.eq(d).attr("data-src");var m=e.core.isVideo(l,d)||{};(m.youtube||m.vimeo||m.dailymotion||m.vk)&&e.core.$outer.addClass("lg-hide-download")}var e={videoMaxWidth:"855px",autoplayFirstVideo:!0,youtubePlayerParams:!1,vimeoPlayerParams:!1,dailymotionPlayerParams:!1,vkPlayerParams:!1,videojs:!1,videojsOptions:{}},f=function(b){return this.core=a(b).data("lightGallery"),this.$el=a(b),this.core.s=a.extend({},e,this.core.s),this.videoLoaded=!1,this.init(),this};f.prototype.init=function(){var e=this;e.core.$el.on("hasVideo.lg.tm",b.bind(this)),e.core.$el.on("onAferAppendSlide.lg.tm",c.bind(this)),e.core.doCss()&&e.core.$items.length>1&&(e.core.s.enableSwipe||e.core.s.enableDrag)?e.core.$el.on("onSlideClick.lg.tm",function(){var a=e.core.$slide.eq(e.core.index);e.loadVideoOnclick(a)}):e.core.$slide.on("click.lg",function(){e.loadVideoOnclick(a(this))}),e.core.$el.on("onBeforeSlide.lg.tm",d.bind(this)),e.core.$el.on("onAfterSlide.lg.tm",function(a,b){e.core.$slide.eq(b).removeClass("lg-video-playing")}),e.core.s.autoplayFirstVideo&&e.core.$el.on("onAferAppendSlide.lg.tm",function(a,b){if(!e.core.lGalleryOn){var c=e.core.$slide.eq(b);setTimeout(function(){e.loadVideoOnclick(c)},100)}})},f.prototype.loadVideo=function(b,c,d,e,f){var g,h=this,i="",j=1,k="",l=this.core.isVideo(b,e)||{};if(g=h.core.s.dynamic?h.core.s.dynamicEl[h.core.index].title:h.core.$items.eq(h.core.index).attr("title")||h.core.$items.eq(h.core.index).find("img").first().attr("alt"),g=g?'title="'+g+'"':"",d&&(j=this.videoLoaded?0:this.core.s.autoplayFirstVideo?1:0),l.youtube)k="?wmode=opaque&autoplay="+j+"&enablejsapi=1",this.core.s.youtubePlayerParams&&(k=k+"&"+a.param(this.core.s.youtubePlayerParams)),i='<iframe allow="autoplay" class="lg-video-object lg-youtube '+c+'" '+g+' width="560" height="315" src="//www.youtube.com/embed/'+l.youtube[1]+k+'" frameborder="0" allowfullscreen></iframe>';else if(l.vimeo)k="?autoplay="+j,this.core.s.vimeoPlayerParams&&(k=k+"&"+a.param(this.core.s.vimeoPlayerParams)),i='<iframe allow="autoplay" class="lg-video-object lg-vimeo '+c+'" '+g+' width="560" height="315"  src="//player.vimeo.com/video/'+l.vimeo[1]+k+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';else if(l.dailymotion)k="?wmode=opaque&autoplay="+j+"&api=postMessage",this.core.s.dailymotionPlayerParams&&(k=k+"&"+a.param(this.core.s.dailymotionPlayerParams)),i='<iframe allow="autoplay" class="lg-video-object lg-dailymotion '+c+'" '+g+' width="560" height="315" src="//www.dailymotion.com/embed/video/'+l.dailymotion[1]+k+'" frameborder="0" allowfullscreen></iframe>';else if(l.html5){var m=f.substring(0,1);"."!==m&&"#"!==m||(f=a(f).html()),i=f}else l.vk&&(k="&autoplay="+j,this.core.s.vkPlayerParams&&(k=k+"&"+a.param(this.core.s.vkPlayerParams)),i='<iframe allow="autoplay" class="lg-video-object lg-vk '+c+'" '+g+' width="560" height="315" src="//vk.com/video_ext.php?'+l.vk[1]+k+'" frameborder="0" allowfullscreen></iframe>');return i},f.prototype.loadVideoOnclick=function(a){var b=this;if(a.find(".lg-object").hasClass("lg-has-poster")&&a.find(".lg-object").is(":visible"))if(a.hasClass("lg-has-video")){var c=a.find(".lg-youtube").get(0),d=a.find(".lg-vimeo").get(0),e=a.find(".lg-dailymotion").get(0),f=a.find(".lg-html5").get(0);if(c)c.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*");else if(d)try{new Vimeo.Player(d).play().catch(function(a){console.error("error playing the video:",a.name)})}catch(a){console.warn("lightGallery:- Make sure you have included https://github.com/vimeo/player.js")}else if(e)e.contentWindow.postMessage("play","*");else if(f)if(b.core.s.videojs)try{videojs(f).play()}catch(a){console.error("lightGallery:- Make sure you have included videojs")}else f.play();a.addClass("lg-video-playing")}else{a.addClass("lg-video-playing lg-has-video");var g,h,i=function(c,d){if(a.find(".lg-video").append(b.loadVideo(c,"",!1,b.core.index,d)),d)if(b.core.s.videojs)try{videojs(b.core.$slide.eq(b.core.index).find(".lg-html5").get(0),b.core.s.videojsOptions,function(){this.play()})}catch(a){console.error("lightGallery:- Make sure you have included videojs")}else b.core.$slide.eq(b.core.index).find(".lg-html5").get(0).play()};b.core.s.dynamic?(g=b.core.s.dynamicEl[b.core.index].src,h=b.core.s.dynamicEl[b.core.index].html,i(g,h)):(g=b.core.$items.eq(b.core.index).attr("href")||b.core.$items.eq(b.core.index).attr("data-src"),h=b.core.$items.eq(b.core.index).attr("data-html"),i(g,h));var j=a.find(".lg-object");a.find(".lg-video").append(j),a.find(".lg-video-object").hasClass("lg-html5")||(a.removeClass("lg-complete"),a.find(".lg-video-object").on("load.lg error.lg",function(){a.addClass("lg-complete")}))}},f.prototype.destroy=function(){this.videoLoaded=!1},a.fn.lightGallery.modules.video=f}()});

/* Theia Sticky 1.6.0 */
!function(v){"use strict";v.fn.theiaStickySidebar=function(i){function t(i,t){return!0===i.initialized||!(v("body").width()<i.minWidth)&&(o=t,(u=i).initialized=!0,0===v("#theia-sticky-sidebar-stylesheet-"+u.namespace).length&&v("head").append(v('<style id="theia-sticky-sidebar-stylesheet-'+u.namespace+'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')),o.each(function(){function y(){i.fixedScrollTop=0,i.sidebar.css({"min-height":"1px"}),i.stickySidebar.css({position:"static",width:"",transform:"none"})}var o,i={};i.sidebar=v(this),i.options=u||{},i.container=v(i.options.containerSelector),0==i.container.length&&(i.container=i.sidebar.parent()),i.sidebar.parents().css("-webkit-transform","none"),i.sidebar.css({position:i.options.defaultPosition,overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),i.stickySidebar=i.sidebar.find(".theiaStickySidebar"),0==i.stickySidebar.length&&(o=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i,i.sidebar.find("script").filter(function(i,t){return 0===t.type.length||t.type.match(o)}).remove(),i.stickySidebar=v("<div>").addClass("theiaStickySidebar").append(i.sidebar.children()),i.sidebar.append(i.stickySidebar)),i.marginBottom=parseInt(i.sidebar.css("margin-bottom")),i.paddingTop=parseInt(i.sidebar.css("padding-top")),i.paddingBottom=parseInt(i.sidebar.css("padding-bottom"));var t,e,a,s=i.stickySidebar.offset().top,n=i.stickySidebar.outerHeight();i.stickySidebar.css("padding-top",1),i.stickySidebar.css("padding-bottom",1),s-=i.stickySidebar.offset().top,n=i.stickySidebar.outerHeight()-n-s,0==s?(i.stickySidebar.css("padding-top",0),i.stickySidebarPaddingTop=0):i.stickySidebarPaddingTop=1,0==n?(i.stickySidebar.css("padding-bottom",0),i.stickySidebarPaddingBottom=0):i.stickySidebarPaddingBottom=1,i.previousScrollTop=null,i.fixedScrollTop=0,y(),i.onScroll=function(i){if(i.stickySidebar.is(":visible")){if(v("body").width()<i.options.minWidth)return void y();if(i.options.disableOnResponsiveLayouts)if(i.sidebar.outerWidth("none"==i.sidebar.css("float"))+50>i.container.width())return void y();var t,o,e,a,s,n,d,r,c,p,b,l,h,g=v(document).scrollTop(),f="static";g>=i.sidebar.offset().top+(i.paddingTop-i.options.additionalMarginTop)&&(t=i.paddingTop+u.additionalMarginTop,o=i.paddingBottom+i.marginBottom+u.additionalMarginBottom,e=i.sidebar.offset().top,a=i.sidebar.offset().top+(S=i.container,m=S.height(),S.children().each(function(){m=Math.max(m,v(this).height())}),m),s=0+u.additionalMarginTop,n=i.stickySidebar.outerHeight()+t+o<v(window).height()?s+i.stickySidebar.outerHeight():v(window).height()-i.marginBottom-i.paddingBottom-u.additionalMarginBottom,d=e-g+i.paddingTop,r=a-g-i.paddingBottom-i.marginBottom,c=i.stickySidebar.offset().top-g,p=i.previousScrollTop-g,"fixed"==i.stickySidebar.css("position")&&"modern"==i.options.sidebarBehavior&&(c+=p),"stick-to-top"==i.options.sidebarBehavior&&(c=u.additionalMarginTop),"stick-to-bottom"==i.options.sidebarBehavior&&(c=n-i.stickySidebar.outerHeight()),c=0<p?Math.min(c,s):Math.max(c,n-i.stickySidebar.outerHeight()),c=Math.max(c,d),c=Math.min(c,r-i.stickySidebar.outerHeight()),f=!(b=i.container.height()==i.stickySidebar.outerHeight())&&c==s||!b&&c==n-i.stickySidebar.outerHeight()?"fixed":g+c-i.sidebar.offset().top-i.paddingTop<=u.additionalMarginTop?"static":"absolute"),"fixed"==f?(l=v(document).scrollLeft(),i.stickySidebar.css({position:"fixed",width:k(i.stickySidebar)+"px",transform:"translateY("+c+"px)",left:i.sidebar.offset().left+parseInt(i.sidebar.css("padding-left"))-l+"px",top:"0px"})):"absolute"==f?(h={},"absolute"!=i.stickySidebar.css("position")&&(h.position="absolute",h.transform="translateY("+(g+c-i.sidebar.offset().top-i.stickySidebarPaddingTop-i.stickySidebarPaddingBottom)+"px)",h.top="0px"),h.width=k(i.stickySidebar)+"px",h.left="",i.stickySidebar.css(h)):"static"==f&&y(),"static"!=f&&1==i.options.updateSidebarHeight&&i.sidebar.css({"min-height":i.stickySidebar.outerHeight()+i.stickySidebar.offset().top-i.sidebar.offset().top+i.paddingBottom}),i.previousScrollTop=g}var S,m},i.onScroll(i),v(document).on("scroll."+i.options.namespace,(a=i,function(){a.onScroll(a)})),v(window).on("resize."+i.options.namespace,(e=i,function(){e.stickySidebar.css({position:"static"}),e.onScroll(e)})),"undefined"!=typeof ResizeSensor&&new ResizeSensor(i.stickySidebar[0],(t=i,function(){t.onScroll(t)}))}),!0);var u,o}function k(i){var t;try{t=i[0].getBoundingClientRect().width}catch(i){}return void 0===t&&(t=i.width()),t}var o,e,a,s,n,d;return(i=v.extend({containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern",defaultPosition:"relative",namespace:"TSS"},i)).additionalMarginTop=parseInt(i.additionalMarginTop)||0,i.additionalMarginBottom=parseInt(i.additionalMarginBottom)||0,t(o=i,e=this)||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),v(document).on("scroll."+o.namespace,(n=o,d=e,function(i){t(n,d)&&v(this).unbind(i)})),v(window).on("resize."+o.namespace,(a=o,s=e,function(i){t(a,s)&&v(this).unbind(i)}))),this}}(jQuery);

/* Codevz plus */
var Codevz_Plus = ( function( $ ) {
	'use strict';

	var wind = $( window ),
		body = $( document.body );

	// Custom easing.
	$.extend( $.easing, {
		def: 'easeInOutCodevz',
		easeInOutCodevz: function(x) {
			return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow( 2, 20 * x - 10 ) / 2 : ( 2 - Math.pow( 2, -20 * x + 10 ) ) / 2;
		}
	});

	// Codevz callback.
	if ( ! $.fn.codevzPlus ) {

		$.fn.codevzPlus = function( data, callback ) {

			if ( $( this ).length ) {

				var $this = $( this ),
					run = function( e ) {

						var l = e.length, i = 0, x;

						for( i; i < l; i++ ) {

							x = $( e[i] );

							if ( x.data( 'codevz' ) !== data ) {
								callback.apply( x.data( 'codevz', data ), [ x, i ] );
							}

						}

					};

				if ( Codevz_Plus.inview( $this, 100 ) ) {

					run( $this );

				} else {

					$( window ).on( 'scroll.codevz', function() {

						run( $this );

						$( this ).off( 'scroll.codevz' );

					} );

				}

			}

		}

	}

	return {

		inview: function( e, offset ) {

			var offset 			= offset || 0,
				docViewTop 		= wind.scrollTop(),
				docViewBottom 	= docViewTop + wind.height(),
				elemTop 		= e.offset().top,
				elemBottom 		= elemTop + e.height();

			return ( ( elemTop <= docViewBottom + offset ) && ( elemBottom >= docViewTop - offset ) );

		},

		init: function() {

			this.css();
			this.lazyLoad();
			this.backtotop();
			this.lightGallery();
			this.sticky_columns();
			this.responsive_text();
			this.wpbakery_fix();

			// Move footer link tags to header.
			$( 'link[id*="cz_"]' ).length && $( 'link[id*="cz_"]' ).insertAfter( 'head title' );

		},

		/*
		 *  Fix VC stretch row for boxed layouts
		 */
		wpbakery_fix: function( wpb ) {

			var isRTL = body.hasClass( 'rtl' ), timeout;

			if ( $( '.layout_1, .layout_2' ).length && ( $( '[data-vc-stretch-content]' ).length || wpb ) ) {

				wind.on( 'resize.row', function() {

					clearTimeout( timeout );

					timeout = setTimeout( function() {

						$( '[data-vc-stretch-content]' ).each( function( i, x ) {

							var la = $( '.inner_layout' ),
								eh = ( la.width() - la.find( '.page_content > .row' ).width() ) / 2;

							$( x ).css({
								'width': la.width(),
								'left': isRTL ? eh : -eh,
								'margin-left': 0,
								'margin-right': 0,
							});

						});

					}, 1000 );

				});

				// Fix WPB
				setTimeout( function() {

					wind.trigger( 'resize.row' );

				}, 500 );

			}

			// Fix fixed side and wpbakery stretch row in RTL.
			if ( $( '.is_fixed_side' ).length && ( isRTL || $( '.elementor-section-stretched' ).length ) ) {

				wind.on( 'resize.fixed_side', function() {

					$( '[data-vc-full-width="true"], .elementor-section-stretched' ).each( function() {

						var en = $( this ),
							offset = $( '.page_content > .row > section' ).offset();

						setTimeout( function() {

							if ( $( '.fixed_side_left, .fixed_side_right' ).length ) {

								en.css( 'padding-left', offset.left );

							}

						}, 150 );

					});

				});

				setTimeout( function() {

					wind.trigger( 'resize.fixed_side' );

				}, 500 );

			}

			// Temporary fix for full rows background.
			if ( $( '[data-vc-full-width="true"], .elementor-section-stretched' ).length ) {

				setTimeout( function() {

					wind.trigger( 'resize' );

				}, 3000 );

			}

			var timeout = 0;

			// Fix WPB animations.
			wind.on( 'scroll.xtra_wpb_animtion', function() {

				clearTimeout( timeout );

				timeout = setTimeout( function() {

					$( '.wpb_animate_when_almost_visible' ).not( '.animated' ).each( function() {

						if ( Codevz_Plus.inview( $( this ), 100 ) ) {

							wind.trigger( 'resize' );

						}

					});

					if ( ! $( '.wpb_animate_when_almost_visible' ).not( '.animated' ).length ) {

						wind.off( 'scroll.xtra_wpb_animtion' );

					}

				}, 250 );

			});

		},

		/*
		*   Responsive smart font size
		*/
		responsive_text: function() {

			var px_to_vw = function( s, w ) {
					var n = s.match(/\d+/) - 2, v = ( n / (w / 100 ));
					return v > 2 ? v + 'vw' : n + 'px';
				},
				elms = $( '.cz_smart_fs .cz_wpe_content [style*="font-size"]' ),
				winWidth, timeout;

			elms.length && wind.on( 'resize.responsive_text', function() {

				clearTimeout( timeout );

				timeout = setTimeout( function() {

					winWidth = wind.width();

					if ( winWidth <= 1170 ) {

						elms.each( function( i, x ) {

							var x = $( x ),
								style, 
								match;

							if ( x.attr( 'data-ori-style' ) ) {
								return;
							}

							if ( ! x.attr( 'data-ori-style' ) ) {
								style = x.attr( 'style' );
								x.attr( 'data-ori-style', style );
							}

							match = style.match( /font-size: \d+.\w+px|font-size: \w+px/ );

							if ( match ) {
								var nu = match[0].match( /\d+/ );
								if ( nu && nu[0] > 18 ) {
									var vw = px_to_vw( match[0], winWidth ),
										cw = x.closest( '.cz_wpe_content' ).width(),
										pw = x.closest( '.cz_smart_fs' ).parent().width();

									if ( cw > pw ) {
										var tt = pw / cw;
										vw = vw.match(/\d+/) * tt;
										if ( winWidth == pw ) {
											vw = vw - 2;
										}
										vw = ( vw - 2 ) + 'vw';
									}

									vw && x.attr( 'style', style.replace( match[0], 'font-size: ' + vw ) );
								}
							}
						});
					} else {
						$( '[data-ori-style]' ).each( function() {
							var en = $( this );
							en.attr( 'style', en.attr( 'data-ori-style' ) ).removeAttr( 'data-ori-style' );
						});
					}

				}, 1000 );

			});

		},

		/*
		*   Move all data styles to head
		*/
		css: function() {

			var tag = $( '#xtra-inline' );

			if ( ! tag.length ) {

				$( 'head' ).append( '<style id="xtra-inline"></style>' );
				tag = $( '#xtra-inline' );

			}

			$( '[data-cz-style]' ).codevzPlus( 'css', function( x ) {

				tag.append( x.data( 'cz-style' ) );

				x.removeAttr( 'data-cz-style' );

			});

		},

		/*
		*   lightGallery
		*/
		lightGallery: function( update ) {

			if ( body.hasClass( 'xtra-disable-lightbox' ) ) {
				return;
			}

			// Prevent other lightbox scripts.
			body.on( 'click', '[data-xtra-lightbox]:not(.cz_grid [data-xtra-lightbox])', function() {

				return false;

			});

			// Selectors.
			var ex  = '.xtra-disable-lightbox',
				selector = 'a[data-html*="#"]:not(' + ex + ' [data-html]), [data-xtra-lightbox]:not(' + ex + ' [data-xtra-lightbox]),a[href*="youtube.com/watch?"]:not(' + ex + ' a[href*="youtube.com/watch?"]),a[href*="youtube-nocookie.com/embed/"]:not(' + ex + ' a[href*="youtube-nocookie.com/embed/"]),a[href*="youtu.be/watch?"]:not(' + ex + ' a[href*="youtu.be/watch?"]),a[href*="vimeo.com/"]:not(' + ex + ' a[href*="vimeo.com/"])';

			if ( update ) {

				// Update lightbox on new elements.
				update.lightGallery({ selector: selector });

			} else {

				// Each gallery.
				$( '.cz_grid, .slick' ).length && $( '.cz_grid, .slick' ).each( function( i, x ) {

					$( x ).lightGallery({ selector: selector, galleryId: i + 1 });

				});

				// Enable light box.
				body.lightGallery({ selector: selector });

			}

		},

		// Sticky columns.
		sticky_columns: function() {

			// Fixed Side
			$( '.fixed_side' ).codevzPlus( 'fixed-side', function( x ) {

				var ff_pos 	= x.hasClass( 'fixed_side_left' ) ? 'left' : 'right',
					inla 	= $( '.inner_layout' );

				// Sticky
				x.theiaStickySidebar({additionalMarginTop: 0,updateSidebarHeight: false});

				// Size's
				wind.on( 'resize.fixed', function() {
					if ( x.css( 'display' ) === 'none' ) {
						inla.css( 'width', '100%' );
					} else {
						x.css( 'height', wind.height() - parseInt( $( '#layout' ).css( 'marginTop' ) + body.css( 'marginTop' ) ) );
						inla.css( 'width', 'calc( 100% - ' + x.outerWidth() + 'px )' );
					}
				});

			});

			var stickyHeader = $( '.header_is_sticky:not(.header_4,.smart_sticky)' );

			// Sticky sidebars & content
			$( '.cz_sticky .row > aside, .cz_sticky_col, .column-xtra-sticky' ).codevzPlus( 'sticky-col', function( x ) {

				x.theiaStickySidebar(
					{
						additionalMarginTop: ( stickyHeader.length ? stickyHeader.height() : 0 ) + 60,
						updateSidebarHeight: false
					}
				);

				// Fix elementor sticky column styles.
				if ( x.hasClass( 'column-xtra-sticky' ) ) {
					x.find( '.theiaStickySidebar' ).addClass( 'elementor-widget-wrap elementor-element-populated' );
				}

			});

		},

		/*
		*   Back to top button
		*/
		backtotop: function() {

			// Fixed quick contact box.
			body.on( 'click', '.fixed_contact', function( e ) {

				var x = $( this );

				!$( e.target ).hasClass( 'fa-cog' ) && x.next( '.fixed_contact' ).fadeToggle( 'fast' ).css({
					bottom: x.height() + parseInt( x.css( 'margin-bottom' ) ) + 40
				});

				e.stopPropagation();

			}).on( 'click', function() {

				$( 'div.fixed_contact' ).is( ':visible' ) && $( 'div.fixed_contact' ).fadeOut( 'fast' );

			// Back to top.
			}).on( 'click', '.backtotop, a[href*="#top"]', function( e ) {

				!$( e.target ).hasClass( 'fa-cog' ) && $( 'html, body' ).animate({ scrollTop: 0 }, 1200, 'easeInOutCodevz' );

				e.preventDefault();

			});

			var backToTop = $( '.backtotop' ), timeout;

			// Back to top fixed.
			backToTop.length && wind.on( 'scroll.backtotop', function() {

				clearTimeout( timeout );

				timeout = setTimeout( function() {

					if ( window.scrollY < 600 ) {
						backToTop.fadeOut( 'fast' );
						$( 'i.fixed_contact' ).css({right: 30});
					} else {
						backToTop.fadeIn( 'fast' );
						$( 'i.fixed_contact' ).css({right: ( backToTop.outerHeight() + 34 )});
					}

				}, 250 );

			});

		},

		/*
		*   Lazyload
		*/
		lazyLoad: function() {

			var timeout, 
				isotope,
				lazy = function() {

					clearTimeout( timeout );

					timeout = setTimeout( function() {

						$( 'img[data-src]' ).each( function( i, x ) {

							x = $( x );

							if ( ! x.hasClass( 'lazyDone' ) && Codevz_Plus.inview( x, 750 ) && ( x.closest( '.sf-menu, .offcanvas_area' ).length ? x.is( ':visible' ) : 1 ) ) {

								x.attr( 'src', x.data( 'src' ) ).attr( 'data-src', '' );

								if ( x.closest( '.cz_grid' ).data( 'isotope' ) ) {

									isotope = x.closest( '.cz_grid' );

									x.parent().imagesLoaded( function( ) {

										isotope.isotope( 'layout' );
										x.addClass( 'lazyDone' ).attr( 'srcset', x.data( 'srcset' ) ).attr( 'sizes', x.data( 'sizes' ) ).removeAttr( 'data-srcset data-sizes data-czlz' );

									});

								} else {

									x.addClass( 'lazyDone' ).attr( 'srcset', x.data( 'srcset' ) ).attr( 'sizes', x.data( 'sizes' ) ).removeAttr( 'data-srcset data-sizes data-czlz' );

								}

								if ( x.innerWidth() - x.width() ) {
									setTimeout( function() {
										x.addClass( 'xtra-remove-bg-color' );
									}, 1000 );
								}

							}

						});

						// Lazyload parallax sections.
						$( 'div[data-vc-parallax-image-lazyload]:not(.lazyDone)' ).each( function( i, x ) {

							x = $( x );

							if ( Codevz_Plus.inview( x, 750 ) ) {
								x.find( '.vc_parallax-inner' ).css( 'background-image', 'url(' + x.data( 'vc-parallax-image-lazyload' ) + ')' );
								x.addClass( 'lazyDone' );
							}

						});

					}, 250 );

					if ( ! $( '[data-czlz]' ).length ) {

						$( window ).off( 'scroll.lazyload' );

					}

				};

			$( window ).on( 'scroll.lazyload', lazy ).trigger( 'scroll.lazyload' );

		},

		language: function( s ) {
			
			var l = 'en';

			if (/[\u0660-\u0669]/.test(s)){
				l = 'ar';
			}else if (/[\u06F0-\u06F9]/.test(s)){
				l = 'fa';
			}

			return l;
		},

		/*
		*   Convert English/Persian/Arabic numbers.
		*/
		convertNumbers: function( number, rtl, lang ) {

			var number = number.toLocaleString(),
				numbers = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];

			if ( lang == 'fa' ) {
				numbers = [ '۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹' ];
			} else if ( lang == 'ar' ) {
				numbers = [ '٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩' ];
			}

			return rtl ? number.replace( /[0-9]/g, function( i ) {
				return numbers[ +i ];
			}) : number.replace( /[٠-٩]|[۰-۹]/g, function ( i ) {
				return numbers.indexOf( i );
			});

		},

	};

})( jQuery );

/* Run */
jQuery( function( $ ) {
	Codevz_Plus.init();
});