const observer = new IntersectionObserver(
  (entries, observer) => {
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

        const gamebg = document.getElementById('visible-mkbg');
        gamebg.classList.remove('visible-gamebg');
   console.log('Element is out of view, removing class');
      }
    });
  },
  { threshold: 0}
);

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
 
  const angleDeg = angle * (180 / Math.PI + 270);

  image.style.left = `${mouseX - image.width / 2}px`; // Center the image on the cursor
  image.style.top = `${mouseY - image.height / 2}px`;  // Center the image on the cursor
  
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
    // After all moves, add the animation and wait for it to end
    buny.style.animation = 'jump 1s ease-in-out';

    // Listen for the end of the animation to hide the element
    buny.addEventListener('animationend', function() {
      buny.style.display = 'none'; // Hide the element after the animation ends
    });
  }
}


    move();

  
