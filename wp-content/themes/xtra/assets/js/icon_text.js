jQuery( function( $ ) {

	$( 'header .cz_elm_info_box' ).each( function() {

		var x = $( this ),
			breakpoint = 960,
			timeout;

		if ( x.parent().parent().find( '.cz_elm_info_box' ).length > 1 ) {

			breakpoint = 1024;

		}

		$( window ).on( 'resize.icon_text', function() {

			clearTimeout( timeout );

			timeout = setTimeout( function() {

				x[ ( $( this ).width() < breakpoint ) ? 'addClass' : 'removeClass' ]( 'xtra-hide-text' );

			}, 1000 );

		});

	});

});