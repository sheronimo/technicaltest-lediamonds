// Navigation
const primaryNav = document.querySelector('#primary-nav');
const toggle = document.querySelector('#nav-toggle');

toggle.addEventListener('click', () => {
	primaryNav.classList.toggle('visible');

	primaryNav.classList.contains('visible')
		? toggle.setAttribute('aria-expanded', true)
		: toggle.setAttribute('aria-expanded', false);
});
