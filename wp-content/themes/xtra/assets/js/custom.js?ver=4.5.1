/* Custom theme scripts */
var Codevz = ( function( $ ) {
	"use strict";

	var wind = $( window ),
		body = $( document.body ),
		page = $( 'html, body' ),
		inla = $( '.inner_layout' ).length ? $( '.inner_layout' ) : body;

	// Custom easing.
	$.extend( $.easing, {
		def: 'easeInOutCodevz',
		easeInOutCodevz: function(x) {
			return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow( 2, 20 * x - 10 ) / 2 : ( 2 - Math.pow( 2, -20 * x + 10 ) ) / 2;
		}
	});

	// Codevz callback.
	if ( ! $.fn.codevz ) {

		$.fn.codevz = function( data, callback ) {

			if ( $( this ).length ) {

				var $this = $( this ),
					run = function( e ) {

						var l = e.length, i = 0;

						for( i; i < l; i++ ) {

							var x = $( e[i] );

							if ( x.data( 'codevz' ) !== data ) {
								callback.apply( x.data( 'codevz', data ), [ x, i ] );
							}

						}

					};

				if ( Codevz.inview( $this, 100 ) ) {

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

			if ( ! body.hasClass( 'xtra-no-fade' ) ) {
				setTimeout( function() {
					body.animate({opacity: 1}, 200);
				}, 400 );
			}

			// Header custom shape size.
			$( 'div[class*="cz_row_shape_"]' ).codevz( 'row_shape', function( x ) {

				Codevz.heightChanged( x, function() {

					var cls = '.' + ( x.attr( 'class' ) || '' ).replace( /  | /g, '.' ),
						hei = x.height() + 37;

					!x.find( '> style' ).length && x.append( '<style></style>' );

					x.find( '> style' ).html( cls + ' .row:before,' + cls + ' .row:after{width:' + hei + 'px}.elms_row ' + cls + ':before, .elms_row ' + cls + ':after{width:' + hei + 'px}' );

				});

			});

			// Social Dorpdown.
			body.on( 'click', '.xtra-social-icon-trigger', function() {

				var x 	= $( this ),
					box = x.next( '.xtra-social-dropdown' );

				if ( box.length ) {

					if ( box.is( ':visible' ) ) {
						box.fadeOut( 'fast' );
					} else {
						box.fadeIn( 'fast' );
					}

				}

			}).on( 'click', function( e ) {

				if ( $( e.target ).closest( '.cz_elm' ).length ) {
					return;
				}

				$( '.xtra-social-dropdown' ).fadeOut( 'fast' );

			});

			// On resize.
			var alignFull 	= $( '.alignfull' ),
				headerLine 	= $( '.header_line_1' ),
				fixedFooter = $( '.cz_fixed_footer' ),
				videos 		= $( '.cz_iframe, .content iframe, object, embed' ).not( '.wp-embedded-content' ),
				timeout;

			// Functions on window resize.
			wind.on( 'resize.xtra', function() {

				clearTimeout( timeout );

				timeout = setTimeout( function() {

					// Current window width.
					var wind_width = wind.width();

					// WP 5.x gutenberg ready.
					alignFull.length && alignFull.each( function( i, x ) {

						var x = $( x ), 
							inla_width = x.parent().width(),
							from_left  = ( ( wind_width - inla_width ) / 2 );

						x.css( { width: wind_width, left: -from_left } );

					});

					// Footer fixed.
					fixedFooter.length && body.css( 'margin-bottom', fixedFooter.height() );

					// Videos iframe auto size.
					videos.length && videos.each( function( i, x, w ) {

						x = $( x );

						x.attr( 'data-aspectRatio', x.height() / x.width() ).removeAttr( 'height width' );

						w = x.parent().width();
						x.width( w ).height( w * x.attr( 'data-aspectRatio' ) );

					});

				}, 1000 );

			}).trigger( 'resize.xtra' );

			// Element: line auto height.
			setTimeout( function() {

				headerLine.codevz( 'full_line', function( x ) {

					Codevz.heightChanged( x.closest( '.row' ), function() {

						x.css( 'height', '0px' );

						setTimeout( function() {

							x.css( 'height', x.closest( '.row' ).height() );

						}, 10 );

					});

				});

			}, body.hasClass( 'elementor-editor-active' ) ? 3000 : 1500 );

			// Posts equality.
			$( '.cz_default_loop_grid' ).closest( '.cz_posts_container' ).codevz( 'dlg_equal', function( x ) {
				x.addClass( 'cz_posts_equal' );
			});

			// Widget nav menu dropdown.
			$( '.widget_nav_menu .menu-item-has-children > a' ).codevz( 'wnmi', function( x ) {

				if ( ! x.find( '.fa-angle-down' ).length ) {
					x.append( '<i class="fa fa-angle-down" aria-hidden="true"></i>' );
				}

			});

			// Widget nav menu dropdown arrow.
			body.on( 'click', '.widget_nav_menu .menu-item-has-children > a > i', function( e ) {

				$( this ).toggleClass( 'fa-angle-down fa-angle-up' ).closest( 'li' ).find( '> ul' ).slideToggle();

				e.preventDefault();

			// Dropdown menu off screen.
			}).on( 'mouseenter', '.sf-menu .menu-item-has-children', function() {

				var dropdown = $( this ).find( '> ul' ).removeClass( 'cz_open_menu_reverse' ),
					isVisible = dropdown.offset().left + dropdown.width() <= inla.width();

				dropdown[ isVisible ? 'removeClass' : 'addClass' ]( 'cz_open_menu_reverse' );

			});

			// Menus
			$( '.sf-menu' ).each( function( i ) {

				var x 			= $( this ),
					indicator 	= x.data( 'indicator' ) || ( x.hasClass( 'offcanvas_menu' ) ? 'fa fa-angle-down' : '' ),
					indicator2 	= x.data( 'indicator2' ) || ( x.hasClass( 'offcanvas_menu' ) ? 'fa fa-angle-down' : '' );

				// Superfish.
				x.codevzMenu({

					onInit: function() {

						// Menu indicators.
						$( '.sub-menu', this ).parent().each( function() {

							var en = $( this ),
								a = en.find( '> a, > h6' );

							if ( ! a.find( '.cz_indicator' ).length ) {

								if ( $( '.cz_menu_subtitle', a ).length ) {
									$( '.cz_menu_subtitle', a ).before( '<i class="cz_indicator" aria-hidden="true"></i>' );
								} else {
									a.append( '<i class="cz_indicator" aria-hidden="true"></i>' );
								}

							}

							if ( indicator || indicator2 ) {
								$( '.cz_indicator', a ).addClass( a.closest( '.sub-menu' ).length ? indicator2 : indicator );
							}

							if ( ! en.find( 'li, div' ).length ) {
								en.find( '.cz_indicator' ).remove();
								en.next( 'ul' ).remove();
							}

							// Empty href.
							!en.attr( 'href' ) && en.removeClass( 'current_menu' );

							// Fix: Current active menu in dropdown.
							en.find( '.current_menu' ).length && setTimeout(function() {
								en.addClass( 'current_menu' );
							}, 250 );

						});

						// Fix: Keep original current menu in dropdown menu.
						if ( x.find( '.current_menu ul > .current-menu-item' ).length ) {

							x.find( '.current_menu ul > .current-menu-item' ).siblings().removeClass( 'current_menu' );

						// If there is no current menu but ancestor exists.
						} else if ( ! x.find( '.current_menu' ).length && x.find( '.current-page-ancestor, .current-post-ancestor, .current-menu-item' ).length ) {

							$( x.find( '.current-page-ancestor, .current-post-ancestor, .current-menu-item' )[0] ).addClass( 'current_menu' );

						}

						// Auto responsive menu items according to window width.
						if ( x.not( '#menu_header_4, #menu_fixed_side_1, .cz-not-three-dots' ).length ) {

							wind.on( 'resize.responsive', function() {

								var en = x,
									parent = en.parent(),
									elementor = en.closest( '.elementor-container' ),
									menu_margin = parseFloat( parent.css( 'margin-left' ) ) + parseFloat( parent.css( 'margin-right' ) ),
									elements = 0,
									container,
									three_dots = ( body.attr( 'class' ).indexOf( 'codevz-plus' ) >= 0 ) ? '<i class="fa czico-055-three cz-extra-menus" style="margin:0" aria-hidden="true"></i>' : '...';

								setTimeout( function() {

									// Reset
									en.append( en.find( '.cz-extra-menus > .sub-menu > li' ) ).find( '.cz-extra-menus' ).remove();

									// Add icon dots
									if ( ! en.find( '.cz-extra-menus' ).length ) {
										var submenu_title = $( '.cz_menu_subtitle' ).text() ? '<span class="cz_menu_subtitle">&nbsp;</span>' : '';
										en.append( '<li class="cz-extra-menus cz"><a href="#" class="sf-with-ul" aria-label="More links" aria-hidden="true"><span>&nbsp;' + three_dots + '&nbsp;</span>' + submenu_title + '</a><ul class="sub-menu" aria-hidden="true"></ul></li>');
									}

									var nw = en.find( '.cz-extra-menus' ), 
										nw_ul = nw.find( '> ul' );

									nw.hide().prev().addClass( 'cz-last-child' );

									// Get elements width
									en.parent().parent().find( '.cz_elm' ).not( parent ).each(function() {

										elements += $( this ).outerWidth() + parseFloat( $( this ).css( 'margin-left' ) ) + parseFloat( $( this ).css( 'margin-right' ) );

									});

									// Move back to parent
									nw_ul.find( '> li' ).appendTo( en );

									// Move to hidden menu
									$( en.find( '> li' ).not( '.cz-extra-menus' ).get().reverse() ).each( function() {

										if ( elementor.length ) {
											container = elementor.outerWidth();
										} else {
											container = en.closest( '.have_center' ).length ? parent.parent().parent().outerWidth() : parent.parent().outerWidth();
										}

										if ( ( parent.outerWidth() + menu_margin ) + elements + ( elementor ? 0 : 25 ) > container ) {
											$( this ).prependTo( nw_ul );
											nw.show();
										}

									});

								}, 1000 );

							}).trigger( 'resize.responsive' );

						}

					},
					onBeforeShow: function() {

						var x = $( this );

						// Sub menu.
						if ( x.hasClass('sub-menu') ) {

							// Check if mega menu is fullwide
							if ( x.parent().hasClass( 'cz_megamenu_width_fullwide' ) ) {

								var megamenu_row = body,
									megamenu_row_offset = megamenu_row.offset().left,
									megamenu_row_width = megamenu_row.width();

								x.attr( 'style', x.attr( 'style' ) + 'width: ' + wind.width() + 'px;left:' + ( megamenu_row_offset - x.parent().offset().left ) + 'px;margin-right:0;margin-left:0;right:auto !important;' );

							}

							// Sub-menu styling
							if ( x.parent().data( 'sub-menu' ) ) {
								setTimeout(function() {
									x.attr( 'style', x.attr( 'style' ) + x.parent().data( 'sub-menu' ) );
								}, 50 );
							}

							// Megamenu
							if ( x.parent().hasClass( 'cz_parent_megamenu' ) ) {
								x.addClass( 'cz_megamenu_' + $( '> .cz', x ).length ).find( 'ul' ).addClass( 'cz_megamenu_inner_ul clr' );
							}

							// Megamenu full row
							if ( x.parent().hasClass( 'cz_megamenu_width_full_row' ) ) {

								var megamenu_row = $( '.row' ),
									megamenu_row_offset = megamenu_row.offset().left,
									megamenu_row_width = megamenu_row.width();

								if ( x.closest( '.cz-extra-menus' ).length ) {

									megamenu_row_width = megamenu_row_width - ( megamenu_row.width() - x.parent().offset().left + 10 );

								}

								x.attr( 'style', x.attr( 'style' ) + 'width: ' + megamenu_row_width + 'px;left:' + ( megamenu_row_offset - x.parent().offset().left ) + 'px;' );

							}

						}

						if ( x.closest('.fixed_side').length ) {
							var pwidth = x.parent().closest( '.sub-menu' ).length ? '.sub-menu' : '.sf-menu',
								ff_pos = $( '.fixed_side' ).hasClass( 'fixed_side_left' ) ? 'left' : 'right';
							x.css( ff_pos, x.closest( pwidth ).width() );
						}

						setTimeout( function() {

							// Lazyload image in dropdown menus.
							wind.trigger( 'scroll.lazyload' );

							// Fix carousel.
							if ( x.find( '.slick' ).length ) {
								wind.trigger( 'resize.slick' );
							}

						}, 200 );

					}

				});

			});

			// Fix mobile menu icon.
			$( 'i.icon_mobile_offcanvas_menu' ).removeClass( 'hide' );

			// Dropdown Menu
			body.on( 'click', '.icon_dropdown_menu', function( e ) {

				var x = $( this ),
					pos = x.position(),
					nav = x.parent().find('.sf-menu'),
					row = $( this ).closest('.row').height(),
					offset = ( ( inla.outerWidth() + inla.offset().left ) - x.offset().left );

				nav.fadeToggle( 'fast' );

				body.on( 'click.cz_idm', function(e) {
					nav.fadeOut( 'fast' );
					body.off( 'click.cz_idm' );
				});

				$( '.cz', nav ).on( 'mouseenter mouseleave', function(e) {
					e.stopPropagation();
				}).off( 'click' ).on( 'click', function(e) {
					if ( $( e.target ).hasClass( 'cz_indicator' ) ) {
						$( this ).closest( 'li' ).find('> ul').fadeToggle( 'fast' );
						e.preventDefault();
						e.stopPropagation();
					}
				});

				e.stopPropagation();

			// Open Menu Horizontal
			}).on( 'click', '.icon_open_horizontal', function( e ) {

				var x = $( this ),
					pos = x.position(),
					nav = x.parent().find('.sf-menu'),
					row = $( this ).closest('.row').height(),
					offset = ( ( inla.outerWidth() + inla.offset().left ) - x.offset().left );

				nav.fadeToggle( 'fast' );

				Codevz.showOneByOne( $( '> .cz', nav ), 100, ( nav.hasClass( 'inview_left' ) ? 'left' : 'right' ) );

				body.on( 'click.cz_ioh', function(e) {
					nav.fadeOut( 'fast' );
					body.off( 'click.cz_ioh' );
				});

				e.stopPropagation();

			// Mobile Menu
			}).on( 'click', 'i.icon_mobile_offcanvas_menu', function() {

				var x = $( this );

				if ( ! x.hasClass( 'done' ) ) {

					Codevz.offCanvas( x.addClass( 'done' ), 1 );

					var ul_offcanvas = $( 'ul.offcanvas_area' ),
						indicator 	= ul_offcanvas.data( 'indicator' ),
						default_ind = ul_offcanvas.hasClass( 'offcanvas_menu' ) ? 'fa fa-angle-down' : '',
						indicator 	= indicator ? indicator : default_ind,
						indicator2 	= ul_offcanvas.data( 'indicator2' ),
						indicator2 	= indicator2 ? indicator2 : default_ind,
						additional  = x.parent().find( '.xtra-mobile-menu-additional' );

					additional.length && ul_offcanvas.append( '<li class="xtra-mobile-menu-additional">' + additional.html() + '</li>' );

					// Add mobile menus indicator
					if ( indicator.length || indicator2.length ) {
						x.next( '.sf-menu' ).find( '.sf-with-ul' ).each(function() {
							$( '.cz_indicator', this ).addClass( ( x.parent().parent().hasClass( 'sf-menu' ) ? indicator : indicator2 ) );
						});
					}

					$( '.sf-with-ul, .cz > h6', ul_offcanvas ).on( 'click', function( e ) {
						if ( $( e.target ).hasClass( 'cz_indicator' ) || $( e.target ).attr( 'href' ) == '#' ) {
							$( this ).next().slideToggle( 'fast' );
							e.preventDefault();
						}
					});

				}

			// OffCanvas
			}).on( 'click', '.offcanvas_container > i', function() {

				var x = $( this );

				if ( ! x.hasClass( 'done' ) ) {

					Codevz.offCanvas( x.addClass( 'done' ), 1 );

				}

			// Fullscreen Menu
			}).on( 'click', '.icon_fullscreen_menu', function( e ) {

				var x = $( '.fullscreen_menu' );

				body.addClass( 'cz_noStickySidebar' ).find( '.fixed_side_1.have_center' ).find( '.fullscreen_menu,.xtra-close-icon' ).appendTo( '.fixed_side_1.have_center' );

				x.fadeIn( 'fast' ).on( 'click', function() {
					$( this ).delay( 500 ).fadeOut( 'fast', function() {
						body.removeClass( 'cz_noStickySidebar' );
						$( '.xtra-close-icon' ).addClass( 'hide' );
						page.removeClass( 'no-scroll' );
					});
				});

				if ( x.is(':visible') ) {

					page.addClass( 'no-scroll' );
					Codevz.showOneByOne( $( '> .cz', x ), 150 );

				}

				var h = x.find( '> li' ).height() * ( ( x.find( '> li' ).length - 1 ) / 2 );

				x.css( 'padding-top', ( ( wind.height() / 2 ) - h ) );

				$( '.xtra-close-icon' ).toggleClass( 'hide' ).off().on( 'click', function() {
					$( this ).addClass( 'hide' );
					x.fadeOut( 'fast' );
					page.removeClass( 'no-scroll' );
				});

			// Fullscreen
			}).on( 'mouseenter mouseleave', 'ul.fullscreen_menu .cz', function( e ) {

				e.stopPropagation();

			}).on( 'click', 'ul.fullscreen_menu .cz', function( e ) {

				if ( $( e.target ).hasClass( 'cz_indicator' ) ) {
					$( this ).closest( 'li' ).find( '> ul' ).fadeToggle( 'fast' );
					e.preventDefault();
					e.stopPropagation();
				}

			// Hidden fullwidth content
			}).on( 'click', '.hf_elm_icon', function( e ) {

				var x = $( this );

				x.next( '.hf_elm_area' ).slideToggle( 'fast' ).css({
					width: inla.outerWidth(),
					left: inla.offset().left,
					top: x.offset().top + x.outerHeight()
				});

				body.on( 'click.cz_hf_elm', function(e) {
					$( '.hf_elm_area' ).slideUp( 'fast' );
					body.off( 'click.cz_hf_elm' );
				});

				e.preventDefault();
				e.stopPropagation();

			});

			// Extra
			$( '.tagcloud' ).addClass( 'clr' );

			// Input buttons to button tag
			$( '.form-submit .submit, input.search-submit, .wpcf7-submit' ).codevz( 'button', function() {

				var x = $( this );

				$( '<button name="submit" type="submit" class="' + x.attr('class') + '">' + x.val() + '</button>' ).insertAfter( x );

				x.detach();

			});

			// Post views count.
			$( '.xtra-post-views' ).codevz( 'post_views', function() {

				var x = $( this );

				$.ajax({
					type: "GET",
					url: body.data( 'ajax' ) || ajaxurl,
					dataType: 'html',
					data: "action=codevz_ajax_post_views&id=" + x.attr( 'data-id' ) + "&nonce=" + x.attr( 'data-nonce' ),
					success: function( data ) {
						console.log( data );
						// Post views count worked.
					},
					error: function( xhr, status, error ) {
						console.log( xhr, status, error );
					}
				});

			});

			this.menu_anchor();
		},

		// Menu Anchor.
		menu_anchor: function() {

			// Disable Elementor links anchor.
			if ( typeof elementorFrontend != 'undefined' ) {

				setTimeout( function() {

					elementorFrontend.elements.$document.off(
						'click', 
						elementorFrontend.utils.anchors.getSettings( 'selectors.links' ),
						elementorFrontend.utils.anchors.handleAnchorLinks
					);

				}, 500 );

			}

			// Prevent hashtag link jump.
			$( "a[href='#']" ).not( 'a[target="_blank"]' ).on( 'click.prevent_jump', function( e ) {
				e.preventDefault();
			});

			// Init.
			var aBar 	= body.hasClass( 'admin-bar' ) ? 32 : 0,
				mLink 	= $( "a[href*='#']" ).not( "a[href='#'],a[target='_blank']" ),
				sticky 	= $( '.header_is_sticky' ).not( '.smart_sticky, .header_4' ),
				scrollTop = 0, timeout,
				scrollToAnchor = function( target ) {

					clearTimeout( timeout );

					timeout = setTimeout( function() {

						target = target.replace( '%20', ' ' );
						target = ( target.indexOf( '#' ) >= 0 ) ? $( target ) : $( '#' + target );

						if ( target.length && ! target.hasClass( 'cz_popup_modal' ) ) {

							scrollTop = $( document ).scrollTop();

							if ( wind.width() < 768 && $( '.header_4.header_is_sticky' ).length ) {
								sticky = $( '.header_4.header_is_sticky' ).not( '.smart_sticky' );
							}

							if ( scrollTop == 0 && sticky.length ) {
								$( document ).scrollTop( 1 );
							}

							setTimeout( function() {

								page.animate({ scrollTop: target.offset().top - aBar - ( sticky.outerHeight() || 0 ) }, 1200, 'easeInOutCodevz', function() {

									page.stop();

								});

							}, scrollTop == 0 ? 450 : 1 );

						}

					}, 50 );

				};

			// Prevent page scroll jumping.
			var target = window.location.hash;
			if ( target ) {
				target = target.replace( '#', '' ).replace( '%20', ' ' );
				if ( $( '#' + target ).length ) {

					// Stop scroll.
					page.animate({scrollTop: 0}, 1);

					// Scroll to anchor.
					setTimeout(function() {
						scrollToAnchor( target );
					}, 1500 );
				}
			}

			// Links.
			if ( mLink.length ) {

				mLink.off( 'click.anchor' ).on( 'click.anchor', function( e ) {

					if ( $( this ).not( 'a[href*="#top"],[data-tab],.cz_popup_modal,.cz_no_anchor,.cz_no_anchor a, .vc_general, .cz_no_anchor a, .cz_lrpr a, .wc-tabs a, .cz_edit_popup_link, .page-numbers a, #cancel-comment-reply-link, .vc_carousel-control, [data-vc-container],.comment-form-rating a,.sm2-bar-ui a,.lwptoc a' ).length ) {

						if ( ! $( e.target ).hasClass( 'cz_indicator' ) ) {

							if ( $( this.hash ).length && location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname ) {
								scrollToAnchor( this.hash );
							} else if ( this.hash ) {
								location = $( this ).attr( 'href' );
							}

						}

						e.preventDefault();

					}

				});

				var mPage  = $( '.sf-menu' ),
					mPageH = mPage.outerHeight() + 15,
					mItems = mPage.find( "a[href*='#']" ).not( "a[href='#']" ),
					sItems = mItems.map(function(){
						var item = $( $( this ).attr( "href" ).replace( /\s+|%20/g, "" ).replace( /^.*\#(.*)$/g, "#$1" ) );
						if ( item.length ) {
							return item;
						}
					});

				wind.on( 'scroll.anchor', function() {

					clearTimeout( timeout );

					timeout = setTimeout( function() {

						var ft = $( this ).scrollTop() + mPageH + aBar + ( sticky.outerHeight() || 0 ),
							cur = sItems.map(function() {
								if ( $(this).offset().top < ft )
									return this;
								});

						cur = cur[cur.length-1];
						var id = cur && cur.length ? cur[0].id : "";
						if ( id && ! $( '#' + id + '.cz_popup_modal' ).length && $( '#' + id ).length ) {
							body.trigger( 'click' );
							mItems.parent().removeClass( "current_menu" ).end().filter( "[href*='#" + id + "']" ).parent().addClass( "current_menu" );
						} else {
							mItems.parent().removeClass( "current_menu" );
						}

					}, 50 );

				});
			}
		},

		// Height changed = run callback.
		heightChanged: function( elm, callback ) {
			var lastHeight = elm.outerHeight(), newHeight;

			// First.
			callback();

			// Height detect.
			( function run() {

				newHeight = elm.outerHeight();

				if ( lastHeight != newHeight ) {
					callback();
					lastHeight = newHeight;
				}

				if ( elm.onElementHeightChangeTimer ) {
					clearTimeout( elm.onElementHeightChangeTimer );
				}

				elm.onElementHeightChangeTimer = setTimeout( run, 500 );

			})();

		},

		/*
		*   offCanvas area
		*/
		offCanvas: function( selector, click ) {

			var parent  = selector.parent(),
				area    = selector.next(),
				layout  = $( '#layout' ),
				overlay = $( '.cz_overlay' ),
				isRight, i, 
				fixed_side = 0,
				close, timeout;

			if ( area.length ) {

				var area = area.clone(),
					isRight = area.hasClass( 'inview_right' ),
					new_class = area.hasClass('sf-menu') ? 'sf-menu offcanvas_area' : 'offcanvas_area offcanvas_original';

				body.prepend( area.removeClass().addClass( 'sidebar_offcanvas_area' ).addClass( new_class + ( isRight ? ' inview_right' : ' inview_left' ) ) );
				var area_w = area.width() + 80;

				if ( selector.closest( '.elementor-element' ).length ) {

					var classList = selector.closest( '.elementor-element' ).attr('class').split(/\s+/);
					$.each( classList, function( index, item ) {
						if ( item.indexOf( 'elementor-element-' ) == 0 ) {
							area.addClass( 'elementor-element ' + item );
							body.addClass( $( '[data-elementor-id]' ).attr( 'class' ) );
						}
					});

				}

				area.find( '.sub-menu' ).hide();

			} else {

				return;

			}

			// Open icon
			selector.on( 'click', function(e) {

				if ( area.hasClass( 'active_offcanvas' ) && ! body.hasClass( 'offcanvas_doing' ) ) {

					page.removeClass( 'no-scroll' );

					overlay.trigger( 'click' );

				} else {

					page.addClass( 'no-scroll' );

					$( 'html' ).css( 'margin-top', '0 !important' );
					$( '#layout' ).css( 'margin-top', '40px !important' );

					// Close icon
					if ( body.attr( 'class' ).indexOf( 'codevz-plus' ) >= 0 ) {
						area.before( '<i class="fa czico-198-cancel offcanvas-close" aria-hidden="true"></i>' );
					} else {
						area.before( '<i class="fa fa-times offcanvas-close" aria-hidden="true"></i>' );
					}
					close = area.prev( '.offcanvas-close' );
					close.on( 'click', function(e) {
						if ( click ) {
							body.removeClass( 'active_offcanvas' );
							area.removeClass( 'active_offcanvas' );
							
							overlay.fadeOut();
							setTimeout(function() {
								$( '.offcanvas-close' ).detach();
								wind.trigger( 'resize' );
								page.removeClass( 'no-scroll' );
							}, 500 );
							
							click = 0;
						} else {
							overlay.trigger( 'click' );
						}
					});
					close.css( ( isRight ? 'right' : 'left' ), area.outerWidth() + fixed_side );

					body.addClass( 'offcanvas_doing active_offcanvas' + ( isRight ? ' cz_offcanvas_right' : ' cz_offcanvas_left' ) );
					area.addClass( 'active_offcanvas' );

					if ( wind.width() > 768 ) {

						if ( ( $( '.fixed_side_left' ).length && $( '.cz_offcanvas_left' ).length ) || $( '.fixed_side_right' ).length  && $( '.cz_offcanvas_right' ).length ) {
							if ( ! $( '#cz_ofs' ).length ) {
								$( 'head' ).append( '<style id="cz_ofs"></style>' );
							}
							fixed_side = $( '.fixed_side' ).width();
							$( '#cz_ofs' ).html( '.active_offcanvas .offcanvas_area.active_offcanvas{transform:translateX(' + ( isRight ? '-' : '' ) + fixed_side + 'px)}' );
						}
						
					}

					overlay.fadeIn();

					setTimeout(function() {
						body.removeClass( 'offcanvas_doing' );
					}, 1250 );
				}

				e.stopPropagation();
			});

			// First time
			if ( click ) {
				selector.trigger( 'click' );
			}

			// Prevent close on open icon
			area.on( 'click', function(e) {
				e.stopPropagation();
			});

			// reCall anchors
			this.menu_anchor();

			// Click on body
			overlay.on( 'click', function( e ) {

				if ( $( '.active_offcanvas' ).length && ! body.hasClass( 'offcanvas_doing' ) ) {

					body.removeClass( 'active_offcanvas' );
					area.removeClass( 'active_offcanvas' );

					overlay.fadeOut();

					setTimeout(function() {

						$( '.offcanvas-close' ).detach();
						wind.trigger( 'resize' );
						page.removeClass( 'no-scroll' );

					}, 500 );

				}

				setTimeout(function() {

					if ( ! overlay.is( ':visible' ) && $( '.active_offcanvas' ).length ) {

						$( '.offcanvas-close' ).trigger( 'click' );

						page.removeClass( 'no-scroll' );

					}

				}, 500 );

			});

			// Close mobile on window resize.
			wind.on( 'resize.offcanvas_close', function( e ) {

				clearTimeout( timeout );

				timeout = setTimeout( function() {

					var mh4 = $( '#menu_header_4' );

					if( mh4.hasClass( 'active_offcanvas' ) && wind.width() > 768 ) {
						mh4.prev( 'i' ).trigger( 'click' );
					}

				}, 50 );

			});

			// Reload necessary scripts.
			if( ! area.hasClass( 'xtra-reload-js' ) ) {

				// Fix menu icon click issue specially on mobile.
				area.find( '.cz a' ).on( 'click', function( e ) {

					if ( $( e.target ).hasClass( 'cz_indicator' ) ) {

						var en = $( this );

						en.attr( 'data-href', en.attr( 'href' ) ).attr( 'href', '#' );

						setTimeout( function() {
							en.attr( 'href', en.attr( 'data-href' ) );
						}, 250 );

					}

				});

				// reInit codevz plus.
				if ( typeof Codevz_Plus != 'undefined' ) {

					Codevz_Plus.init();
					if ( typeof Codevz_Plus.working_hours != 'undefined' ) {
						Codevz_Plus.working_hours();
					}

				}

				// Lazyload image inside offcanvas.
				setTimeout( function() {

					$( window ).trigger( 'scroll.lazyload' );

					area.find( '[data-src]' ).each( function() {
						$( this ).attr( 'src', $( this ).data( 'src' ) ).removeAttr( 'data-src' );
					});

					area.find( '.cz_tooltip' ).removeClass( 'cz_tooltip_down cz_tooltip_right cz_tooltip_left' ).addClass( 'cz_tooltip_up' );

				}, 500 );

				// reInit contact form 7.
				if( typeof wpcf7 != 'undefined' && area.find( '.wpcf7' ).length ) {

					area.find( 'div.wpcf7 > form' ).each( function() {

						var $this = $( this );

						if ( $.fn.initForm ) {
							wpcf7.initForm( $this );

							if ( wpcf7.cached ) {
								wpcf7.refill( $this );
							}
						}

					} );

				}

				// reInit Facebook.
				setTimeout( function(){
					if ( window.FB ) {
						FB.XFBML.parse();
					}
				}, 2000 );

				area.addClass( 'xtra-reload-js' );

			}

		},

		/*
		*   Show one by one with delay
		*/
		showOneByOne: function( e, s, d ) {
			var e = ( d == 'left' ) ? $( e.get().reverse() ) : e,
				b = ( d == 'left' ) ? {opacity:0,left:10} : {opacity: 0,left:-10};

			e.css( b ).each(function( i ) {
				$( this ).delay( s * i ).animate({opacity:1,left:0});
			});
		},

	};

})( jQuery );

jQuery( function( $ ) {
	Codevz.init();
});