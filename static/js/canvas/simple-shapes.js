(function() {
  const canvas = document.getElementById('canvas-simple-shapes');
  const context = canvas.getContext('2d');
  
  //context.fillStyle = '#ffc0cb';
  //context.fillRect(0, 0, canvas.width, canvas.height);
  
  context.beginPath();
  // context.arc(centerX, centerY, radius, startAngle, endAngle, isAntiClockwise);
  //context.arc(50, 50, 20, 0, Math.PI/0.5, false);
  context.arc(110, 120, 10, 0, Math.PI*2);
  context.fillStyle = 'rebeccaPurple'; 
  context.fill(); 
  context.closePath();

  context.beginPath();
  context.arc(20, 120, 10, 0, Math.PI*2);
  context.strokeStyle = 'pink'; 
  context.lineWidth = '10'; 
  context.stroke();
  context.closePath();

  // 1 radian = 57.2957795 degrees
  // var radians = (Math.PI/180) * degrees;

  // draw a piece of pie
  context.beginPath();
  context.moveTo(90, 70);
  context.lineTo(90, 20);
  context.arcTo(150, 20, 150, 70, 50);
  context.lineTo(100, 70);
  //context.strokeStyle = 'black'; 
  context.lineWidth = '1'; 
  context.fillStyle = 'black'; 
 // context.stroke();
  context.fill();
  context.closePath();

// let i = 0;
// function loopIt() {
//   if(i++ < Math.PI*2) {
//     drawPurpleCircle(i);
//   } else {
//     i = 0;
//     context.clearRect(0, 0, 500, 500);
//     setTimeout(loopIt, 400);
//   }
// }
// loopIt();

// function drawPurpleCircle(i) {
//   context.beginPath();
//   context.arc(100, 70, 50, 0, i);
//   context.fillStyle = "rebeccaPurple";
//   context.fill();
//   context.closePath();
//   setTimeout(loopIt, 400); 
// }



})();

(function() {
  const canvas = document.getElementById('canvas-simple-shapes');
  const context = canvas.getContext('2d');
  const coords = document.querySelector('.js-dislay-coords');
  console.log(coords);

  context.fillStyle = 'red'; 
  context.fillRect(0, 0, canvas.width - 150, canvas.height - 150);

  const getCoords = (event) => {
    const container = canvas.getBoundingClientRect();
    const x = (event.clientX - container.left);
    const y = (event.clientY - container.top);

    coords.textContent = `${x}, ${y}`;
  }

  canvas.addEventListener('click', getCoords);
})();  