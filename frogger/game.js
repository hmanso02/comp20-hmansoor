// Your work goes here...


function start_game(){

  x = document.getElementById('game');
  var ctx = x.getContext("2d");
  ctx.fillStyle = "#191970";
  ctx.fillRect(1, 2, 398, 276);
  ctx.fillStyle = "#000000";
  ctx.fillRect(1, 312, 398, 284);
  x = document.getElementById('game').getContext('2d');
  x.drawImage(document.getElementById('source'), 1, 1, 398, 115, 1, 1, 398, 115);

  x.drawImage(document.getElementById('source'), 1, 118, 398, 40, 1, 277, 398, 40);

  x.drawImage(document.getElementById('source'), 1, 118, 398, 40, 1, 487, 398, 40);
  
}
