var covervideo = document.querySelector('.masthead-video');

if (matchMedia("(min-width: 768px)").matches) {

	if (typeof covervideo !== undefined) {
		var sources = covervideo.querySelectorAll('source');

		for (var i = 0; i < sources.length; i++) {
			var src = sources[i].getAttribute('data-vidsrc');
			sources[i].setAttribute('src', src);
		}

		updateWrapperDimensions();
		coverVid(covervideo, 1920, 1080);

		covervideo.load();
		covervideo.play();
	}
}
else {
	var posterImage = covervideo.getAttribute('poster');

	// Remove poster to disable
	covervideo.removeAttribute('poster');

	// Set poster image as a background cover image on parent element
	covervideo.parentNode.style.backgroundImage = 'url(' + posterImage + ')';
	covervideo.parentNode.style.backgroundSize = 'cover';
	covervideo.parentNode.style.backgroundPosition = 'center center';

	covervideo.parentNode.removeChild(covervideo);
}

function updateWrapperDimensions() {
	var masthead = $('.covervid-wrapper');
	var windowH = $(window).height();
	var windowW = $(window).width();

	masthead.width(windowW);
	masthead.height(windowH);
}


			