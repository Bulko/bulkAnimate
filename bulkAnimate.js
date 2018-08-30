/**
 * BulkAnimate is a plugin inspirated by animateLoading under WTFPL
 *
 * @licence WTFPL 2018
 * @author Golga <r-ro@bulko.net> for Bulko
 *
 * Dependecies
 * ES6, Jquery 1 || 2 || 3
 *
 * Optional Dependecies
 * Animate.css
 * 
 * How to use it
 *
 * In your main js file import this file
 * `import BulkAnimate from './{YOUR-PATH}/bulkAnimate';`
 * 
 * Then init this plugin in your document.ready (or ready function for turbolinks users)
 * `let bulkAnimate = new BulkAnimate();`
 * `bulkAnimate.init([
 * 		[ ".element-selector", "animation-class", optional-delay ],
 * 		[ ".element-selector", "animation-class", optional-delay ],
 * 		[ ".element-selector", "animation-class" ],
 * 	]);
 */

// import bulkLazyload;

export default class BulkAnimate {
	init( animation )
	{
		const bulkAnimate = this;
		setTimeout(function()
		{
			bulkAnimate.setAnimationList( animation );
		}, 500);

		$(window).scroll(function() {
			bulkAnimate.setAnimationList( animation );
		});
		$(window).on('hashchange', function (e) {
			bulkAnimate.setAnimationList( animation );
		});
	}

	setAnimationList( animation )
	{
		for ( let i = 0; i < animation.length; i++ )
		{
			this.animatedLoading( animation[i][0], animation[i][1], animation[i][2] );
		}
		return true;
	}

	resetAnimationList( animation )
	{
		for ( let i = 0; i < animation.length; i++ )
		{
			this.resetAnimation( animation[i][0], animation[i][1] );
		}
		return true;
	}

	resetAnimation( elem, animation )
	{
		$(elem).css('visibility', 'hidden');
		$(elem).removeClass('animated');
		$(elem).removeClass(animation);
	}

	animatedLoading( elem, animation, tempo )
	{
		tempo = tempo || 500;
		if ( $(elem).css('visibility') == 'hidden' && this.checkVisible( elem ) && !$(elem).hasClass( 'animated' ) )
		{
			let it = 0;
			$(elem).each(function()
			{
				let $elemToLoad = $(this);
				setTimeout(function()
				{
					if ( typeof window.bulkLazyload.loadwithlazyiness === "function" )
					{
						window.bulkLazyload.loadwithlazyiness();
					}
					$elemToLoad.css({ "visibility" : "visible" });
					$elemToLoad.addClass( 'animated ' + animation );
				}, tempo * it );
				it ++;
			});
		}
	}

	/**
	 * @author Golga <r-ro@bulko.net>
	 * @since Legacy
	 *
	 * @param String elem (selector)
	 * @param String evalType
	 * @return Bool
	 */
	checkVisible( elem, evalType )
	{
		evalType = evalType || "visible";

		let vpH = $(window).height(), // Viewport Height
			st = $(window).scrollTop(), // Scroll Top
			y = $(elem).offset().top,
			elementHeight = $(elem).height();
		if ( evalType === "visible" )
		{
			return ( ( y < ( vpH + st ) ) && ( y > ( st - elementHeight ) ) );
		}
		else if ( evalType === "above" )
		{
			return ( ( y < ( vpH + st ) ) );
		}
		return false;
	}
}
