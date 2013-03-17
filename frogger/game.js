//Data for all the vehicles going left
vehicles_l = [ 
              {"veh": { "x": 330, "y": 315, "x_sprite": 10, "y_sprite": 266, "sw": 27, "sh": 19, "w": 27, "h": 29}}, 
              {"veh": { "x": 200, "y": 315, "x_sprite": 10, "y_sprite": 266, "sw": 27, "sh": 19, "w": 27, "h": 29}}, 
              {"veh": { "x": 70, "y": 315, "x_sprite": 10, "y_sprite": 266, "sw": 27, "sh": 19, "w": 27, "h": 29}}, 
              {"veh": { "x": 280, "y": 387, "x_sprite": 106, "y_sprite": 302, "sw": 46, "sh": 18, "w": 46, "h": 29}}, 
              {"veh": { "x": 150, "y": 387, "x_sprite": 106, "y_sprite": 302, "sw": 46, "sh": 18, "w": 46, "h": 29}}, 
              {"veh": { "x": 20, "y": 387, "x_sprite": 106, "y_sprite": 302, "sw": 46, "sh": 18, "w": 46, "h": 29}},  
              {"veh": { "x": 320, "y": 459, "x_sprite": 10, "y_sprite": 266, "sw": 27, "sh": 19, "w": 27, "h": 29}},
              {"veh": { "x": 170, "y": 459, "x_sprite": 10, "y_sprite": 266, "sw": 27, "sh": 19, "w": 27, "h": 29}}, 
              {"veh": { "x": 20, "y": 459, "x_sprite": 10, "y_sprite": 266, "sw": 27, "sh": 19, "w": 27, "h": 29}}
             ]
//Data for all the vehicles going right
vehicles_r = [
              {"veh": { "x": 250, "y": 351, "x_sprite": 10, "y_sprite": 300, "sw": 26, "sh": 22, "w": 26, "h": 29}}, 
              {"veh": { "x": 140, "y": 351, "x_sprite": 10, "y_sprite": 300, "sw": 26, "sh": 22, "w": 26, "h": 29}}, 
              {"veh": { "x": 30, "y": 351, "x_sprite": 10, "y_sprite": 300, "sw": 26, "sh": 22, "w": 26, "h": 29}}, 
              {"veh": { "x": 350, "y": 423, "x_sprite": 82, "y_sprite": 264, "sw": 24, "sh": 26, "w": 24, "h": 29}}, 
              {"veh": { "x": 220, "y": 423, "x_sprite": 82, "y_sprite": 264, "sw": 24, "sh": 26, "w": 24, "h": 29}}, 
              {"veh": { "x": 90, "y": 423, "x_sprite": 82, "y_sprite": 264, "sw": 24, "sh": 26, "w": 24, "h": 29}} 
             ]
//Data for all the logs. All logs are going left
logs =       [
              {"log": { "x": 10, "y": 98, "x_sprite": 7, "y_sprite": 197, "sw": 117, "sh": 20, "w": 117, "h": 30}},
              {"log": { "x": 230, "y": 98, "x_sprite": 7, "y_sprite": 197, "sw": 117, "sh": 20, "w": 117, "h": 30}},
              {"log": { "x": 50, "y": 170, "x_sprite": 7, "y_sprite": 230, "sw": 86, "sh": 20, "w": 86, "h": 30}},
              {"log": { "x": 250, "y": 170, "x_sprite": 7, "y_sprite": 230, "sw": 86, "sh": 20, "w": 86, "h": 30}},
              {"log": { "x": 350, "y": 242, "x_sprite": 7, "y_sprite": 166, "sw": 179, "sh": 20, "w": 179, "h": 30}},
              {"log": { "x": 50, "y": 242, "x_sprite": 7, "y_sprite": 166, "sw": 179, "sh": 20, "w": 179, "h": 30}}
             ]
//Data for all the turtles. All logs are going right
turtles =    [
              {"turtle": { "x": 10, "y": 134, "x_sprite": 13, "y_sprite": 406, "sw": 111, "sh": 22, "w": 111, "h": 30}},
              {"turtle": { "x": 210, "y": 134, "x_sprite": 13, "y_sprite": 406, "sw": 111, "sh": 22, "w": 111, "h": 30}},
              {"turtle": { "x": 90, "y": 206, "x_sprite": 13, "y_sprite": 406, "sw": 111, "sh": 22, "w": 111, "h": 30}},
              {"turtle": { "x": 290, "y": 206, "x_sprite": 13, "y_sprite": 406, "sw": 111, "sh": 22, "w": 111, "h": 30}}
             ]
