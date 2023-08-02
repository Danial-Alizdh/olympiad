! function( $ ) {
	"use strict";

	Codevz_Plus.title = function() {

		$( '[class*="codevz-fancy-"]' ).each( function() {

			var $this = $( this ),
				speed = parseFloat( $this.attr( 'data-fancy-speed' ) ) || 500,
				delay = parseFloat( $this.attr( 'data-fancy-delay' ) ) || 0,
				strings = $this.find( '.cz_wpe_content > *' ),
				isWords = $this.hasClass( 'codevz-fancy-words' ),
				isLetters = $this.hasClass( 'codevz-fancy-letters' ),
				words;

			strings.each( function() {

				var $this = $( this );

				if ( isWords ) {
					words = $this.text().split( ' ' );

				} else if ( isLetters ) {
					words = $this.text().split( '' );

				} else {
					words = [ $this.text() ];
				}

				$this.empty().html( function() {

					for (var i = 0; i < words.length; i++) {

						$( this ).append( ( i == 0 ? '' : ' ' ) + '<span>' + words[i] + '</span>');

					}

				});

			});

			strings.find( '> span' ).each( function( i ) {

				var $this = $( this );

				setTimeout( function() {

					$this.attr( 'data-speed', speed ).addClass( 'codevz-start-fancy' );

				}, delay );

				delay += speed;

			});

		});

	};

	Codevz_Plus.title();

}( jQuery );