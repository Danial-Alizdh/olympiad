jQuery( window ).on( 'elementor/frontend/init', function() {

	// Extend elementor frontend handlers base.
	class XtraElementor extends elementorModules.frontend.handlers.Base {

		onInit( name, event ) {
			this.onElementChange( '', this.getWidgetType() );
		};

		// On element changes.
		onElementChange( name, event ) {

			// Get widget name.
			var widget = name ? event._parent.model.attributes.widgetType : event;

			// Check XTRA widget.
			if ( widget && widget.indexOf( 'cz_' ) == 0 && name.indexOf( 'sk_' ) < 0 ) {

				// Replace prefix.
				widget = widget.replace( 'cz_', '' );

				//if ( widget === '360_degree' ) {
				//	widget = 'r360degree';
				//}

				// re-init codevz function.
				setTimeout( function() {

					typeof Codevz_Plus.css != 'undefined' && Codevz_Plus.css();
					typeof Codevz_Plus[ widget ] != 'undefined' && Codevz_Plus[ widget ]();
					typeof Codevz_Plus.parallax != 'undefined' && Codevz_Plus.parallax();
					typeof Codevz_Plus.tilt != 'undefined' && Codevz_Plus.tilt();

				}, 150 );

			}

		}

	}

	// Enable live changes on elements.
	elementorFrontend.hooks.addAction( 'frontend/element_ready/widget', function( $element ) {

		elementorFrontend.elementsHandler.addHandler( XtraElementor, { $element } );

	} );

});

// Live widget tilt.
function xtraElementorTilt( settings ) {

	var tilt = '';

	if ( settings.tilt ) {

		tilt = ' data-tilt';
		tilt = tilt + ( settings.glare ? ' data-tilt-maxGlare="' + settings.glare + '" data-tilt-glare="true"' : '' );
		tilt = tilt + ( settings.scale ? ' data-tilt-scale="' + settings.scale + '"' : '' );

	}

	return tilt;

}

// Live widget parallax.
function xtraElementorParallax( settings, close ) {

	var html = '';

	if ( close ) {

		if ( pm ) {
			html += '</div>';
		}

		if ( ph ) {
			html += '</div>';
		}

	} else {

		// Parallax.
		var ph = settings.parallax ? settings.parallax : '',
			pp = settings.parallax_speed ? settings.parallax_speed : '',
			pp = pp + ( settings.parallax_stop ? ' cz_parallax_stop' : '' ),
			pm = settings.mouse_speed && ph.includes( 'mouse' );

		if ( pm ) {
			html += '<div class="cz_mparallax_' + settings.mouse_speed + '">';
		}

		if ( ph ) {

			var d = ( ph == 'true' || ph === 'truemouse' ) ? 'h' : 'v';
			html += '<div class="clr cz_parallax_' + d + '_' + pp + '">';

		}

	}

	return html;

}