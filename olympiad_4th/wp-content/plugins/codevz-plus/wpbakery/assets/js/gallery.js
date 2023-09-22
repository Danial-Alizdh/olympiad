/* imagesLoaded PACKAGED v4.1.4 */
!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return-1==n.indexOf(t)&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{};return(i[e]=i[e]||{})[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return-1!=n&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var s=i[o];n&&n[s]&&(this.off(e,s),delete n[s]),s.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(t,i){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(e){return i(t,e)}):"object"==typeof module&&module.exports?module.exports=i(t,require("ev-emitter")):t.imagesLoaded=i(t,t.EvEmitter)}("undefined"!=typeof window?window:this,function(t,e){function s(e,t){for(var i in t)e[i]=t[i];return e}function r(e,t,i){if(!(this instanceof r))return new r(e,t,i);var n,o=e;return"string"==typeof e&&(o=document.querySelectorAll(e)),o?(this.elements=(n=o,Array.isArray(n)?n:"object"==typeof n&&"number"==typeof n.length?d.call(n):[n]),this.options=s({},this.options),"function"==typeof t?i=t:s(this.options,t),i&&this.on("always",i),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(o||e))}function i(e){this.img=e}function n(e,t){this.url=e,this.element=t,this.img=new Image}var h=t.jQuery,a=t.console,d=Array.prototype.slice;(r.prototype=Object.create(e.prototype)).options={},r.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},r.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&m[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background)for(var s=e.querySelectorAll(this.options.background),n=0;n<s.length;n++){var r=s[n];this.addElementBackgroundImages(r)}}};var m={1:!0,9:!0,11:!0};return r.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},r.prototype.addImage=function(e){var t=new i(e);this.images.push(t)},r.prototype.addBackground=function(e,t){var i=new n(e,t);this.images.push(i)},r.prototype.check=function(){function t(e,t,i){setTimeout(function(){n.progress(e,t,i)})}var n=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},r.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},r.prototype.complete=function(){var e,t=this.hasAnyBroken?"fail":"done";this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred&&(e=this.hasAnyBroken?"reject":"resolve",this.jqDeferred[e](this))},(i.prototype=Object.create(e.prototype)).check=function(){return this.getIsImageComplete()?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},i.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},i.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},i.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},i.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},i.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},i.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},(n.prototype=Object.create(i.prototype)).check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},n.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},n.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},(r.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&((h=e).fn.imagesLoaded=function(e,t){return new r(this,e,t).jqDeferred.promise(h(this))})})(),r});

