let mobileNav = document.getElementById('mobile-nav');
const showMobileMenu = () => {
	if (mobileNav.style.display === 'block') {
		mobileNav.style.display = 'none';
	} else {
		mobileNav.style.display = 'block';
	}
};

mobileNav.addEventListener('click', () => {
	mobileNav.style.display = 'none';
});
