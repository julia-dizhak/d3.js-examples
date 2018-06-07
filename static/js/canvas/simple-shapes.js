(function() {

  const canvas = document.getElementById('canvas-simple-shapes');
  const context = canvas.getContext('2d');
  
  //context.fillStyle = '#ffc0cb';
  //context.fillRect(0, 0, canvas.width, canvas.height);
  
  context.beginPath();
  // context.arc(centerX, centerY, radius, startAngle, endAngle, isAntiClockwise);
  //context.arc(50, 50, 20, 0, Math.PI/0.5, false);

  context.arc(120, 20, 10, 0, Math.PI*2);
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
})();
