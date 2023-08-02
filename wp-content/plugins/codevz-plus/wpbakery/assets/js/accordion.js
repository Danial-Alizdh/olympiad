! function( $ ) {
	"use strict";

	Codevz_Plus.accordion = function( wpb ) {

		wpb && $( '.cz_acc' ).removeData( 'codevz' );

		$( '.cz_acc' ).codevzPlus( 'acc', function( x ) {

			var arrows = x.data( 'arrows' );

			// Add arrows.
			x.find( '.cz_acc_open_icon, .cz_acc_close_icon' ).remove();
			x.find( '.cz_acc_child' ).append( '<i class="cz_acc_open_icon ' + arrows.open + '"></i><i class="cz_acc_close_icon ' + arrows.close + '"></i>' );

			// First open.
			if ( x.hasClass( 'cz_acc_first_open' ) ) {
				x.find( '> div > div:first' ).addClass( 'cz_isOpen' ).find( '.cz_acc_child_content' ).show();
				x.find( '> div > div:first .cz_acc_open_icon' ).hide().next( 'i' ).show();
			}

			// onClick.
			x.find( '.cz_acc_child' ).off( 'click' ).on( 'click', function( e ) {

				var dis = $( this ),
					clo = dis.closest( '.cz_acc' ),
					con = dis.next();

				if ( con.is( ':visible' ) ) {
					dis.find( '.cz_acc_open_icon' ).show().next( 'i' ).hide();
					con.slideUp().parent().removeClass( 'cz_isOpen' );
					return;
				}

				if ( ! clo.hasClass( 'cz_acc_toggle' ) ) {
					clo.find( '.cz_acc_open_icon' ).show().next( 'i' ).hide();
					clo.find( '.cz_acc_child_content' ).slideUp().parent().removeClass( 'cz_isOpen' );
				}

				dis.find( '.cz_acc_open_icon' ).hide().next('i').show();
				con.slideToggle().parent().toggleClass( 'cz_isOpen' );

				// Fix grid
				if ( con.find( '.cz_grid' ).data( 'isotope' ) ) {
					setTimeout(function() {
						con.find( '.cz_grid' ).isotope( 'layout' );
					}, 250 );
				}

				return false;

			});

		});

	};

	Codevz_Plus.accordion();

}( jQuery );