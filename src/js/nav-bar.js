const navBar = document.querySelector('.nav-bar');
const navButton = document.querySelector('.nav-bar__menu-button');
const navItems = document.querySelector('.nav-bar__categories');


/**
 * Toggles nav menu visually and for screen readers
 */
navButton.addEventListener('click', function(evt) {
  if ( navBar.classList.contains('open') ) {
    navBar.classList.remove('open');
    navBar.classList.add('closed');
    navItems.setAttribute('aria-hidden', 'true');
    this.setAttribute('aria-expanded', 'false');
  }
  else {
    navBar.classList.remove('closed');
    navBar.classList.add('open');
    navItems.setAttribute('aria-hidden', 'false');
    this.setAttribute('aria-expanded', 'true');
  }
});
