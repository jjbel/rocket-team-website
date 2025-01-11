const logo = document.getElementById('logo');

document.addEventListener('mousemove', (event) => {
  logo.style.transform = `translate(${event.pageX}px, ${event.pageY}px)`;
});
