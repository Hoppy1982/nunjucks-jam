const mhHome = document.getElementById('mh-home');
const smallML4 = document.querySelector('#mh-home #small-m #line4');

/**
 * progress often written as 'k' in timing function tutorials.
 * range is calculated once.
 * TODO - Possibly, include start & end time for each animation?
 */
const animatingCoords = [
  { el: smallML4, attr: 'x1', val0: 25,   val1: 5,  range: null, progress: 0 },
  { el: smallML4, attr: 'y1', val0: 123,  val1: 88, range: null, progress: 0 },
  { el: smallML4, attr: 'x2', val0: 25,   val1: 90, range: null, progress: 0 },
  { el: smallML4, attr: 'y2', val0: 25,   val1: 5,  range: null, progress: 0 },
]
animatingCoords.forEach(coord => {
  coord.range = coord.val1 - coord.val0;
});


/**
 * temp
 */
let currFrame = 0;
let requestID = null;
let direction = null;


/**
 * step
 */
function step() {
  if (start === undefined) {
    start = timestamp;
  }

  let elapsed = timestamp - start;
  currFrame +=1;

  currFrame += direction;
  let progress = currFrame / nFrames; 

  // do the things
  animatingCoords[0];
  

  if (currFrame % nFrames === 0) {
    stopAnimation();
    return;
  }

  requestID = requestAnimationFrame(step);
}


/**
 * stopAnimation
 */
function stopAnimation() {
  cancelAnimationFrame(requestID);
  requestID = null;  
}


mhHome.addEventListener('mouseenter', (evt) => {
  if(requestID) stopAnimation();
  direction = 1;
  updateCoords(animatingCoords);
}, false);


/*
const animations = [
  { el: smallML4, attr: 'x1', val0: 25, val1: 5, duration: 6000, tFn: tFnEaseIn },
  { el: smallML4, attr: 'y1', val0: 123, val1: 88, duration: 6000, tFn: tFnEaseIn },
  { el: smallML4, attr: 'x2', val0: 25, val1: 90, duration: 6000, tFn: tFnEaseIn },
  { el: smallML4, attr: 'y2', val0: 25, val1: 5, duration: 6000, tFn: tFnEaseIn },
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
  const deltaPct = 16.67 / duration
  const isStartValLower = val0 < val1 ? true : false;
  const spread = isStartValLower ? val1 - val0 : val0 - val1;
  
  function update(timestamp) {
    let start;
    if (start === undefined) {
      start = timestamp;
    }
    const elapsed = timestamp - start;
    let currVal = el.getAttribute(attr);
    let currValNum = parseFloat(currVal);
    let fractionComplete = Math.abs( (currValNum - val0) / spread );
    fractionComplete += deltaPct;
    if (fractionComplete > 1) {
      fractionComplete = 1;
    }
    let newValNum;
    console.log(fractionComplete)

    if (isStartValLower) {
      newValNum = val0 + ( spread * tFn(fractionComplete) );
    } else {
      newValNum = val0 - ( spread * tFn(fractionComplete) );
    }

    let newVal = newValNum.toString();
    el.setAttribute(attr, newVal);

    if (fractionComplete < 1) {
      window.requestAnimationFrame(update);
    }
  }

  window.requestAnimationFrame(update);
}
*/

// Timing functions
function tFnLinear(timeFraction) {
  return timeFraction;
}

function tFnEaseIn(timeFraction) {
  return Math.pow(timeFraction, 1.675);
}

function tFnEaseOut(timeFraction) {
  return 1 - Math.pow(1 - timeFraction, 1.675);
}

function tFnEaseInOut(timeFraction) {
  return .5*(Math.sin((timeFraction - .5)*Math.PI) + 1);
}






