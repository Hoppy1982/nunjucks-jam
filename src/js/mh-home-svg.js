const mhHome = document.getElementById('mh-home');
const smallML4 = document.querySelector('#mh-home #small-m #line4');
const animations = [
  { el: smallML4, attr: 'x1', val0: 25, val1: 5, duration: 3000, tFn: tFnLinear },
  { el: smallML4, attr: 'y1', val0: 123, val1: 88, duration: 3000, tFn: tFnLinear },
  { el: smallML4, attr: 'x2', val0: 25, val1: 90, duration: 3000, tFn: tFnLinear },
  { el: smallML4, attr: 'y2', val0: 25, val1: 5, duration: 3000, tFn: tFnLinear },
]


mhHome.addEventListener('mouseenter', (evt) => {
  animations.forEach(animation => {
    animateAttr(animation.el, animation.attr, animation.val0, animation.val1, animation.duration, animation.tFn);
  });
});


mhHome.addEventListener('mouseleave', (evt) => {
  //const ani = animations[0];
  //animateAttr(ani.el, ani.attr, ani.val1, ani.val0, ani.duration, ani.tFn);
});


function animateAttr(el, attr, val0, val1, duration, tFn) {
  const nSteps = duration / 16.67;
  const isStartValLower = val0 < val1 ? true : false;
  const spread = isStartValLower ? val1 - val0 : val0 - val1;
  let start;
  
  function update(timestamp) {
    if (start === undefined) {
      start = timestamp;
    }
    
    // do the change
    const elapsed = timestamp - start;
    let currVal = el.getAttribute(attr);
    let currValNum = parseFloat(currVal);
    let fractionComplete = Math.abs( (currValNum - val0) / spread );
    let newValNum;

    if (isStartValLower) {
      newValNum = currValNum + 0.8;
    } else {
      newValNum = currValNum - 0.8;
    }

    let newVal = newValNum.toString();
    el.setAttribute(attr, newVal);

    if (fractionComplete < 1) {
      window.requestAnimationFrame(update);
    }
  }

  window.requestAnimationFrame(update);
}


function tFnLinear(timeFraction) {
  return timeFraction;
}
