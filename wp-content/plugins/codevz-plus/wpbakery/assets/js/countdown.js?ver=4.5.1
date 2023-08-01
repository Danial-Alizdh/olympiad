/* The Final Countdown 2.1.0 */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(i){"use strict";function s(v){var g=jQuery(document.body).hasClass("rtl");return function(t){var e,s,n,i,a,o,h=t.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(h)for(var l=0,r=h.length;l<r;++l){var c=h[l].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),u=(a=c[0],o=a.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1"),new RegExp(o)),f=c[1]||"",p=c[3]||"",d=null,c=c[2];m.hasOwnProperty(c)&&(d=m[c],d=Number(v[d])),null!==d&&("!"===f&&(s=d,i=n=void 0,n="s",i="",(e=p)&&(n=1===(e=e.replace(/(:|;|\s)/gi,"").split(/\,/)).length?e[0]:(i=e[0],e[1])),d=1===Math.abs(s)?i:n),""===f&&d<10&&(d="0"+d.toString()),d=Codevz_Plus.convertNumbers( d, g && ! jQuery( '.xtra-disable-rtl-numbers' ).length, jQuery( 'html' ).attr( 'lang' ) === 'ar' ? 'ar' : jQuery( 'html' ).attr( 'lang' ) == 'fa-IR' ? 'fa' : 'en' ),t=t.replace(u,d.toString()))}return t.replace(/%%/,"%")}}var a=[],e=[],n={precision:500,elapse:!1};e.push(/^[0-9]*$/.source),e.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),e.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),e=new RegExp(e.join("|"));function o(t,e,s){this.el=t,this.$el=i(t),this.interval=null,this.offset={},this.options=i.extend({},n),this.instanceNumber=a.length,a.push(this),this.$el.data("countdown-instance",this.instanceNumber),s&&("function"==typeof s?(this.$el.on("update.countdown",s),this.$el.on("stoped.countdown",s),this.$el.on("finish.countdown",s)):this.options=i.extend({},n,s)),this.setFinalDate(e),this.start()}var m={Y:"years",m:"months",n:"daysToMonth",w:"weeks",d:"daysToWeek",D:"totalDays",H:"hours",M:"minutes",S:"seconds"};i.extend(o.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var t=this;this.update(),this.interval=setInterval(function(){t.update.call(t)},this.options.precision)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},toggle:function(){this.interval?this.stop():this.start()},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this),a[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(t){this.finalDate=function(t){if(t instanceof Date)return t;if(String(t).match(e))return String(t).match(/^[0-9]*$/)&&(t=Number(t)),String(t).match(/\-/)&&(t=String(t).replace(/\-/g,"/")),new Date(t);throw new Error("Couldn't cast `"+t+"` to a date object.")}(t)},update:function(){var t,e,s;0!==this.$el.closest("html").length?(t=void 0!==i._data(this.el,"events"),e=new Date,s=this.finalDate.getTime()-e.getTime(),s=Math.ceil(s/1e3),s=!this.options.elapse&&s<0?0:Math.abs(s),this.totalSecsLeft!==s&&t&&(this.totalSecsLeft=s,this.elapsed=e>=this.finalDate,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),totalDays:Math.floor(this.totalSecsLeft/60/60/24),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-e.getFullYear())},this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent("update"):(this.stop(),this.dispatchEvent("finish")))):this.remove()},dispatchEvent:function(t){var e=i.Event(t+".countdown");e.finalDate=this.finalDate,e.elapsed=this.elapsed,e.offset=i.extend({},this.offset),e.strftime=s(this.offset),this.$el.trigger(e)}}),i.fn.countdown=function(){var n=Array.prototype.slice.call(arguments,0);return this.each(function(){var t,e,s=i(this).data("countdown-instance");void 0!==s?(t=a[s],e=n[0],o.prototype.hasOwnProperty(e)?t[e].apply(t,n.slice(1)):null===String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(t.setFinalDate.call(t,e),t.start()):i.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,e))):new o(this,n[0],n[1])})}});

! function( $ ) {
	"use strict";

	Codevz_Plus.countdown = function() {

		$( '[data-countdown]' ).codevzPlus( 'countdown', function( x ) {

			var o = x.data( 'countdown' ), 
				d = new Date( new Date().valueOf() + o.date * 1000 ),
				html_y = ( o.y !== '' ) ? '<li><span>%-Y</span><p>' + o.y + '%!Y:' + o.p + ';</p></li>' : '',
				html_d = ( o.d !== '' && html_y ) ? '<li><span>' + ( o.elapse ? '%n' : '%d' ) + '</span><p>' + o.d + '%!n:' + o.p + ';</p></li>' : ( ( o.d !== '' ) ? '<li><span>%D</span><p>' + o.d + '%!d:' + o.p + ';</p></li>' : '' ),
				html_h = ( o.h !== '' ) ? '<li><span>%-H</span><p>' + o.h + '%!H:' + o.p + ';</p></li>' : '',
				html_m = ( o.m !== '' ) ? '<li><span>%-M</span><p>' + o.m + '%!M:' + o.p + ';</p></li>' : '',
				html_s = ( o.s !== '' ) ? '<li><span>%-S</span><p>' + o.s + '%!S:' + o.p + ';</p></li>' : '';

			// Loop fix for local time.
			if ( o.type === 'loop' ) {

				// Get old saved time.
				var save = localStorage.getItem( 'xtraCountdownLoop' + o.date ),
					now  = new Date( new Date().valueOf() + o.date * 1000 ),
					expr = x.hasClass( 'xtra-off' ) ? 21600 : o.date;

				// Fix page builder time field changes.
				if ( o.date != localStorage.getItem( 'xtraCountdownLoopOld' + o.date ) ) {
					save = null;
					localStorage.setItem( 'xtraCountdownLoopOld' + o.date, o.date );
				}

				// Reset.
				if ( ( new Date( now ).getTime() - new Date( save ).getTime() ) > ( expr * 1000 ) ) {
					save = null;
					localStorage.removeItem( 'xtraCountdownLoop' + o.date );
				}

				if ( ! save ) {
					localStorage.setItem( 'xtraCountdownLoop' + o.date, now );
				} else {
					d = new Date( save );
				}

			}

			x.countdown( d, { elapse: o.elapse } ).on( 'update.countdown', function( e ) {
				x.html( e.strftime( html_y + html_d + html_h + html_m + html_s ) );
			}).on('finish.countdown', function( e ) {
				x.html( e.strftime( '<li><span>0</span></li><li><span>0</span></li><li><span>0</span></li><li><span>0</span></li>' ) );
				x.addClass( 'ended' ).append( '<li class="expired">' + o.ex + '</li>' );
			});

		});

	};

	Codevz_Plus.countdown();

}( jQuery );