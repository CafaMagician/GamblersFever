$ = jQuery;
var iframe_source = '';

$(document).ready(function(){
	console.log('testing');
	iframe_source = $('.iframe-with-thumb').find('iframe').attr('src');
	$('.iframe-with-thumb').find('iframe').attr('src','');
	var click_counter = 0;
	$('.iframe-playforfree').click(function(){
		$('.overlay-bg').hide();
		$('.iframe-overlay').hide();
		$('.iframe-bg').hide();
		$('.iframe-buttons').hide();
		$('.iframe-notice').hide();
		if(click_counter == 0){
			$('.iframe-with-thumb').find('iframe').attr('src',iframe_source);
		}
		click_counter++;
		setTimeout(function(){
			console.log('test');
			$('.iframe-overlay').hide();
			$('.iframe-bg').hide();
			$('.iframe-buttons').hide();
			$('.iframe-notice').hide();
			
			$('.iframe-overlay').show();
			$('.overlay-bg').show();
			$('.iframe-buttons').show();
			$('.iframe-notice').show();
			let slot_name = $('.slot-name').html();
			$('.warning').remove();
			$('.iframe-buttons').prepend('<h3 class="warning">We see you\'re enjoying ' + slot_name + '.<br/>Would you like to start playing for real money?</h3>');
			$('.iframe-playforfree').html('CONTINUE PLAYING FOR FREE');
			$('.iframe-playforreal').html('START PLAYING FOR REAL');
		},100000);
	});

	$('.news-anim').hover(function(){
		console.log('test');
		$(this).find('.show-layer').show();
		$(this).closest('.col-1-3').find('h2 > a').css('color','#333');
	});
	
	$('.latest-review-nav > li').hover(function(){
		$(this).find('.latest-review-nav-right > a').css('color','#333');
	});

	$('.latest-review-nav > li').mouseleave(function(){
		$(this).find('.latest-review-nav-right > a').css('color','initial');
	});
	
	$('.news-anim').mouseleave(function(){
		console.log('test');
		$('.show-layer').hide();
		$(this).closest('.latest-news').find('h2 > a').css('color','initial');
	});	
});
