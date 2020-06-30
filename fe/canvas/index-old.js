const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function getRandomColor() {
  const spectr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  function getRandomSpectr() {
    return spectr[Math.round(Math.random() * 15)];
  }
  return `#${getRandomSpectr()}${getRandomSpectr()}${getRandomSpectr()}`;
}

function drawBall(e) {

  const x = e.clientX;
  const y = e.clientY;
  const radius = 100;
  const startAngle = 0;
  const endAngle = 2 * Math.PI;

  context.beginPath();
  context.arc(x, y, radius, startAngle, endAngle);
  context.fillStyle = getRandomColor();
  context.fill();
  context.endPath();
}

// setInterval(drawBall, 16);
// window.onclick = (e) => drawBall(e);
let mouseDown = false;
window.onmousedown = function() { 
  mouseDown = true;
}
window.onmouseup = function() {
  mouseDown = false;
}

window.onmousemove = (e) => {
  if(mouseDown) {
    drawBall(e);
  }
};

window.onresize = () => drawBall();