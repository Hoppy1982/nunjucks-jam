const navBar = document.querySelector('.nav-bar');
const navButton = document.querySelector('.nav-bar__menu-button');
const navItems = document.querySelector('.nav-bar__items');
const isOpen = navBar.classList.contains('open') ? true : false;
const state = {
  opening: false,
  closing: false,
  open: false,
  closed: true
}


/**
 * Only actions menu click if not in transitional state. 
 * Probably overkill but will help if need to transition 
 * from display: none.
 */
navButton.addEventListener('click', function(evt) {
  if (state.closed === true) {
    state.opening = true;
    state.closing = false;
    state.closed = false;
    state.open = false;
  }
  if (state.open === true) {
    state.closing = true;
    state.closed = false;
    state.opening = false;
    state.open = false;
  }

  if (state.opening) { navBar.classList.add('open'); }
  if (state.closing) { navBar.classList.remove('open'); }
});


/**
 * Reveals / removes menu to screen readers
 * once css transtions complete.
 */
navButton.addEventListener('transitionend', function(evt) {
  let transitionOnNavButton = evt.target === this;

  if (state.opening && transitionOnNavButton) {
    state.open = true;
    state.opening = false;
    state.closing = false;
    state.closed = false;
    this.setAttribute('aria-expanded', 'true');
    navItems.removeAttribute('aria-hidden');
  }

  if (state.closing && transitionOnNavButton) {
    state.closed = true;
    state.closing = false;
    state.opening = false;
    state.open = false;
    this.setAttribute('aria-expanded', 'false');
    navItems.setAttribute('aria-hidden', 'true')
  }
});