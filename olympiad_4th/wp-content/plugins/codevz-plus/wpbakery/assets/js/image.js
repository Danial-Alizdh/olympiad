! function( $ ) {
	"use strict";

	Codevz_Plus.image = function( wpb ) {

		wpb && Codevz_Plus.lightGallery( $( '#' + wpb ).closest( '.cz_wrap' ) );

		$( document.body ).on( 'mouseenter mousemove mouseleave', '.cz_image_caption_sticky', function( e ) {

			if ( e.type === 'mouseleave' ) {

				$( this ).find( '.cz_image_caption' ).fadeOut( 100 );

			} else {

				$( this ).find( '.cz_image_caption' ).fadeIn( 100 ).css(
					{
						top: e.offsetY + 30,
						left: e.offsetX
					}
				);

			}

		});

	};

	Codevz_Plus.image();

}( jQuery );