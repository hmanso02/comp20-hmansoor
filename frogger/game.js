//Function to start the game
function start_game(){
  //initializing all the variables for the game
  init_parameters(); 
  //calling the function to draw the game layout
  draw();
}

//Function to initiaize the game parameters
function init_parameters(){
  //initializing all the variables for the game
  num_lives = 3;
  num_level = 1;  
  is_game_over = false;
  time = 0;
  x_coord_frog = 170;
  y_coord_frog = 490;
  score = 0;
  highscore = 0;
  veh_loc = ([90, 380], [70, 330]);
  log_log = ([50, 200]);
  veh_speed = (10, 20);
  log_speed = (10);
}

//Function to draw the game layout
function draw(){
  //getting the canvas
  image = document.getElementById('game');
  //drawing the water and the roads
  ctx = image.getContext("2d");
  ctx.fillStyle = "#191970";
  ctx.fillRect(1, 2, 398, 276);
  ctx.fillStyle = "#000000";
  ctx.fillRect(1, 312, 398, 176);
  ctx.fillRect(1, 522, 398, 41);
  image = document.getElementById('game').getContext('2d');
  //drawing the title
  image.drawImage(document.getElementById('source'), 1, 1, 398, 115, 1, 1, 398, 115);
  //drawing the pavements
  image.drawImage(document.getElementById('source'), 1, 118, 398, 40, 1, 277, 398, 40);
  image.drawImage(document.getElementById('source'), 1, 118, 398, 40, 1, 487, 398, 40);
  //drawing the log
  image.drawImage(document.getElementById('source'), 3, 165, 184, 30, 50, 200, 184, 30);
  //drawing the vehicles
  image.drawImage(document.getElementById('source'), 3, 265, 40, 30, 70, 330, 40, 30);
  image.drawImage(document.getElementById('source'), 3, 300, 36, 30, 90, 380, 36, 30);
  //drawing the frog on the pavement
  image.drawImage(document.getElementById('source'), 3, 362, 30, 28, 170, 490, 30, 30);
  //including the text for level, score and highscore 
  image.fillStyle = "#01fe08";
  image.font = "bold 25px Arial";
  image.fillText("Level "+num_level, 54, 542);
  image.font = "bold 14px Arial";
  image.fillText("Score: "+score, 2, 558);
  image.font = "bold 14px Arial";
  image.fillText("Highscore: "+highscore, 68, 558);
  image.font = "bold 14px Arial";
  
  //drawing the remaining frog lives
  image.drawImage(document.getElementById('source'), 8, 330, 33, 27, 15, 520, 25, 20);
  image.drawImage(document.getElementById('source'), 8, 330, 33, 27, 0, 520, 25, 20);
}
