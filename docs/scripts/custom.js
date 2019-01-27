/*
Author: Corey Birnbaum
Copyright 2018 CastleTech LLC
Licensed under the MIT License
*/
$('#copy-year').text(function(i, content) {
	var y = (new Date).getFullYear()
	if (y === 2018) return y
	return '2018 - ' + y
})

$('#navlist').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '.pure-menu-link',
	easing: 'swing',
	begin: function() {
		// hack so you can click other menu items after the initial click
		$('body').append('<div id="device-dummy" style="height: 1px;"></div>');
	},
	end: function() {
		$('#device-dummy').remove();
	}
})

$(document).ready(function() {
	// MENU AFFIX
	var ready = true
	var target = $('.navbar')
	function update() {
		if (window.scrollY > 0) {
			target.toggleClass('navbar--hover', true)
		}
		else {
			target.toggleClass('navbar--hover', false)
		}
		ready = true
	}
	function requestTick() {
		if (ready) {
			requestAnimationFrame(update)
		}
		ready = false
	}
	window.addEventListener('scroll', requestTick)
	update()
})