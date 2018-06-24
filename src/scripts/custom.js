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
	// MENU ORIENTATION
	/* var menu = document.getElementById('menu')
    var WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange':'resize'
	function toggleHorizontal() {
		[].forEach.call(
			document.getElementById('menu').querySelectorAll('.custom-can-transform'),
			function(el){
				el.classList.toggle('pure-menu-horizontal')
			}
		)
	}
	function toggleMenu() {
		// set timeout so that the panel has a chance to roll up before the menu switches states
		if (menu.classList.contains('open')) {
			setTimeout(toggleHorizontal, 500);
		}
		else {
			toggleHorizontal();
		}
		menu.classList.toggle('open');
		document.getElementById('toggle').classList.toggle('x');
	}
	function closeMenu() {
		if (menu.classList.contains('open')) {
			toggleMenu();
		}
	}
	document.getElementById('toggle').addEventListener('click', function (e) {
		toggleMenu()
		e.preventDefault()
	})
	window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu) */

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
})