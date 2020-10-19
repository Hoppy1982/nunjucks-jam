const navBar = document.querySelector('.nav-bar');
const navButton = document.querySelector('.nav-bar__menu-button');
const navCats = document.querySelector('.nav-bar__categories');
const main = document.querySelector('main');
let navCatsOpenHeight;


/**
 * Toggles nav menu visually and for screen readers
 */
navButton.addEventListener('click', function(evt) {
  console.log(navCatsOpenHeight)
  if ( navBar.classList.contains('open') ) {
    navCatsOpenHeight = `${navCats.offsetHeight}px`;
    navBar.classList.remove('open');
    navBar.classList.add('closed');
    navCats.style.height = '854px';
    navCats.setAttribute('aria-hidden', 'true');
    this.setAttribute('aria-expanded', 'false');
  }
  else {
    navBar.classList.remove('closed');
    navBar.classList.add('open');
    main.classList.remove('open');
    main.classList.add('closed');
    navCats.setAttribute('aria-hidden', 'false');
    this.setAttribute('aria-expanded', 'true');
  }
});


/**
 * Transition end - menu height to 0 & main to open
 */
navCats.ontransitionend = (evt) => {
  if ( evt.target === navCats && navBar.classList.contains('closed') ) {
    console.log(evt.target)
    main.classList.remove('closed');
    main.classList.add('open');
    navCats.style.height = '0px';
  }
}