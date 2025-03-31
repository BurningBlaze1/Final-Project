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
      
      observer.unobserve(entry.target); 
    } else {
      const gamebg = document.getElementById('mkbg');
      gamebg.classList.remove('visible-gamebg');
      console.log('Element is out of view, removing class');
    }
  });
}, { threshold: 0 });

const detectorElement = document.getElementById('detector1');
observer.observe(detectorElement);

const container = document.querySelector('.eyecont');
const image = document.querySelector('.eye');
let prevX = 0;
let prevY = 0;

container.addEventListener('mousemove', (event) => {
  const containerRect = container.getBoundingClientRect();
  const mouseX = event.clientX - containerRect.left;
  const mouseY = event.clientY - containerRect.top;
  
  const angle = Math.atan2(mouseY - prevY, mouseX - prevX); 
  const angleDeg = angle * (180 / Math.PI) - 90; 

  image.style.left = `${mouseX - image.width / 2}px`; 
  image.style.top = `${mouseY - image.height / 2}px`;  
  image.style.transform = `rotate(${angleDeg}deg)`; 

  prevX = mouseX;
  prevY = mouseY;
});

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
    
    buny.addEventListener('animationend', () => {
      buny.style.display = 'none';
    });
  }
}

const moveObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      move();
      observer.unobserve(entry.target);
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

const box = document.getElementById('splatbox');

const splatImages = [
  'images/modern/splat/1.png',
  'images/modern/splat/2.png',
  'images/modern/splat/3.png',
  'images/modern/splat/4.png',
  'images/modern/splat/5.png',
  'images/modern/splat/6.png',
];

function addSplat(event) {
  const boxRect = box.getBoundingClientRect();
  const mouseX = event.clientX - boxRect.left - 100; 
  const mouseY = event.clientY - boxRect.top - 300;  

  const splat = document.createElement('img');

  const randomIndex = Math.floor(Math.random() * splatImages.length);
  splat.src = splatImages[randomIndex];

  splat.alt = 'splat';
  splat.classList.add('splat');

  splat.style.left = `${mouseX}px`; 
  splat.style.top = `${mouseY + 5500}px`;

  box.appendChild(splat);
}

box.addEventListener('click', addSplat); 
