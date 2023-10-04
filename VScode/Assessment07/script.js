
const bubbles = document.querySelectorAll('.bubble');

bubbles.forEach(bubble => {
    const container = document.querySelector('.container');
    const maxWidth = container.clientWidth - bubble.clientWidth;
    const maxHeight = container.clientHeight - bubble.clientHeight;

    const randomX = Math.random() * maxWidth*100;
    const randomY = Math.random() * maxHeight*100;

    bubble.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
  

setInterval(randomPosition, 1000);