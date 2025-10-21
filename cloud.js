const cloud = document.querySelector('.cloud');

let mouseX = 0, mouseY = 0;   // target positions
let currentX = 0, currentY = 0; // actual positions

// update mouse position on move
window.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// smooth animation loop using requestAnimationFrame
function animateCloud() {
  // ease towards the target
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;

  cloud.style.transform = `translate(${currentX - 35}px, ${currentY - 35}px)`; // center offset

  requestAnimationFrame(animateCloud);
}

animateCloud();