/* Isotope PACKAGED v3.0.6 */
!function(e,i){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("jquery")):e.jQueryBridget=i(e,e.jQuery)}(window,function(t,e){"use strict";function i(h,n,d){(d=d||e||t.jQuery)&&(n.prototype.option||(n.prototype.option=function(t){d.isPlainObject(t)&&(this.options=d.extend(!0,this.options,t))}),d.fn[h]=function(t){if("string"!=typeof t)return o=t,this.each(function(t,e){var i=d.data(e,h);i?(i.option(o),i._init()):(i=new n(e,o),d.data(e,h,i))}),this;var e,s,r,a,u,o,i=l.call(arguments,1);return r=i,u="$()."+h+'("'+(s=t)+'")',(e=this).each(function(t,e){var i,o,n=d.data(e,h);n?(i=n[s])&&"_"!=s.charAt(0)?(o=i.apply(n,r),a=void 0===a?o:a):c(u+" is not a valid method"):c(h+" not initialized. Cannot call methods, i.e. "+u)}),void 0!==a?a:e},o(d))}function o(t){!t||t&&t.bridget||(t.bridget=i)}var l=Array.prototype.slice,n=t.console,c=void 0===n?function(){}:function(t){n.error(t)};return o(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},o=i[t]=i[t]||[];return-1==o.indexOf(e)&&o.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var o=i.indexOf(e);return-1!=o&&i.splice(o,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var o=this._onceEvents&&this._onceEvents[t],n=0;n<i.length;n++){var s=i[n];o&&o[s]&&(this.off(t,s),delete o[s]),s.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function z(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}function I(t){var e=getComputedStyle(t);return e||i("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function x(t){if(L||(L=!0,(g=document.createElement("div")).style.width="200px",g.style.padding="1px 2px 3px 4px",g.style.borderStyle="solid",g.style.borderWidth="1px 2px 3px 4px",g.style.boxSizing="border-box",(v=document.body||document.documentElement).appendChild(g),_=I(g),S=200==Math.round(z(_.width)),x.isBoxSizeOuter=S,v.removeChild(g)),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var e=I(t);if("none"==e.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<E;e++){t[b[e]]=0}return t}();var i={};i.width=t.offsetWidth,i.height=t.offsetHeight;for(var o=i.isBorderBox="border-box"==e.boxSizing,n=0;n<E;n++){var s=b[n],r=e[s],a=parseFloat(r);i[s]=isNaN(a)?0:a}var u=i.paddingLeft+i.paddingRight,h=i.paddingTop+i.paddingBottom,d=i.marginLeft+i.marginRight,l=i.marginTop+i.marginBottom,c=i.borderLeftWidth+i.borderRightWidth,m=i.borderTopWidth+i.borderBottomWidth,f=o&&S,p=z(e.width);!1!==p&&(i.width=p+(f?0:u+c));var y=z(e.height);return!1!==y&&(i.height=y+(f?0:h+m)),i.innerWidth=i.width-(u+c),i.innerHeight=i.height-(h+m),i.outerWidth=i.width+d,i.outerHeight=i.height+l,i}var g,v,_}var S,i="undefined"==typeof console?function(){}:function(t){console.error(t)},b=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],E=b.length,L=!1;return x}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var i=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var o=e[i]+"MatchesSelector";if(t[o])return o}}();return function(t,e){return t[i](e)}}),function(e,i){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("desandro-matches-selector")):e.fizzyUIUtils=i(e,e.matchesSelector)}(window,function(h,s){var d={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e}},e=Array.prototype.slice;d.makeArray=function(t){return Array.isArray(t)?t:null==t?[]:"object"==typeof t&&"number"==typeof t.length?e.call(t):[t]},d.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},d.getParent=function(t,e){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,s(t,e))return t},d.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.filterFindElements=function(t,o){t=d.makeArray(t);var n=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!o)return void n.push(t);s(t,o)&&n.push(t);for(var e=t.querySelectorAll(o),i=0;i<e.length;i++)n.push(e[i])}}),n},d.debounceMethod=function(t,e,o){o=o||100;var n=t.prototype[e],s=e+"Timeout";t.prototype[e]=function(){var t=this[s];clearTimeout(t);var e=arguments,i=this;this[s]=setTimeout(function(){n.apply(i,e),delete i[s]},o)}},d.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},d.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var l=h.console;return d.htmlInit=function(a,u){d.docReady(function(){var t=d.toDashed(u),n="data-"+t,e=document.querySelectorAll("["+n+"]"),i=document.querySelectorAll(".js-"+t),o=d.makeArray(e).concat(d.makeArray(i)),s=n+"-options",r=h.jQuery;o.forEach(function(e){var t,i=e.getAttribute(n)||e.getAttribute(s);try{t=i&&JSON.parse(i)}catch(t){return void(l&&l.error("Error parsing "+n+" on "+e.className+": "+t))}var o=new a(e,t);r&&r.data(e,u,o)})})},d}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}var o=document.documentElement.style,n="string"==typeof o.transition?"transition":"WebkitTransition",s="string"==typeof o.transform?"transform":"WebkitTransform",r={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[n],a={transform:s,transition:n,transitionDuration:n+"Duration",transitionProperty:n+"Property",transitionDelay:n+"Delay"},u=i.prototype=Object.create(t.prototype);u.constructor=i,u._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},u.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},u.getSize=function(){this.size=e(this.element)},u.css=function(t){var e=this.element.style;for(var i in t){e[a[i]||i]=t[i]}},u.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),o=t[e?"left":"right"],n=t[i?"top":"bottom"],s=parseFloat(o),r=parseFloat(n),a=this.layout.size;-1!=o.indexOf("%")&&(s=s/100*a.width),-1!=n.indexOf("%")&&(r=r/100*a.height),s=isNaN(s)?0:s,r=isNaN(r)?0:r,s-=e?a.paddingLeft:a.paddingRight,r-=i?a.paddingTop:a.paddingBottom,this.position.x=s,this.position.y=r},u.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),o=this.layout._getOption("originTop"),n=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[n];e[s]=this.getXValue(a),e[r]="";var u=o?"paddingTop":"paddingBottom",h=o?"top":"bottom",d=o?"bottom":"top",l=this.position.y+t[u];e[h]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},u.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},u.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},u._transitionTo=function(t,e){this.getPosition();var i,o,n,s=this.position.x,r=this.position.y,a=t==this.position.x&&e==this.position.y;this.setPosition(t,e),!a||this.isTransitioning?(i=t-s,o=e-r,(n={}).transform=this.getTranslate(i,o),this.transition({to:n,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})):this.layoutPosition()},u.getTranslate=function(t,e){return"translate3d("+(t=this.layout._getOption("originLeft")?t:-t)+"px, "+(e=this.layout._getOption("originTop")?e:-e)+"px, 0)"},u.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},u.moveTo=u._transitionTo,u.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},u._nonTransition=function(t){for(var e in this.css(t.to),t.isCleaning&&this._removeStyles(t.to),t.onTransitionEnd)t.onTransitionEnd[e].call(this)},u.transition=function(t){if(parseFloat(this.layout.options.transitionDuration)){var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);t.from&&(this.css(t.from),this.element.offsetHeight,0),this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0}else this._nonTransition(t)};var h="opacity,"+s.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()});u.enableTransition=function(){var t;this.isTransitioning||(t="number"==typeof(t=this.layout.options.transitionDuration)?t+"ms":t,this.css({transitionProperty:h,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(r,this,!1))},u.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},u.onotransitionend=function(t){this.ontransitionend(t)};var d={"-webkit-transform":"transform"};u.ontransitionend=function(t){var e,i;t.target===this.element&&(e=this._transn,i=d[t.propertyName]||t.propertyName,delete e.ingProperties[i],function(t){for(var e in t)return;return 1}(e.ingProperties)&&this.disableTransition(),i in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[i]),i in e.onEnd&&(e.onEnd[i].call(this),delete e.onEnd[i]),this.emitEvent("transitionEnd",[this]))},u.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(r,this,!1),this.isTransitioning=!1},u._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var l={transitionProperty:"",transitionDuration:"",transitionDelay:""};return u.removeTransitionStyles=function(){this.css(l)},u.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},u.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},u.remove=function(){return n&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},u.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("visibleStyle")]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},u.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},u.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},u.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={};e[this.getHideRevealTransitionEndProperty("hiddenStyle")]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},u.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},u.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},i}),function(n,s){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(t,e,i,o){return s(n,t,e,i,o)}):"object"==typeof module&&module.exports?module.exports=s(n,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):n.Outlayer=s(n,n.EvEmitter,n.getSize,n.fizzyUIUtils,n.Outlayer.Item)}(window,function(t,e,n,s,o){"use strict";function r(t,e){var i,o=s.getQueryElement(t);o?(this.element=o,h&&(this.$element=h(this.element)),this.options=s.extend({},this.constructor.defaults),this.option(e),i=++d,this.element.outlayerGUID=i,(l[i]=this)._create(),this._getOption("initLayout")&&this.layout()):u&&u.error("Bad element for "+this.constructor.namespace+": "+(o||t))}function a(t){function e(){t.apply(this,arguments)}return(e.prototype=Object.create(t.prototype)).constructor=e}function i(){}var u=t.console,h=t.jQuery,d=0,l={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var c=r.prototype;s.extend(c,e.prototype),c.option=function(t){s.extend(this.options,t)},c._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},c._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),s.extend(this.element.style,this.options.containerStyle),this._getOption("resize")&&this.bindResize()},c.reloadItems=function(){this.items=this._itemize(this.element.children)},c._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,o=[],n=0;n<e.length;n++){var s=new i(e[n],this);o.push(s)}return o},c._filterFindItemElements=function(t){return s.filterFindElements(t,this.options.itemSelector)},c.getItemElements=function(){return this.items.map(function(t){return t.element})},c.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},c._init=c.layout,c._resetLayout=function(){this.getSize()},c.getSize=function(){this.size=n(this.element)},c._getMeasurement=function(t,e){var i,o=this.options[t];o?("string"==typeof o?i=this.element.querySelector(o):o instanceof HTMLElement&&(i=o),this[t]=i?n(i)[e]:o):this[t]=0},c.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},c._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},c._layoutItems=function(t,i){var o;this._emitCompleteOnItems("layout",t),t&&t.length&&(o=[],t.forEach(function(t){var e=this._getItemLayoutPosition(t);e.item=t,e.isInstant=i||t.isLayoutInstant,o.push(e)},this),this._processLayoutQueue(o))},c._getItemLayoutPosition=function(){return{x:0,y:0}},c._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},c.updateStagger=function(){var t=this.options.stagger;return null==t?void(this.stagger=0):(this.stagger=function(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],o=e&&e[2];return i.length?(i=parseFloat(i))*(m[o]||1):0}(t),this.stagger)},c._positionItem=function(t,e,i,o,n){o?t.goTo(e,i):(t.stagger(n*this.stagger),t.moveTo(e,i))},c._postLayout=function(){this.resizeContainer()},c.resizeContainer=function(){var t;!this._getOption("resizeContainer")||(t=this._getContainerSize())&&(this._setContainerMeasure(t.width,!0),this._setContainerMeasure(t.height,!1))},c._getContainerSize=i,c._setContainerMeasure=function(t,e){var i;void 0!==t&&((i=this.size).isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px")},c._emitCompleteOnItems=function(e,t){function i(){s.dispatchEvent(e+"Complete",null,[t])}function o(){++n==r&&i()}var n,s=this,r=t.length;t&&r?(n=0,t.forEach(function(t){t.once(e,o)})):i()},c.dispatchEvent=function(t,e,i){var o,n=e?[e].concat(i):i;this.emitEvent(t,n),h&&(this.$element=this.$element||h(this.element),e?((o=h.Event(e)).type=t,this.$element.trigger(o,i)):this.$element.trigger(t,i))},c.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},c.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},c.stamp=function(t){(t=this._find(t))&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},c.unstamp=function(t){(t=this._find(t))&&t.forEach(function(t){s.removeFrom(this.stamps,t),this.unignore(t)},this)},c._find=function(t){if(t)return"string"==typeof t&&(t=this.element.querySelectorAll(t)),s.makeArray(t)},c._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},c._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},c._manageStamp=i,c._getElementOffset=function(t){var e=t.getBoundingClientRect(),i=this._boundingRect,o=n(t);return{left:e.left-i.left-o.marginLeft,top:e.top-i.top-o.marginTop,right:i.right-e.right-o.marginRight,bottom:i.bottom-e.bottom-o.marginBottom}},c.handleEvent=s.handleEvent,c.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},c.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},c.onresize=function(){this.resize()},s.debounceMethod(r,"onresize",100),c.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},c.needsResizeLayout=function(){var t=n(this.element);return this.size&&t&&t.innerWidth!==this.size.innerWidth},c.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},c.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},c.prepended=function(t){var e,i=this._itemize(t);i.length&&(e=this.items.slice(0),this.items=i.concat(e),this._resetLayout(),this._manageStamps(),this.layoutItems(i,!0),this.reveal(i),this.layoutItems(e))},c.reveal=function(t){var i;this._emitCompleteOnItems("reveal",t),t&&t.length&&(i=this.updateStagger(),t.forEach(function(t,e){t.stagger(e*i),t.reveal()}))},c.hide=function(t){var i;this._emitCompleteOnItems("hide",t),t&&t.length&&(i=this.updateStagger(),t.forEach(function(t,e){t.stagger(e*i),t.hide()}))},c.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},c.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},c.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},c.getItems=function(t){t=s.makeArray(t);var i=[];return t.forEach(function(t){var e=this.getItem(t);e&&i.push(e)},this),i},c.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),s.removeFrom(this.items,t)},this)},c.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete l[e],delete this.element.outlayerGUID,h&&h.removeData(this.element,this.constructor.namespace)},r.data=function(t){var e=(t=s.getQueryElement(t))&&t.outlayerGUID;return e&&l[e]},r.create=function(t,e){var i=a(r);return i.defaults=s.extend({},r.defaults),s.extend(i.defaults,e),i.compatOptions=s.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=a(o),s.htmlInit(i,t),h&&h.bridget&&h.bridget(t,i),i};var m={ms:1,s:1e3};return r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/item",["outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.Item=e(t.Outlayer))}(window,function(t){"use strict";function e(){t.Item.apply(this,arguments)}var i=e.prototype=Object.create(t.Item.prototype),o=i._create;i._create=function(){this.id=this.layout.itemGUID++,o.call(this),this.sortData={}},i.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var t=this.layout.options.getSortData,e=this.layout._sorters;for(var i in t){var o=e[i];this.sortData[i]=o(this.element,this)}}};var n=i.destroy;return i.destroy=function(){n.apply(this,arguments),this.css({display:""})},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-mode",["get-size/get-size","outlayer/outlayer"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer")):(t.Isotope=t.Isotope||{},t.Isotope.LayoutMode=e(t.getSize,t.Outlayer))}(window,function(e,i){"use strict";function o(t){(this.isotope=t)&&(this.options=t.options[this.namespace],this.element=t.element,this.items=t.filteredItems,this.size=t.size)}var n=o.prototype;return["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"].forEach(function(t){n[t]=function(){return i.prototype[t].apply(this.isotope,arguments)}}),n.needsVerticalResizeLayout=function(){var t=e(this.isotope.element);return this.isotope.size&&t&&t.innerHeight!=this.isotope.size.innerHeight},n._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},n.getColumnWidth=function(){this.getSegmentSize("column","Width")},n.getRowHeight=function(){this.getSegmentSize("row","Height")},n.getSegmentSize=function(t,e){var i,o=t+e,n="outer"+e;this._getMeasurement(o,n),this[o]||(i=this.getFirstItemSize(),this[o]=i&&i[n]||this.isotope.size["inner"+e])},n.getFirstItemSize=function(){var t=this.isotope.filteredItems[0];return t&&t.element&&e(t.element)},n.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},n.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},o.modes={},o.create=function(t,e){function i(){o.apply(this,arguments)}return(i.prototype=Object.create(n)).constructor=i,e&&(i.options=e),o.modes[i.prototype.namespace=t]=i},o}),function(t,e){"function"==typeof define&&define.amd?define("masonry-layout/masonry",["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,h){var e=t.create("masonry");e.compatOptions.fitWidth="isFitWidth";var i=e.prototype;return i._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},i.measureColumns=function(){var t,e;this.getContainerWidth(),this.columnWidth||(e=(t=this.items[0])&&t.element,this.columnWidth=e&&h(e).outerWidth||this.containerWidth);var i=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,n=o/i,s=i-o%i,n=Math[s&&s<1?"round":"floor"](n);this.cols=Math.max(n,1)},i.getContainerWidth=function(){var t=this._getOption("fitWidth")?this.element.parentNode:this.element,e=h(t);this.containerWidth=e&&e.innerWidth},i._getItemLayoutPosition=function(t){t.getSize();for(var e=t.size.outerWidth%this.columnWidth,i=Math[e&&e<1?"round":"ceil"](t.size.outerWidth/this.columnWidth),i=Math.min(i,this.cols),o=this[this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition"](i,t),n={x:this.columnWidth*o.col,y:o.y},s=o.y+t.size.outerHeight,r=i+o.col,a=o.col;a<r;a++)this.colYs[a]=s;return n},i._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},i._getTopColGroup=function(t){if(t<2)return this.colYs;for(var e=[],i=this.cols+1-t,o=0;o<i;o++)e[o]=this._getColGroupY(o,t);return e},i._getColGroupY=function(t,e){if(e<2)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},i._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,i=1<t&&i+t>this.cols?0:i,o=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=o?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},i._manageStamp=function(t){var e=h(t),i=this._getElementOffset(t),o=this._getOption("originLeft")?i.left:i.right,n=o+e.outerWidth,s=Math.floor(o/this.columnWidth),s=Math.max(0,s),r=Math.floor(n/this.columnWidth);r-=n%this.columnWidth?0:1,r=Math.min(this.cols-1,r);for(var a=(this._getOption("originTop")?i.top:i.bottom)+e.outerHeight,u=s;u<=r;u++)this.colYs[u]=Math.max(a,this.colYs[u])},i._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},i._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},i.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/masonry",["../layout-mode","masonry-layout/masonry"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode"),require("masonry-layout")):e(t.Isotope.LayoutMode,t.Masonry)}(window,function(t,e){"use strict";var i=t.create("masonry"),o=i.prototype,n={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var s in e.prototype)n[s]||(o[s]=e.prototype[s]);var r=o.measureColumns;o.measureColumns=function(){this.items=this.isotope.filteredItems,r.call(this)};var a=o._getOption;return o._getOption=function(t){return"fitWidth"==t?void 0!==this.options.isFitWidth?this.options.isFitWidth:this.options.fitWidth:a.apply(this.isotope,arguments)},i}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/fit-rows",["../layout-mode"],e):"object"==typeof exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("fitRows"),i=e.prototype;return i._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},i._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth+this.gutter,i=this.isotope.size.innerWidth+this.gutter;0!==this.x&&e+this.x>i&&(this.x=0,this.y=this.maxY);var o={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+t.size.outerHeight),this.x+=e,o},i._getContainerSize=function(){return{height:this.maxY}},e}),function(t,e){"function"==typeof define&&define.amd?define("isotope-layout/js/layout-modes/vertical",["../layout-mode"],e):"object"==typeof module&&module.exports?module.exports=e(require("../layout-mode")):e(t.Isotope.LayoutMode)}(window,function(t){"use strict";var e=t.create("vertical",{horizontalAlignment:0}),i=e.prototype;return i._resetLayout=function(){this.y=0},i._getItemLayoutPosition=function(t){t.getSize();var e=(this.isotope.size.innerWidth-t.size.outerWidth)*this.options.horizontalAlignment,i=this.y;return this.y+=t.size.outerHeight,{x:e,y:i}},i._getContainerSize=function(){return{height:this.y}},e}),function(r,a){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","isotope-layout/js/item","isotope-layout/js/layout-mode","isotope-layout/js/layout-modes/masonry","isotope-layout/js/layout-modes/fit-rows","isotope-layout/js/layout-modes/vertical"],function(t,e,i,o,n,s){return a(r,t,0,i,o,n,s)}):"object"==typeof module&&module.exports?module.exports=a(r,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("isotope-layout/js/item"),require("isotope-layout/js/layout-mode"),require("isotope-layout/js/layout-modes/masonry"),require("isotope-layout/js/layout-modes/fit-rows"),require("isotope-layout/js/layout-modes/vertical")):r.Isotope=a(r,r.Outlayer,r.getSize,r.matchesSelector,r.fizzyUIUtils,r.Isotope.Item,r.Isotope.LayoutMode)}(window,function(t,i,e,o,s,n,r){var a=t.jQuery,h=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^\s+|\s+$/g,"")},d=i.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});d.Item=n,d.LayoutMode=r;var u=d.prototype;u._create=function(){for(var t in this.itemGUID=0,this._sorters={},this._getSorters(),i.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"],r.modes)this._initLayoutMode(t)},u.reloadItems=function(){this.itemGUID=0,i.prototype.reloadItems.call(this)},u._itemize=function(){for(var t=i.prototype._itemize.apply(this,arguments),e=0;e<t.length;e++){t[e].id=this.itemGUID++}return this._updateItemsSortData(t),t},u._initLayoutMode=function(t){var e=r.modes[t],i=this.options[t]||{};this.options[t]=e.options?s.extend(e.options,i):i,this.modes[t]=new e(this)},u.layout=function(){return!this._isLayoutInited&&this._getOption("initLayout")?void this.arrange():void this._layout()},u._layout=function(){var t=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,t),this._isLayoutInited=!0},u.arrange=function(t){this.option(t),this._getIsInstant();var e=this._filter(this.items);this.filteredItems=e.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[e]):this._hideReveal(e),this._sort(),this._layout()},u._init=u.arrange,u._hideReveal=function(t){this.reveal(t.needReveal),this.hide(t.needHide)},u._getIsInstant=function(){var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;return this._isInstant=e},u._bindArrangeComplete=function(){function t(){e&&i&&o&&n.dispatchEvent("arrangeComplete",null,[n.filteredItems])}var e,i,o,n=this;this.once("layoutComplete",function(){e=!0,t()}),this.once("hideComplete",function(){i=!0,t()}),this.once("revealComplete",function(){o=!0,t()})},u._filter=function(t){for(var e=(e=this.options.filter)||"*",i=[],o=[],n=[],s=this._getFilterTest(e),r=0;r<t.length;r++){var a,u=t[r];u.isIgnored||((a=s(u))&&i.push(u),a&&u.isHidden?o.push(u):a||u.isHidden||n.push(u))}return{matches:i,needReveal:o,needHide:n}},u._getFilterTest=function(e){return a&&this.options.isJQueryFiltering?function(t){return a(t.element).is(e)}:"function"==typeof e?function(t){return e(t.element)}:function(t){return o(t.element,e)}},u.updateSortData=function(t){var e=t?(t=s.makeArray(t),this.getItems(t)):this.items;this._getSorters(),this._updateItemsSortData(e)},u._getSorters=function(){var t=this.options.getSortData;for(var e in t){var i=t[e];this._sorters[e]=l(i)}},u._updateItemsSortData=function(t){for(var e=t&&t.length,i=0;e&&i<e;i++){t[i].updateSortData()}};var l=function(t){if("string"!=typeof t)return t;var e,i,o=h(t).split(" "),n=o[0],s=n.match(/^\[(.+)\]$/),r=s&&s[1],a=(i=n,(e=r)?function(t){return t.getAttribute(e)}:function(t){var e=t.querySelector(i);return e&&e.textContent}),u=d.sortDataParsers[o[1]];return u?function(t){return t&&u(a(t))}:function(t){return t&&a(t)}};d.sortDataParsers={parseInt:function(t){return parseInt(t,10)},parseFloat:function(t){return parseFloat(t)}},u._sort=function(){var t,e,r,a;this.options.sortBy&&(t=s.makeArray(this.options.sortBy),this._getIsSameSortBy(t)||(this.sortHistory=t.concat(this.sortHistory)),r=this.sortHistory,a=this.options.sortAscending,e=function(t,e){for(var i=0;i<r.length;i++){var o=r[i],n=t.sortData[o],s=e.sortData[o];if(s<n||n<s)return(s<n?1:-1)*((void 0!==a[o]?a[o]:a)?1:-1)}return 0},this.filteredItems.sort(e))},u._getIsSameSortBy=function(t){for(var e=0;e<t.length;e++)if(t[e]!=this.sortHistory[e])return!1;return!0},u._mode=function(){var t=this.options.layoutMode,e=this.modes[t];if(!e)throw new Error("No layout mode: "+t);return e.options=this.options[t],e},u._resetLayout=function(){i.prototype._resetLayout.call(this),this._mode()._resetLayout()},u._getItemLayoutPosition=function(t){return this._mode()._getItemLayoutPosition(t)},u._manageStamp=function(t){this._mode()._manageStamp(t)},u._getContainerSize=function(){return this._mode()._getContainerSize()},u.needsResizeLayout=function(){return this._mode().needsResizeLayout()},u.appended=function(t){var e,i=this.addItems(t);i.length&&(e=this._filterRevealAdded(i),this.filteredItems=this.filteredItems.concat(e))},u.prepended=function(t){var e,i=this._itemize(t);i.length&&(this._resetLayout(),this._manageStamps(),e=this._filterRevealAdded(i),this.layoutItems(this.filteredItems),this.filteredItems=e.concat(this.filteredItems),this.items=i.concat(this.items))},u._filterRevealAdded=function(t){var e=this._filter(t);return this.hide(e.needHide),this.reveal(e.matches),this.layoutItems(e.matches,!0),e.matches},u.insert=function(t){var e=this.addItems(t);if(e.length){for(var i,o=e.length,n=0;n<o;n++)i=e[n],this.element.appendChild(i.element);var s=this._filter(e).matches;for(n=0;n<o;n++)e[n].isLayoutInstant=!0;for(this.arrange(),n=0;n<o;n++)delete e[n].isLayoutInstant;this.reveal(s)}};var c=u.remove;return u.remove=function(t){t=s.makeArray(t);var e=this.getItems(t);c.call(this,t);for(var i=e&&e.length,o=0;i&&o<i;o++){var n=e[o];s.removeFrom(this.filteredItems,n)}},u.shuffle=function(){for(var t=0;t<this.items.length;t++){this.items[t].sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},u._noTransition=function(t,e){var i=this.options.transitionDuration;this.options.transitionDuration=0;var o=t.apply(this,e);return this.options.transitionDuration=i,o},u.getFilteredItemElements=function(){return this.filteredItems.map(function(t){return t.element})},d});

/* jPictura v1.2.3, Core v0.1.4 */
var jpictura={core:{}};jpictura.core.debounce=function(a,n,o){var r;return function(){var t=this,e=arguments,i=o&&!r;clearTimeout(r),r=setTimeout(function(){r=null,o||a.apply(t,e)},n),i&&a.apply(t,e)}},jpictura.core.offWindowWidthResize=function(t){jQuery(window).off("."+t)},jpictura.core.onWindowWidthResize=function(t,e){var i=jQuery(window),a=i.width();i.on("resize."+t,function(){var t=i.width();a!==t&&(e(),a=t)})},jpictura.core.heightCalculator=function(t,e,i){function a(t){var e,i,a,n,o,r;n=t,o=h.layout.idealRowHeight,r=h.layout.maxWidthHeightRatio,l=n/(n/o+r),e=t,i=h.layout.idealRowHeight,a=h.layout.maxWidthHeightRatio,u=e<=a*i?(h.debug&&c("The max width/height ratio "+a+" is too big for row width "+e+"px."),e*a):e/((e+0)/i-a),s()}function s(){o=(l+u)/2}var l,u,o,c=e,r=t,h=i;this.getHeight=function(t,e){if(0===t.length)return 0;a(e);var i=function(t,e){for(var i,a,n=0;e<(i=r(t,o,!1,h))?u=o:l=o,s(),a=e<i?!0:!1,e-i>h.algorithm.epsilon&&(a=!0),++n>=h.algorithm.maxIterationCount&&(a=!1),a;);return n>=h.algorithm.maxIterationCount&&h.debug&&c("Max "+n+" iterations reached. Current precision: "+(e-i)+"."),o}(t,e);return function(t,e,i){for(t=Math.floor(t);r(e,t,!0,h)<i&&t++;);return t}(i,t,e)}},function(f){function i(t,e){t.addClass(e.classes.container),t.toggleClass("stretch-images",e.layout.stretchImages),t.toggleClass("center-images",e.layout.centerImages),t.toggleClass("disable-cropping-images",!e.layout.allowCropping),t.toggleClass("fade-in-items",e.effects.fadeInItems);var i,a,n,o,r=t.find(e.selectors.item);r.addClass(e.classes.item),r.find(e.selectors.image).addClass(e.classes.image),i=t,a=r,o=s,(n=e).waitForImages?function(o,r,s,l){function a(t,e){var i,a,n=e.width/e.height;i=n,a=c+"-ratio",t.data(a,i),++u===r.size()&&l(o,r,s)}var u=0;r.each(function(){var t=f(this),e=t.find(s.selectors.image),i=new Image;i.src=e.attr("src"),f(i).load(function(){a(t,i)})})}(i,a,n,o):o(i,a,n)}function s(t,e,i){var a=jpictura.core.debounce(function(){!function(t,e,i){m(t,0);var a,n=(new Date).getTime(),o=0,r=[];do{e.addClass(i.classes.invisible),e.addClass(i.classes.hidden);var s=y(t);r.push(s);var l,u,c=!1;3<=r.length&&(l=r[r.length-3],(u=r[r.length-2])<l&&l===s&&(s=u,c=!0)),function(t,e,o){var r=[],s=t-2*o.layout.rowPadding,l=new o.heightCalculator(W,R,o);e.each(function(){var t,e,i,a,n=f(this);0===r.length||((t=r.slice(0)).push(n),p(t,s,o)&&(e=w(r,s,l,o),i=w(t,s,l,o),a=f.fn.jpictura.evaluate(e,o),f.fn.jpictura.evaluate(i,o)<a||(v(r,s,e,!1,o),r=[]))),r.push(n)});var i=p(r,s,o)||o.layout.justifyLastRow?w(r,s,l,o):o.layout.idealRowHeight;v(r,s,i,!0,o)}(Math.floor(s),e,i);var h,d=y(t);r.push(d),a=!1,s!==d&&(h=r[r.length-2],a=!c||h!==d)}while(a&&++o<=10);var g=(new Date).getTime();10<o&&i.debug?R("Max redraw tries of 10reached. Gallery redraw failed."):i.debug&&R("Gallery redrawn in "+(g-n)+" milliseconds."),m(t,null)}(t,e,i)},i.responsive.debounce);(function(e,i,t){jpictura.core.offWindowWidthResize(c),t.responsive.enabled&&t.responsive.onWindowWidthResize&&jpictura.core.onWindowWidthResize(c,e);var a=c+"-resize-interval",n=i.data(a);{var o;clearInterval(n),i.data(a,null),t.responsive.enabled&&t.responsive.onContainerWidthResize&&(o=y(i),n=setInterval(function(){var t=y(i);t!==o&&(o=t,e())},t.responsive.containerResizeInterval),i.data(a,n))}})(a,t,i),a()}function m(t,e){t.data(c+"-redraw-progress",e)}function p(t,e,i){for(var a=(t.length-1)*i.layout.itemSpacing,n=0;n<t.length;n++)a+=b(t[n],i.layout.idealRowHeight,i);return e<a}function w(t,e,i,a){var n=I(t,e,a);return i.getHeight(t,n)}function v(t,e,i,a,n){for(var o,r,s,l,u,c,h,d,g,f,m,p,w=W(t,i,!0,n),v=I(t,e,n),y={row:t,width:e,height:i,isLastRow:a,itemsSpaceWidth:v,itemsWidthDelta:w-v,unassignedItemsWidthDelta:w-v},R=(m=n,(p=t.slice(0)).sort(function(t,e){return j(e,!0,m)-j(t,!0,m)}),p),C=0;C<R.length;C++)o=R[C],s=n,0,l=(r=y).row,u=r.isLastRow,c=o===l[0],h=o===l[l.length-1],d=function(t,e,i){var a=b(t,e.height,i),n=function(t,e){if(e.unassignedItemsWidthDelta<=0)return 0;var i=Math.ceil(t/e.itemsSpaceWidth*e.itemsWidthDelta);return e.unassignedItemsWidthDelta<i&&(i=e.unassignedItemsWidthDelta),e.unassignedItemsWidthDelta-=i,i}(a,e);return Math.floor(a)-n}(o,r,s),g=r.height,f=o.find(s.selectors.image),function(t,e,i){t.width(e),t.height(i)}(o,d,g),function(t,e){t.removeClass(e.classes.invisible),t.removeClass(e.classes.hidden)}(o,s),function(t,e,i,a,n){t.toggleClass(n.classes.lastRow,e),t.toggleClass(n.classes.firstInRow,i),t.toggleClass(n.classes.lastInRow,a)}(o,u,c,h,s),function(t,e,i,a){var n={left:"",right:""};a.layout.applyRowPadding&&(n.left=(e?a.layout.rowPadding:0)+"px",n.right=(i?a.layout.rowPadding:0)+"px"),t.css("margin-left",n.left),t.css("margin-right",n.right)}(o,c,h,s),function(t,e,i,a){var n={right:"",bottom:""};a.layout.applyItemSpacing&&(n.right=(e?0:a.layout.itemSpacing)+"px",n.bottom=(i?0:a.layout.itemSpacing)+"px"),t.css("margin-right",n.right),t.css("margin-bottom",n.bottom)}(o,h,u,s),function(t,e,i,a){var n=j(t,!1,a)*i;t.toggleClass("stretch-by-height",e<=n),t.toggleClass("stretch-by-width",n<e);var o=function(t,e,i){return Math.abs(t-e)>i.layout.croppingEpsilon}(n,e,a);t.toggleClass("cropped-if-stretched",o)}(o,d,g,s),function(t,e,i){t.toggleClass("horizontal-misfit",function(t,e){return 1<Math.abs(t.width()-e)}(t,e)),t.toggleClass("vertical-misfit",function(t,e){return 1<Math.abs(t.height()-e)}(t,i))}(f,d,g)}function W(t,e,i,a){for(var n=0,o=0;o<t.length;o++){var r=b(t[o],e,a);i&&(r=Math.floor(r)),n+=r}return n}function I(t,e,i){return e-(t.length-1)*i.layout.itemSpacing}function b(t,e,i){return j(t,!0,i)*e}function j(t,e,i){var a,n,o,r,s=c+"-ratio",l=t.data(s);if(void 0===l&&(o=function(t,e){var i=c+"-width",a=t.data(i);{var n;void 0===a&&(n=t.find(e.selectors.image),a=n.prop("naturalWidth"),t.data(i,a))}return a}(a=t,n=i),r=function(t,e){var i=c+"-height",a=t.data(i);{var n;void 0===a&&(n=t.find(e.selectors.image),a=n.prop("naturalHeight"),t.data(i,a))}return a}(a,n),l=o/r,t.data(s,l)),e){if(l<=i.layout.minWidthHeightRatio)return i.layout.minWidthHeightRatio;if(l>=i.layout.maxWidthHeightRatio)return i.layout.maxWidthHeightRatio}return l}function y(t){return parseFloat(window.getComputedStyle(t[0],null).getPropertyValue("width"))}function R(t){window.console&&console.log(e+": "+t)}f.fn.jpictura=function(t){var e=f.extend(!0,{},f.fn.jpictura.defaults,t);return this.each(function(){i(f(this),e)}),this};var e="jPictura",c=e.toLowerCase();f.fn.jpictura.defaults={selectors:{item:".item",image:"img"},classes:{container:c,item:c+"-item",image:c+"-image",lastRow:c+"-last-row",firstInRow:c+"-first-in-row",lastInRow:c+"-last-in-row",invisible:c+"-invisible",hidden:c+"-hidden",offContentFlow:c+"-off-content-flow"},layout:{rowPadding:0,applyRowPadding:!0,itemSpacing:5,applyItemSpacing:!0,idealRowHeight:180,minWidthHeightRatio:1/3,maxWidthHeightRatio:3,stretchImages:!0,allowCropping:!0,croppingEpsilon:3,centerImages:!0,justifyLastRow:!1},effects:{fadeInItems:!1},responsive:{enabled:!0,onWindowWidthResize:!0,onContainerWidthResize:!0,containerResizeInterval:50,debounce:200},waitForImages:!0,heightCalculator:jpictura.core.heightCalculator,algorithm:{epsilon:.01,maxIterationCount:50},debug:!1},f.fn.jpictura.evaluate=function(t,e){return Math.abs(t-e.layout.idealRowHeight)}}(jQuery);

/* Grid */
! function( $ ) {

	Codevz_Plus.grid = function( wpb ) {

		$( '.cz_grid' ).not( '.slick, .slick .cz_grid' ).codevzPlus( 'grid', function( x ) {

			var gridAnimation = function() {

				var animation = x.attr( 'data-animation' ), items;

				if ( animation ) {

					$( window ).on( 'scroll.grid_animation', function() {

						x.find( '.cz_grid_item:not(.' + animation + ')' ).each( function( i ) {

							var en = $( this ), i = i + 1;

							if ( ! en.hasClass( animation ) && Codevz_Plus.inview( en, 10 ) ) {

								setTimeout(function() {
									en.addClass( animation );
								}, 200 * i );

							}

						});

					}).trigger( 'scroll.grid_animation' );

				}

			};

			// Exclude pagination
			x.find( '.cz_no_grid' ).insertAfter( x );

			// Filters count
			x.prev( '.cz_grid_filters_count' ).find( 'li' ).each( function( i ) {
				var en = $( this ),
					cl = en.data( 'filter' ),
					lt = x.find( cl ).not( '.cz_grid_first, .cz_no_count' ).length;

				if ( ! en.find( 'span' ).length ) {
					en.append( '<span>' + lt + '</span>' );
				} else {
					en.find( 'span' ).html( lt );
				}
			});

			// Justified
			if ( x.hasClass( 'cz_justified' ) ) {

				// Fix items gap
				x.css( 'margin', 0 ).find( '.cz_grid_item > div' ).css( 'margin', 0 );

				var jpictura = {
					selectors: {
						item: '.cz_grid_item',
						image: 'img'
					},
					classes: {
						container: 'cz_justified_con',
						item: 'cz_justified_item',
						image: 'cz_justified_img',
						lastRow: 'cz_justified_last_row',
						firstInRow: 'cz_justified_first',
						lastInRow: 'cz_justified_last',
						invisible: 'cz_justified_invisible',
						hidden: 'cz_justified_hidden',
						offContentFlow: 'cz_justified_off_content_flow'
					},
					layout: {
						rowPadding: 0,
						applyRowPadding: true,
						itemSpacing: parseInt( x.data( 'gap' ) ) || 0,
						applyItemSpacing: true,
						idealRowHeight: parseInt( x.data( 'height' ) ) || 300,
						minWidthHeightRatio: 1 / 3,
						maxWidthHeightRatio: 3,
						stretchImages: true,
						allowCropping: true,
						croppingEpsilon: 3,
						centerImages: true,
						justifyLastRow: true
					},
					effects: {
						fadeInItems: false
					},
					responsive: {
						enabled: true,
						onWindowWidthResize: true,
						onContainerWidthResize: true,
						containerResizeInterval: 50,
						debounce: 200
					},
					waitForImages: true,
					//heightCalculator: jpictura.heightCalculator,
					algorithm: {
						epsilon: 0.01,
						maxIterationCount: 50
					},
					debug: false
				};

				x.jpictura( jpictura );

				// Scroll fix lazyload.
				setTimeout( function() {
					$( window ).trigger( 'scroll.lazyload' );
				}, 500 );

				// Justified Filters
				x.prev( 'ul' ).find( 'li' ).off().on( 'click', function() {
					$( this ).addClass( 'cz_active_filter' ).siblings().removeClass();
					var cFilter = $( this ).attr( 'data-filter' );
					$( cFilter, x ).animate({opacity: '1'});
					$( '.cz_grid_item', x ).not( cFilter ).animate({opacity: '0.1'});

					$( window ).trigger( 'resize' );
				});

			} else {

				// Fix custom masonry element.
				x.find( '> *' ).addClass( 'cz_grid_item' );

				// Fix gallery in offcanvas.
				if ( x.closest( '.offcanvas_area' ).length && ! x.closest( '.active_offcanvas' ).length ) {
					return;
				}

				// Isotope process
				var qsRegex,
					qsTime,
					$isotope = x.isotope({
						itemSelector: '.cz_grid_item',
						percentPosition: true,
						originLeft: ( $( 'body' ).hasClass( 'rtl' ) ? false : true )
					});

				// Search in gallery
				if ( x.data( 'search' ) ) {

					x.find( '.cz_grid_search' ).remove();

					x.prev( 'ul' ).append( '<input type="text" class="cz_grid_search" placeholder="' + x.data( 'search' ) + '" />' );

					var $quicksearch = $( '.cz_grid_search' ).on( 'keyup', function() {
						clearTimeout( qsTime );
						qsTime = setTimeout(function() {
							var val = $quicksearch.val();

							qsRegex = new RegExp( val, 'gi' );
							$isotope.isotope({
								filter: function() {
									return qsRegex ? $( this ).text().match( qsRegex ) : true;
								}
							});

							if ( ! val ) {
								x.prev( 'ul' ).find( 'li' ).removeClass( 'cz_active_filter' ).parent().find( 'li:first-child' ).addClass( 'cz_active_filter' );
							} else {
								x.prev( 'ul' ).find( 'li' ).removeClass( 'cz_active_filter' );
							}

							setTimeout(function() {
								$( window ).trigger( 'scroll.lazyload' );
								$( window ).trigger( 'scroll.grid_animation' );
							}, 500 );
						}, 200 );
					});

					x.data( 'search', false );

				}

				setTimeout( function() {
					$isotope.isotope( 'layout' );
				}, 1000 );

				// Images loaded re-layout
				$isotope.imagesLoaded( function() {
					$isotope.isotope( 'layout' );
				});

				$( 'body' ).on( 'click', '.vc_tta-tabs-list, .vc_tta-panel-title', function() {

					setTimeout( function() {
						$isotope.isotope( 'layout' );
					}, 250 );

				});

				// Fix gallery in tab and accordion
				if ( x.closest( '.cz_tab' ).length ) {
					setTimeout(function() {
						$( '.cz_tab_a, .cz_acc_child' ).on( 'click', function() {
							$isotope.isotope( 'layout' );
						});
					}, 1000 );
				}

				// Isotope Filters
				x.prev( 'ul' ).find( 'li' ).off().on( 'click', function() {

					$( this ).addClass( 'cz_active_filter' ).siblings().removeClass( 'cz_active_filter' );

					$isotope.find( '.cz_grid_item' ).removeClass(function( i, c ) {
						return (c.match(/(^|\s)cz_grid_anim_\S+/g) || []).join( ' ' );
					});

					x.removeAttr( 'data-animation' );

					var cFilter = $( this ).attr( 'data-filter' );
					$isotope.isotope({ filter: cFilter });

					setTimeout(function() {
						//gridAnimation( cFilter );
						$( window ).trigger( 'scroll.lazyload' );
					}, 1000 );

				});
			}

			// Loadmore
			if ( $( '.cz_ajax_loadmore a, .cz_ajax_infinite a' ).length ) {
				$( '.cz_ajax_pagination a' ).off().on( 'click', function(e) {

					var diz = $( this ),
						par = diz.parent(),
						prv = par.prev( '.cz_grid' ),
						dat = prv.data( 'atts' ),
						lod = 'cz_ajax_loading';
					
					if ( diz.hasClass( lod ) ) {
						return;
					}

					// Loading.
					diz.addClass( lod );

					// Loaded posts ids.
					dat['ids'] = '0';
					$( '.cz_grid_item', prv ).each(function() {
						if ( $( this ).data( 'id' ) ) {
							dat['ids'] += ',' + $( this ).data( 'id' );
						}
					});

					// Send.
					$.ajax({
						type: "GET",
						url: $( 'body' ).data( 'ajax' ) || ajaxurl,
						dataType: 'html',
						data: dat,
						success: function( data ) {
							if ( data == '' ) {
								diz.html( dat.loadmore_end ).addClass( 'cz_ajax_end' ).attr( 'disabled', 'disabled' );
							}

							var data = $( data );

							// Scroll fix lazyload.
							setTimeout( function() {
								$( window ).trigger( 'scroll.lazyload' );
							}, 500 );

							if ( x.hasClass( 'cz_justified' ) ) {

								$( '> div', data ).css( 'margin', 0 );
								x.append( data );
								x.jpictura( jpictura );

							} else {

								prv.isotope( 'insert', data );
								setTimeout(function() {
									prv.imagesLoaded( function() {
										prv.isotope( 'layout' );
									});
								}, 100 );
								if ( prv.data( 'animation' ) ) {
									prv.find( '.cz_grid_item' ).css( 'opacity', 0 );
								}
							}

							setTimeout(function() {
								
								gridAnimation();

								$( window ).trigger( 'scroll.lazyload' );
								$( window ).trigger( 'scroll.grid_animation' );

							}, 500 );

							diz.removeClass( lod );
						},
						error: function() {
							diz.removeClass( lod ).removeClass( 'cz_ajax_end' ).removeAttr( 'disabled' );
						}
					});

					e.preventDefault();
				});
			}

			// Loadmore infinite scroll
			$( '.cz_ajax_infinite a' ).codevzPlus( 'infinite', function() {
				var en = $( this ), ld = 'cz_ajax_loading';

				$( window ).on( 'scroll.cz_infinite_ajax', function() {
					if ( ! en.hasClass( ld ) && ! en.hasClass( 'cz_ajax_end' ) && Codevz_Plus.inview( en ) ) {
						$( '.cz_ajax_pagination a' ).trigger( 'click' );
					}
				});
			});

			gridAnimation();

			// Update lightbox for page builder.
			wpb && Codevz_Plus.lightGallery( x );

		});
	}, Codevz_Plus.grid();
}(jQuery);