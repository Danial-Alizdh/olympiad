! function( $ ) {
	'use strict';

	Codevz_Plus.parallax = function() {

		var body = $( document.body );

		// On mousemove.
		$( '[class*="cz_mparallax_"]' ).codevzPlus( 'mparallax', function( x ) {

			$( window ).on( 'mousemove', function( e ) {

				if ( Codevz_Plus.inview( x, 750 ) ) {

					var sp 	= -( ( parseInt( x.attr( "class" ).replace(/[^\d-]/g, "") ) || 50 ) * 10 ),
						xx  = e.pageX - x.offset().left - ( x.width() / 2 ),
						yy  = e.pageY - x.offset().top - ( x.height() / 2 ),
						xx  = xx / $( this ).width(),
						yy  = yy / $( this ).height();

					x.css( 'transform', 'translate3d( ' + Math.round( xx * sp ) + 'px,' + Math.round( yy * sp ) + 'px, 0px )' );

				}

			});

		});

		// On scroll.
		var par = $( '[class*="cz_parallax_"]' ),
			all = par.length - 1;

		par.codevzPlus( 'parallax', function( x, i ) {

			var c = x.attr( 'class' ),
				f = c ? parseInt( c.replace( /[^\d-]/g, '' ) ) / 100 : 'undefined',
				g = ( x.outerHeight(), f ) || 0,
				j = x.data( 'offset' ) || 0;

			$( window ).on( 'scroll.parallax', function() {

				//if ( Codevz_Plus.inview( x, 750 ) ) {

					var e = ( x.outerHeight(), $( this ).scrollTop() ) + 250,
						r = Math.round( ( x.offset().top - $( this ).height() / 2 - e ) * g - j );

					if ( x.hasClass( 'cz_parallax_stop' ) ) {
						r = r < 0 ? 0 : r;
					}

					e < $( document ).height() && x.css( 'transform', 'translate' + ( c.indexOf( '_v_' ) >= 0 ? 'Y' : 'X' ) + '(' + r + 'px)' );

				//}

			});

			// First position.
			all === i && $( window ).trigger( 'scroll.parallax' );

		});

	};

	Codevz_Plus.parallax();

}( jQuery );