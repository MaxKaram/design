[ 'resize', 'DOMContentLoaded' ].forEach(function(e) {
	window.addEventListener(e, () => {
		let menuIcon = document.querySelector('.icon-menu-button');
		let nav = document.querySelector('.nav');

		if (window.matchMedia(`(max-width: ${nav.dataset.menuBreakpoint}px)`).matches) {
			addMobileMenu();
		} else {
			removeMobileMenu();
		}

		function addMobileMenu() {
			menuIcon.classList.add('icon-menu-button_visible');
			nav.classList.add('nav_mobile');

			menuIcon.onclick = () => {
				nav.classList.toggle('nav_mobile_open');
			};
		}

		function removeMobileMenu() {
			menuIcon.classList.remove('icon-menu-button_visible');
			nav.classList.remove('nav_mobile');
		}
	});
});