jQuery( function( $ ) {

	// Fix RTL numbers.
	function realtime(r){r.bind("DOMSubtreeModified",function(e){r.unbind("DOMSubtreeModified"),jQuery(e.target).not( '.xtra-done' ).addClass( 'xtra-done' ).codevzNumbers({forbiddenTag:forbiddenTag,numberType:numberType,forbiddenClass:forbiddenClass},!1),realtime(r)})}function hasCommonElements(e,r){return res=!1,e==[]||r==[]||e.forEach(function(e){0<=r.indexOf(e)&&(res=!0)}),res}function getAllClasses(e,r){var a=[];return jQuery(e).parentsUntil(r).andSelf().each(function(){this.className&&a.push.apply(a,this.className.split(" "))}),a}function traverseAr(e){return e.replace(/0/g,"٠").replace(/1/g,"١").replace(/2/g,"٢").replace(/3/g,"٣").replace(/4/g,"٤").replace(/5/g,"٥").replace(/6/g,"٦").replace(/7/g,"٧").replace(/8/g,"٨").replace(/9/g,"٩").replace(/۰/g,"٠").replace(/۱/g,"١").replace(/۲/g,"٢").replace(/۳/g,"٣").replace(/۴/g,"٤").replace(/۵/g,"٥").replace(/۶/g,"٦").replace(/۷/g,"٧").replace(/۸/g,"٨").replace(/۹/g,"٩")}function traverse(e){return e.replace(/0/g,"۰").replace(/1/g,"۱").replace(/2/g,"۲").replace(/3/g,"۳").replace(/4/g,"۴").replace(/5/g,"۵").replace(/6/g,"۶").replace(/7/g,"۷").replace(/8/g,"۸").replace(/9/g,"۹").replace(/٠/g,"۰").replace(/١/g,"۱").replace(/٢/g,"۲").replace(/٣/g,"۳").replace(/٤/g,"۴").replace(/٥/g,"۵").replace(/٦/g,"۶").replace(/٧/g,"۷").replace(/٨/g,"۸").replace(/٩/g,"۹")}function traverseEn(e){return e.replace(/۰/g,"0").replace(/۱/g,"1").replace(/۲/g,"2").replace(/۳/g,"3").replace(/۴/g,"4").replace(/۵/g,"5").replace(/۶/g,"6").replace(/۷/g,"7").replace(/۸/g,"8").replace(/۹/g,"9").replace(/٠/g,"0").replace(/١/g,"1").replace(/٢/g,"2").replace(/٣/g,"3").replace(/٤/g,"4").replace(/٥/g,"5").replace(/٦/g,"6").replace(/٧/g,"7").replace(/٨/g,"8").replace(/٩/g,"9")}jQuery.fn.codevzNumbers=function(e,r){forbiddenTag=(e=e||{forbiddenTag:["SCRIPT","STYLE"],numberType:"persian",forbiddenClass:["EnglishNum"]}).forbiddenTag||["SCRIPT","STYLE"],numberType=e.numberType||"persian",forbiddenClass=e.forbiddenClass||["EnglishNum"];for(var a=0;a<this.length;a++)for(var l=this[a],c=0;c<l.childNodes.length;c++)if(className="string"==typeof l.className?getAllClasses(l,"body"):[],!(0<=forbiddenTag.indexOf(l.nodeName)||hasCommonElements(forbiddenClass,className))){var n=l.childNodes[c];if(3==n.nodeType){var p=n.nodeValue;switch(numberType.toLowerCase()){case"persian":n.nodeValue=traverse(p);break;case"arabic":n.nodeValue=traverseAr(p);break;default:n.nodeValue=traverseEn(p)}}else if(1==n.nodeType){if("OL"==n.nodeName)switch(numberType.toLowerCase()){case"persian":jQuery(n).css("list-style-type","persian");break;case"arabic":jQuery(n).css("list-style-type","arabic-indic");break;default:jQuery(n).css("list-style-type","decimal")}jQuery(n).codevzNumbers({forbiddenTag:forbiddenTag,numberType:numberType,forbiddenClass:forbiddenClass},!1)}}null==r&&realtime(jQuery(this))};

	var lang 		= $( 'html' ).attr( 'lang' ),
		exclude 	= '.cz_ignore_number',
		selectors 	= 'time, .it_text, .amount, .cz_cm_ttl, .xtra-mobile-menu-text, .page-numbers, .price, .cz_grid_filters, .cz_post_date, .cz_data_date, .cz_small_post_date, .cz_data_price, .cz_wishlist_count, .cz_cart_count, .cart_list, .amount, .wc-layered-nav-rating';

	if ( lang === 'ar' || lang === 'ary' ) {

		$( selectors ).not( exclude ).codevzNumbers({
			numberType: 'arabic'
		});

	} else if ( lang === 'fa-IR' ) {

		$( selectors ).not( exclude ).codevzNumbers({
			numberType: 'persian'
		});

	}

});