! function( $ ) {
	"use strict";

	Codevz_Plus.share = function() {

		var body = $( document.body );

		// Share icons.
		body.on( 'click', '.xtra-share a', function() {

			var $this = $( this ), 
				href = $this.attr( 'href' );

			// Copy shortlink.
			if ( $this.find( '.fa-copy' ).length ) {

				var $temp = $( '<input>' );
				body.append( $temp );
				$temp.val( href ).select();
				document.execCommand( 'copy' );
				$temp.remove();

				var title = $this.attr( 'data-title' );
				$this.attr( 'style', 'animation: xtraCopyAbsorber .8s forwards;' ).attr( 'data-title', $this.attr( 'data-copied' ) ).delay( 2000 ).queue( function(){
					$this.removeAttr( 'style' ).attr( 'data-title', title );
				});

				return false;

			// Print modal.
			} else if ( href.indexOf( 'http' ) === 0 ) {

				window.open( href, "null", "height=300, width=600, top=200, left=200" );

				return false;
			}

		// Print.
		}).on( 'click', '.cz-print', function() {

			if ( ! $( '#print-me' ).length ) {
				body.append( '<div id=\"xtraPrint\"></div>' );
			}

			var print = $( '#xtraPrint' );

			$( '.xtra-post-title, .page_title .section_title, .cz_single_fi, .cz_post_content, .xtra-single-product' ).clone().appendTo( print );

			print.find( '.cz_single_fi' ).after( '<br />' );
			print.find( '.xtra-post-title' ).css( 'font-size', '28px' );

			body.addClass( 'xtra-printing' );

			setTimeout( function() {

				window.print();

			}, 250 );

			setTimeout( function() {

				body.removeClass( 'xtra-printing' );
				print.empty();

			}, 1000 );

		});

	};

	Codevz_Plus.share();

}( jQuery );