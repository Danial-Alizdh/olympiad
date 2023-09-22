! function( $ ) {
	"use strict";

	Codevz_Plus.working_hours = function() {

		var whl = $( '.cz_wh_line_between .cz_wh_line' ), timeout;

		$( window ).on( 'resize.whl', function() {

			clearTimeout( timeout );

			timeout = setTimeout( function() {

				whl.each( function( i, x ) {

					var x = $( x ), 
						pa = x.parent(), 
						ic = pa.find( 'span i' ),
						ll = pa.find( '.cz_wh_left b' ).outerWidth( true ) + ( ic.length ? ic.outerWidth( true ) + 8 : 0 ) + 12 + 'px',
						rr = pa.find( '.cz_wh_right' ).outerWidth( true ) + 12 + 'px',
						rtl = $( document.body ).hasClass( 'rtl' );

					x.css( 'left', rtl ? rr : ll ).css( 'right', rtl ? ll : rr );
				
				});

			}, 1000 );

		}).trigger( 'resize.whl' );

	};

	Codevz_Plus.working_hours();

}( jQuery );