//Data for a snake that will appear randomly on logs
snake =       {"sn" :{ "x": 290, "y": 206, "x_sprite": 184, "y_sprite": 251, "sw": 39, "sh": 14, "w": 39, "h": 25}}
//Data for the goal squares where the frogs need to go
goal_sq =    [
              { "x": 13, "y": 65, "w": 28, "h": 28, "is_occupied": 0},
              { "x": 97, "y": 65, "w": 28, "h": 28, "is_occupied": 0},
              { "x": 182, "y": 65, "w": 28, "h": 28, "is_occupied": 0},
              { "x": 267, "y": 65, "w": 28, "h": 28, "is_occupied": 0},
              { "x": 352, "y": 65, "w": 28, "h": 28, "is_occupied": 0}
             ]  
//Function to initiaize the game parameters
function init_parameters(){
  //initializing all the variables for the game
  num_lives = 4;
  num_level = 1;  
  is_game_over = false;
  time = 200;
  speed_veh_l = 20;
  speed_veh_r = 20;
  speed_log = 30;
  x_coord_frog = 154;
  y_coord_frog = 492;
  num_of_l_veh = 6;
  score = 0;
  highscore = 0;
  rand_snake = Math.floor((Math.random()*3) + 1);
  img = new Image();
  img.src = "assets/frogger_sprites.png";
  image = document.getElementById('game').getContext('2d');
  //All the sound effects
  game_over = new Audio('assets/game_over.wav');
  reached_home = new Audio('assets/success.wav');
  level_up = new Audio('assets/level_up.wav');
  death = new Audio('assets/death.wav');
  motion = new Audio('assets/motion.wav');
}
//Function to mobilize the cars going left. Contains a call to 
//detection function to detect any collisions with the frog
function mobilize_veh_l(){  
  for (i = 0; i < vehicles_l.length; i++){
    vehicles_l[i]['veh']['x']--;
    if (vehicles_l[i]['veh']['x'] == -vehicles_l[i]['veh']['w']){
      vehicles_l[i]['veh']['x'] = 398;
    }
    detection(vehicles_l[i]['veh']['x'], vehicles_l[i]['veh']['y'], vehicles_l[i]['veh']['w'])
  }
}
//Function to mobilize the cars going right. Contains a call to 
//detection function to detect any collisions with the frog
function mobilize_veh_r(){  
  for (i = 0; i < vehicles_r.length; i++){
    vehicles_r[i]['veh']['x']++;
    if (vehicles_r[i]['veh']['x'] == 398){
      vehicles_r[i]['veh']['x'] = -vehicles_r[i]['veh']['w'];
    }
    detection(vehicles_r[i]['veh']['x'], vehicles_r[i]['veh']['y'], vehicles_r[i]['veh']['w'])
  }
}
//Function to mobilize the logs. Contains a call to 
//drowing function to detect if frog is drowning
function mobilize_log(){  
  for (i = 0; i < logs.length; i++){
    logs[i]['log']['x']++;
    if (logs[i]['log']['x'] == 398){
      logs[i]['log']['x'] = -logs[i]['log']['w'];
    }
  }
  for (i = 0; i < turtles.length; i++){
    turtles[i]['turtle']['x']--;
    if (turtles[i]['turtle']['x'] == -turtles[i]['turtle']['w']){
      turtles[i]['turtle']['x'] = 398;
    }
  }
  is_drowning();
}
//Function to draw vehicles going left
function draw_veh_l(){
  for (i = 0; i < vehicles_l.length; i++){
    image.drawImage(img, vehicles_l[i]['veh']['x_sprite'], vehicles_l[i]['veh']['y_sprite'], vehicles_l[i]['veh']['sw'], vehicles_l[i]['veh']['sh'], vehicles_l[i]['veh']['x'], vehicles_l[i]['veh']['y'], vehicles_l[i]['veh']['w'], vehicles_l[i]['veh']['h']);
  } 
}
//Function to draw logs. Also contains a call to draw_snake().
function draw_log(){
  for (i = 0; i < logs.length; i++){
    image.drawImage(img, logs[i]['log']['x_sprite'], logs[i]['log']['y_sprite'], logs[i]['log']['sw'], logs[i]['log']['sh'], logs[i]['log']['x'], logs[i]['log']['y'], logs[i]['log']['w'], logs[i]['log']['h']);
  } 
  draw_snake();
  detection(snake['sn']['x'], snake['sn']['y'], snake['sn']['w']);
}
//Function to draw turtles
function draw_turtles(){
  for (i = 0; i < turtles.length; i++){
    image.drawImage(img, turtles[i]['turtle']['x_sprite'], turtles[i]['turtle']['y_sprite'], turtles[i]['turtle']['sw'], turtles[i]['turtle']['sh'], turtles[i]['turtle']['x'], turtles[i]['turtle']['y'], turtles[i]['turtle']['w'], turtles[i]['turtle']['h']);
  } 
}
//Function to draw vehicles going right
function draw_veh_r(){
  for (i = 0; i < vehicles_r.length; i++){
    image.drawImage(img, vehicles_r[i]['veh']['x_sprite'], vehicles_r[i]['veh']['y_sprite'], vehicles_r[i]['veh']['sw'], vehicles_r[i]['veh']['sh'], vehicles_r[i]['veh']['x'], vehicles_r[i]['veh']['y'], vehicles_r[i]['veh']['w'], vehicles_r[i]['veh']['h']);
  } 
}
//Function to draw snakes. The snake is drawn on one of the logs on
//one of the three log lanes chosen at random
function draw_snake(){
  switch(rand_snake){
    case 1:
      snake['sn']['x'] = logs[1]['log']['x'];
      snake['sn']['y'] = logs[1]['log']['y']
      image.drawImage(img, snake['sn']['x_sprite'], snake['sn']['y_sprite'], snake['sn']['sw'], snake['sn']['sh'], snake['sn']['x'], snake['sn']['y'], snake['sn']['w'], snake['sn']['h']);
      break;
    case 2:
      snake['sn']['x'] = logs[3]['log']['x'];
      snake['sn']['y'] = logs[3]['log']['y']
      image.drawImage(img, snake['sn']['x_sprite'], snake['sn']['y_sprite'], snake['sn']['sw'], snake['sn']['sh'], snake['sn']['x'], snake['sn']['y'], snake['sn']['w'], snake['sn']['h']);
      break;
    case 3:
      snake['sn']['x'] = logs[5]['log']['x'];
      snake['sn']['y'] = logs[5]['log']['y']
      image.drawImage(img, snake['sn']['x_sprite'], snake['sn']['y_sprite'], snake['sn']['sw'], snake['sn']['sh'], snake['sn']['x'], snake['sn']['y'], snake['sn']['w'], snake['sn']['h']);
      break;      
  } 
}
//Drawing the goal squares where the frog needs to reach safely
function draw_goal_sq(){
  image.fillStyle = "rgb(200,200,0)";
  for (i = 0; i < goal_sq.length; i++){
    image.fillRect (goal_sq[i]['x'], goal_sq[i]['y'], goal_sq[i]['w'], goal_sq[i]['h']);
    if (goal_sq[i]['is_occupied'] == 1){
      image.drawImage(img, 12, 362, 23, 27, goal_sq[i]['x'], goal_sq[i]['y'], 23, 30);
    } 
  }
}
//function to detect collision with vehicles
function detection(veh_x, veh_y, veh_wid){
  if(((x_coord_frog > veh_x) && (x_coord_frog < veh_x + veh_wid)) && 
     ((y_coord_frog + 10 > veh_y) && (y_coord_frog + 10 < veh_y + 30))
   ||(((x_coord_frog + 30 > veh_x) && (x_coord_frog < veh_x)) &&
     ((y_coord_frog + 10 > veh_y) && (y_coord_frog + 10 < veh_y + 30)))){
    after_collision();
  }
}
//function to detect whether the frog is drowning
function is_drowning(){
  if (y_coord_frog < 275 && y_coord_frog > 95){ //that means the frog is on the water
    is_frog_drown = 0; //boolean to check if frog should drown
    for (i = 0; i < logs.length; i++){
      if (((x_coord_frog > logs[i]['log']['x']) && (x_coord_frog < logs[i]['log']['x'] + logs[i]['log']['w'])) && 
     ((y_coord_frog + 10 > logs[i]['log']['y']) && (y_coord_frog + 10 < logs[i]['log']['y'] + 30))){
        if (x_coord_frog + 23<= 398){
          is_frog_drown = 1;
          x_coord_frog++;
        }
        else if(x_coord_frog > logs[i]['log']['x']){
          is_frog_drown = 1;          
        }
      }
    }
    for (j = 0; j < turtles.length; j++){
      if (((x_coord_frog > turtles[j]['turtle']['x']) && (x_coord_frog < turtles[j]['turtle']['x'] + turtles[j]['turtle']['w'])) && 
     ((y_coord_frog + 10 > turtles[j]['turtle']['y']) && (y_coord_frog + 10 < turtles[j]['turtle']['y'] + 30))){
        if (x_coord_frog  > 1){
          is_frog_drown = 1;
          x_coord_frog--;
        }
      }
    }
    if (is_frog_drown == 0){
     after_collision();
    }
  } 
}
//function to change the level of the player
function new_level(){
  all_occupied = 1;
  for (i = 0; i < goal_sq.length; i++){
    if (goal_sq[i]['is_occupied'] == 0){
      all_occupied = 0;
    }
  } 
  if(all_occupied == 1){
    for (j = 0; j < goal_sq.length; j++){
      goal_sq[j]['is_occupied'] = 0;
    }
    draw_goal_sq();
    score = score + 1000 + (time*10);
    num_of_l_veh++;
    vehicles_l[0]['veh']['s'] = 3;
    num_level++;
    time = 200 - 10 * num_level;
    level_up.play();
  }
}
//function to decrement time
function decrement_time(){
  time--;
}
//function to check if the frog has reached home safely
function home_col_detection(){
  if (y_coord_frog < 95){ //that means the frog is on the water
    is_frog_home = 0; //boolean to check if frog should die
    for (j = 0; j < goal_sq.length; j++){
      if (((x_coord_frog > goal_sq[j]['x']) && (x_coord_frog < goal_sq[j]['x'] + goal_sq[j]['w'])) && goal_sq[j]['is_occupied'] == 0){
        goal_sq[j]['is_occupied'] = 1;
        x_coord_frog = 154;
        y_coord_frog = 492;
        is_frog_home = 1;
        score = score + 50;
        reached_home.play();
      }
    }
    if (is_frog_home == 0){
      after_collision();     
    }
  } 
}
//function to change the coordinates of frog after death and
//reduce the number of lives and playing the death track
function after_collision(){
  death.play()
  x_coord_frog = 154;
  y_coord_frog = 492;
  num_lives--;  
}
//Function to draw the game layout
function draw(){
  //getting the canvas
  image.fillStyle = "#191970";
  image.fillRect(1, 2, 398, 276);
  image.fillStyle = "#000000";
  image.fillRect(1, 312, 398, 176);
  image.fillRect(1, 522, 398, 41);
  //drawing the title
  image.drawImage(img, 1, 1, 398, 115, 1, 1, 398, 100);
  //drawing the pavements
  image.drawImage(img, 1, 118, 398, 40, 1, 277, 398, 40);
  image.drawImage(img, 1, 118, 398, 40, 1, 487, 398, 40);
  draw_veh_l();
  draw_veh_r();
  draw_log();
  draw_turtles();
  draw_goal_sq();
  home_col_detection();
  new_level();
  //drawing the frog on the pavement
  image.drawImage(img, 12, 362, 23, 27, x_coord_frog, y_coord_frog, 23, 30);
  //including the text for level, score and highscore 
  image.fillStyle = "#01fe08";
  image.font = "bold 25px Arial";
  image.fillText("Level "+num_level, 65, 542);
  image.font = "bold 14px Arial";
  image.fillText("Score: "+score, 2, 558);
  image.font = "bold 14px Arial";
  image.fillText("Highscore: "+highscore, 87, 558);
  image.font = "bold 14px Arial";
  image.fillText("Time Remaining: "+time, 200, 558);
  image.font = "bold 14px Arial";
  if((score > 10000) && (num_lives < 3)){
    num_lives++;
  }
  if (num_lives == -1 || time == 0){
    game_over.play();
    r = confirm("Game Over!");
    if (r){
      document.location.reload(true);
    }
  }
  //drawing the remaining frog lives
  for (k = 0; k < num_lives; k++){
    image.drawImage(img, 12, 330, 33, 27, 15*k, 520, 25, 20);
  }
}
//Function to start the game
function start_game(){
  //initializing all the variables for the game
  init_parameters(); 
  //Detecting key presses amd moving the frog
  $(document).keydown(function(e){
  motion.play();
  switch(e.keyCode){
    case 37: //left stroke
      if (x_coord_frog - 30 < 0) {
        x_coord_frog=x_coord_frog ;
      }
      else{
        x_coord_frog=x_coord_frog-30;
      }
      y_coord_frog=y_coord_frog;    
      break;
    case 38: //forward stroke 
      x_coord_frog=x_coord_frog;
      if (y_coord_frog - 36 < 55) {
        y_coord_frog=y_coord_frog;
      }
      else{
        y_coord_frog=y_coord_frog-36;
      }
      score = score +10;
      break;
    case 39: //right stroke
      if (x_coord_frog + 30 > 385) {
        x_coord_frog=x_coord_frog;
      }
      else{
        x_coord_frog=x_coord_frog+30;
      }
      y_coord_frog=y_coord_frog;
      break;
    case 40: //downward stroke
      x_coord_frog=x_coord_frog;
      if (y_coord_frog + 36 > 500) { 
        y_coord_frog=y_coord_frog;
      }
      else{
        y_coord_frog=y_coord_frog+36;
      }

      break;
    }
  });
  //changing time
  setInterval(decrement_time, 1000);
  //animating game
  setInterval(mobilize_veh_l, speed_veh_l);
  setInterval(mobilize_veh_r, speed_veh_r);
  setInterval(mobilize_log, speed_log);
  setInterval(draw, 1);
}
