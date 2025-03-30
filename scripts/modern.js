// Intersection Observer for the first animation (Mario, Ink, Game Background)
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Element is in view');
      const marioElement = document.getElementById('marioAn');
      const inkElement = document.getElementById('inkAn');
      const gamebg = document.getElementById('mkbg');
      
      marioElement.classList.add('animate-mario');
      inkElement.classList.add('animate-ink');
      gamebg.classList.add('visible-gamebg');
      
      observer.unobserve(entry.target); // Stop observing once the effect is applied
    } else {
      const gamebg = document.getElementById('mkbg');
      gamebg.classList.remove('visible-gamebg');
      console.log('Element is out of view, removing class');
    }
  });
}, { threshold: 0 });

const detectorElement = document.getElementById('detector1');
observer.observe(detectorElement);


// Mouse Movement for Eye Element
const container = document.querySelector('.eyecont');
const image = document.querySelector('.eye');
let prevX = 0;
let prevY = 0;

container.addEventListener('mousemove', (event) => {
  const containerRect = container.getBoundingClientRect();
  const mouseX = event.clientX - containerRect.left;
  const mouseY = event.clientY - containerRect.top;
  
  // Calculate the angle to rotate the eye image
  const angle = Math.atan2(mouseY - prevY, mouseX - prevX); 
  const angleDeg = angle * (180 / Math.PI) - 90; 

  // Position the image and apply the rotation
  image.style.left = `${mouseX - image.width / 2}px`; 
  image.style.top = `${mouseY - image.height / 2}px`;  
  image.style.transform = `rotate(${angleDeg}deg)`; 

  // Update previous mouse position
  prevX = mouseX;
  prevY = mouseY;
});


// Buny Animation (Moves and Jumps)
const buny = document.querySelector('.bunyop');
let moves = 0;

function move() {
  if (moves < 10) {
    moves++;
    const moveLeft = 50 * moves + 120;
    
    buny.style.transition = 'left 1s ease-in-out'; 
    buny.style.left = `${moveLeft}px`; 
    
    setTimeout(move, 1000);
  } else {
    buny.style.animation = 'jump 1s ease-in-out';
    
    // Hide the element after the animation ends
    buny.addEventListener('animationend', () => {
      buny.style.display = 'none';
    });
  }
}

// Intersection Observer for Buny Movement
const moveObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      move();
      observer.unobserve(entry.target); // Stop observing once move starts
    }
  });
}, { threshold: 0.5 });

const detector2 = document.getElementById('detector2');
moveObserver.observe(detector2);


const inkObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Element is in view!');
      const galElement = document.getElementById('gal');
      const hydElement = document.getElementById('hyd');
      
      galElement.classList.add('animate-gal');
      hydElement.classList.add('animate-hyd');
      
      observer.unobserve(entry.target);
    } else {
      console.log('Element is out of view...');
    }
  });
}, { threshold: 0 });

const detectorThreeElement = document.getElementById('detectorthree');
inkObserver.observe(detectorThreeElement);
