! function( $ ) {
	"use strict";

	Codevz_Plus.separator = function() {

		$( 'div[data-vc-full-width]' ).find( '.cz_sep, .cz_sep2' ).not( '.cz_content_box .cz_sep, .cz_content_box .cz_sep2' ).codevzPlus( 'separators', function( x ) {

			var vc = x.closest( '[data-vc-full-width]' ),
				sc = vc.data( 'vc-stretch-content' ),
				timeout;

			if ( vc.length ) {

				$( window ).on( 'resize', function() {

					clearTimeout( timeout );

					timeout = setTimeout( function() {

						var rtl  = $( document.body ).hasClass( 'rtl' ),
							left = sc ? '0' : parseInt( vc.css( 'left' ) )+ ( rtl ? 15 : -16 ) + 'px';

						if ( rtl && x.hasClass( 'cz_sep2' ) && ! x.hasClass( 'relative' ) ) {
							left = '-' + left;
						}

						x.css(
							{
								left: left,
								width: sc ? vc.width() : parseInt( vc.css( 'width' ) ) + 1
							}
						);

					}, 500 );

				});

				setTimeout( function() {

					$( window ).trigger( 'resize' );

				}, 1000 );

			}

		});

		if ( ! $( '#cz_sep_style' ).length ) {

			$( 'head' ).append( '<style id="cz_sep_style"></style>' );

		}

		$( '.cz_separator' ).codevzPlus( 'separator-old', function( x ) {

			var id = x.attr( 'id'),
				ac = x.data( 'after-color' ),
				cc = $( 'style#cz_sep_style' ).html();

			ac = typeof ac != "undefined" ? '#' + id + ac : '';

			$( 'style#cz_sep_style' ).html( cc + '#' + id + x.data( 'before-color' ) + ac );

		});

	};

	Codevz_Plus.separator();

}( jQuery );