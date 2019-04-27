$(function() {

		$('#menu-bars').on('click', function() {
			
			$('header').clone().appendTo($('#popup-menu'));

			$('#popup-menu #logo').attr({'id':'mob-logo'});
			$('#popup-menu #menu-bars').attr({'id':'mob-bars'});

			$('#popup-menu #mob-bars').html('<i class="fa fa-times"></i>').css({
				'font-size': '26px',
				'color': '#000',
				'cursor': 'pointer',
				'position': 'absolute',
				'left': '25px',
				'top': '15px'
			});
			$('#popup-menu .fixed-container').css({
				'margin': '0'
			});
			$('#popup-menu header').css({
				'background-color': 'rgba(0, 0, 0, 0.75)',
				'width': '100%',
   				'height': '100%',
   				'position': 'fixed',
   				'left': '0',
   				'top': '0',
   				'z-index': '1'
			});
			$('#popup-menu header .fixed-container').css({
				'background-color': '#FFF',
				'align-items': 'flex-start',
				'width': '320px',
				'height': '575px'
			});
			$('#popup-menu #mob-logo').css({
				'content': 'url("img/mob-logo.png")',
				'position': 'absolute',
				'left': '70px',
				'top': '17px'
			});
			$('#popup-menu #city-select').css({'display': 'none'});
			$('#popup-menu #weather').css({'display': 'none'});
			$('#popup-menu input[name="search"]').css({'display': 'none'});
			$('#popup-menu .fixed-container button').css({
				'top': '10px',
				'right': '20px'
			});
			$('#popup-menu #menu-container').css({
				'display': 'block',
				'top': '60px',
				'width': '100%',
				'box-shadow': 'inset 0 5px 15px -2px rgba(221, 221, 221, 1)'
			});
			$('#popup-menu #menu-container > ul').css({
				'list-style': 'list-style-type',
				'margin': '20px'
			});
			$('#popup-menu #menu-container > ul > li').css({
				'display': 'block',
				'font-size': '16px',
				'border-bottom': '1px solid #E5E5E5',
				'padding': '10px 0'				
			});
			$('#popup-menu #menu-container > ul > li:last-child').css({
				'border-bottom': 'none'			
			});
			$('#popup-menu #menu-container > ul > li > span').css({'display': 'none'});
		});

	window.onclick = function(event) {
		if(event.target.tagName == 'HEADER' || event.target.className == 'fa fa-times') {
			$('#popup-menu header').remove();			
		}
		console.log(event);	
	}
});