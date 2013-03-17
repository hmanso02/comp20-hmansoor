//Data for all the vehicles going left
vehicles_l = [ 
              {"veh": { "x": 330, "y": 315, "x_sprite": 10, "y_sprite": 266, "sw": 27, "sh": 19, "w": 27, "h": 29, "s": 20}}, 
              {"veh": { "x": 200, "y": 315, "x_sprite": 10, "y_sprite": 266, "sw": 27, "sh": 19, "w": 27, "h": 29, "s": 20}}, 
              {"veh": { "x": 70, "y": 315, "x_sprite": 10, "y_sprite": 266, "sw": 27, "sh": 19, "w": 27, "h": 29, "s": 20}}, 
              {"veh": { "x": 130, "y": 459, "x_sprite": 10, "y_sprite": 266, "sw": 27, "sh": 19, "w": 27, "h": 29, "s": 20}}, 
              {"veh": { "x": 80, "y": 459, "x_sprite": 10, "y_sprite": 266, "sw": 27, "sh": 19, "w": 27, "h": 29, "s": 20}}, 
              {"veh": { "x": 280, "y": 387, "x_sprite": 106, "y_sprite": 302, "sw": 46, "sh": 18, "w": 46, "h": 29, "s": 20}}, 
              {"veh": { "x": 150, "y": 387, "x_sprite": 106, "y_sprite": 302, "sw": 46, "sh": 18, "w": 46, "h": 29, "s": 20}}, 
              {"veh": { "x": 20, "y": 387, "x_sprite": 106, "y_sprite": 302, "sw": 46, "sh": 18, "w": 46, "h": 29, "s": 20}},  
              {"veh": { "x": 20, "y": 459, "x_sprite": 10, "y_sprite": 266, "sw": 27, "sh": 19, "w": 27, "h": 29, "s": 20}}
             ]
//Data for all the vehicles going right
vehicles_r = [
              {"veh": { "x": 200, "y": 351, "x_sprite": 10, "y_sprite": 300, "sw": 26, "sh": 22, "w": 26, "h": 29}}, 
              {"veh": { "x": 120, "y": 351, "x_sprite": 10, "y_sprite": 300, "sw": 26, "sh": 22, "w": 26, "h": 29}}, 
              {"veh": { "x": 40, "y": 351, "x_sprite": 10, "y_sprite": 300, "sw": 26, "sh": 22, "w": 26, "h": 29}}, 
              {"veh": { "x": 250, "y": 423, "x_sprite": 82, "y_sprite": 264, "sw": 24, "sh": 26, "w": 24, "h": 29}}, 
              {"veh": { "x": 170, "y": 423, "x_sprite": 82, "y_sprite": 264, "sw": 24, "sh": 26, "w": 24, "h": 29}}, 
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

//Determining speed for vehicles goign left. Also adding the detection
//function for collison
function mobilize_veh_l(){  
  for (i = 0; i < num_of_l_veh; i++){
    vehicles_l[i]['veh']['x']--;
    if (vehicles_l[i]['veh']['x'] == -vehicles_l[i]['veh']['w']){
      vehicles_l[i]['veh']['x'] = 398;
    }
    detection(vehicles_l[i]['veh']['x'], vehicles_l[i]['veh']['y'], vehicles_l[i]['veh']['w'])
  }
}
//Determining speed for vehicles goign right. Also adding the detection
//function for collison
function mobilize_veh_r(){  
  for (i = 0; i < vehicles_r.length; i++){
    vehicles_r[i]['veh']['x']++;
    if (vehicles_r[i]['veh']['x'] == 398){
      vehicles_r[i]['veh']['x'] = -vehicles_r[i]['veh']['w'];
    }
    detection(vehicles_r[i]['veh']['x'], vehicles_r[i]['veh']['y'], vehicles_r[i]['veh']['w'])
  }
}

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
  frog_on_log();
}

function draw_veh_l(){
  for (i = 0; i < num_of_l_veh; i++){
    image.drawImage(document.getElementById('source1'), vehicles_l[i]['veh']['x_sprite'], vehicles_l[i]['veh']['y_sprite'], vehicles_l[i]['veh']['sw'], vehicles_l[i]['veh']['sh'], vehicles_l[i]['veh']['x'], vehicles_l[i]['veh']['y'], vehicles_l[i]['veh']['w'], vehicles_l[i]['veh']['h']);
  } 
}

function draw_log(){
  for (i = 0; i < logs.length; i++){
    image.drawImage(document.getElementById('source1'), logs[i]['log']['x_sprite'], logs[i]['log']['y_sprite'], logs[i]['log']['sw'], logs[i]['log']['sh'], logs[i]['log']['x'], logs[i]['log']['y'], logs[i]['log']['w'], logs[i]['log']['h']);
  } 
  draw_snake();
  detection(snake['sn']['x'], snake['sn']['y'], snake['sn']['w']);
}

function draw_turtles(){
  for (i = 0; i < turtles.length; i++){
    image.drawImage(document.getElementById('source1'), turtles[i]['turtle']['x_sprite'], turtles[i]['turtle']['y_sprite'], turtles[i]['turtle']['sw'], turtles[i]['turtle']['sh'], turtles[i]['turtle']['x'], turtles[i]['turtle']['y'], turtles[i]['turtle']['w'], turtles[i]['turtle']['h']);
  } 
}

function draw_veh_r(){
  for (i = 0; i < vehicles_r.length; i++){
    image.drawImage(document.getElementById('source1'), vehicles_r[i]['veh']['x_sprite'], vehicles_r[i]['veh']['y_sprite'], vehicles_r[i]['veh']['sw'], vehicles_r[i]['veh']['sh'], vehicles_r[i]['veh']['x'], vehicles_r[i]['veh']['y'], vehicles_r[i]['veh']['w'], vehicles_r[i]['veh']['h']);
  } 
}


function draw_snake(){
  switch(rand_snake){
    case 1:
      snake['sn']['x'] = logs[1]['log']['x'];
      snake['sn']['y'] = logs[1]['log']['y']
      image.drawImage(document.getElementById('source1'), snake['sn']['x_sprite'], snake['sn']['y_sprite'], snake['sn']['sw'], snake['sn']['sh'], snake['sn']['x'], snake['sn']['y'], snake['sn']['w'], snake['sn']['h']);
      break;
    case 2:
      snake['sn']['x'] = logs[3]['log']['x'];
      snake['sn']['y'] = logs[3]['log']['y']
      image.drawImage(document.getElementById('source1'), snake['sn']['x_sprite'], snake['sn']['y_sprite'], snake['sn']['sw'], snake['sn']['sh'], snake['sn']['x'], snake['sn']['y'], snake['sn']['w'], snake['sn']['h']);
      break;
    case 3:
      snake['sn']['x'] = logs[5]['log']['x'];
      snake['sn']['y'] = logs[5]['log']['y']
      image.drawImage(document.getElementById('source1'), snake['sn']['x_sprite'], snake['sn']['y_sprite'], snake['sn']['sw'], snake['sn']['sh'], snake['sn']['x'], snake['sn']['y'], snake['sn']['w'], snake['sn']['h']);
      break;      
  } 
}

function draw_fly(){
  
}
var g = document.getElementById('source');
function draw_goal_sq(){
  ctx.fillStyle = "rgb(200,200,0)";
  for (i = 0; i < goal_sq.length; i++){
    ctx.fillRect (goal_sq[i]['x'], goal_sq[i]['y'], goal_sq[i]['w'], goal_sq[i]['h']);
    if (goal_sq[i]['is_occupied'] == 1){
      image.drawImage(document.getElementById('source1'), 12, 362, 23, 27, goal_sq[i]['x'], goal_sq[i]['y'], 23, 30);
     // image.drawImage(g, 2, 3, 23, 27, goal_sq[i]['x'] +30, goal_sq[i]['y'] +30, 23, 30); 
    } 
  }
}

function hide(){
  g.style.display= "none";
}

//Function to start the game
function start_game(){
  //initializing all the variables for the game
  init_parameters(); 
  //calling the function to draw the game layout

  $(document).keydown(function(e){
  //alert(e.keyCode);
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
//console.log(y_coord_frog);
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
  setInterval(decrement_time, 1000);
  setInterval(mobilize_veh_l, vehicles_l[0]['veh']['s']);
  setInterval(mobilize_veh_r, speed_veh_r);
  setInterval(mobilize_log, speed_log);
  setInterval(draw, 1);
}

//Function to initiaize the game parameters
function init_parameters(){
  //initializing all the variables for the game
  num_lives = 3;
  num_level = 1;  
  is_game_over = false;
  time = 200;
  speed_veh_l = 20;
  speed_veh_r = 20;
  speed_log = 40;
  x_coord_frog = 154;
  y_coord_frog = 492;
  num_of_l_veh = 6;
  score = 0;
  highscore = 0;
  rand_snake = Math.floor((Math.random()*3) + 1);
  rand_time = Math.floor((Math.random()*time) + 1);
  rand_time1 = Math.floor((Math.random()*time) + 1);

  image = document.getElementById('game');

  ctx = image.getContext("2d");

}


function detection(veh_x, veh_y, veh_wid){
  if(((x_coord_frog > veh_x) && (x_coord_frog < veh_x + veh_wid)) && 
     ((y_coord_frog + 10 > veh_y) && (y_coord_frog + 10 < veh_y + 30))
   ||(((x_coord_frog + 30 > veh_x) && (x_coord_frog < veh_x)) &&
     ((y_coord_frog + 10 > veh_y) && (y_coord_frog + 10 < veh_y + 30)))){
    after_collision();

  }
}

function frog_on_log(){
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
       // else if(x_coord_frog > turtles[i]['turtle']['x']){
       //   is_frog_drown = 1;          
       // }
      }
    }
    if (is_frog_drown == 0){
//      after_collision();
    }
  } 
}

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
    score = score + 1000 + time;
    speed_veh_l = 5;
    speed_veh_r = 5;
    speed_log = 10;
    num_of_l_veh++;
    vehicles_l[0]['veh']['s'] = 3;
    num_level++;
    time = 200 - 10 * num_level;

  }
}

function decrement_time(){
  time--;
}

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
      }
    }
    if (is_frog_home == 0){
      after_collision();     
    }
  } 

}

function after_collision(){
  x_coord_frog = 154;
  y_coord_frog = 492;
  num_lives--;  
}

//Function to draw the game layout
function draw(){
  //getting the canvas
  ctx.fillStyle = "#191970";
  ctx.fillRect(1, 2, 398, 276);
  ctx.fillStyle = "#000000";
  ctx.fillRect(1, 312, 398, 176);
  ctx.fillRect(1, 522, 398, 41);
  image = document.getElementById('game').getContext('2d');
  //drawing the title
  image.drawImage(document.getElementById('source1'), 1, 1, 398, 115, 1, 1, 398, 100);
  //drawing the pavements
  image.drawImage(document.getElementById('source1'), 1, 118, 398, 40, 1, 277, 398, 40);
  image.drawImage(document.getElementById('source1'), 1, 118, 398, 40, 1, 487, 398, 40);
 
  draw_veh_l();
  draw_veh_r();
  draw_log();
  draw_turtles();
  draw_goal_sq();
  home_col_detection();
  new_level();

  //drawing the frog on the pavement
  //including the text for level, score and highscore 
  image.drawImage(document.getElementById('source1'), 12, 362, 23, 27, x_coord_frog, y_coord_frog, 23, 30);
  image.fillStyle = "#01fe08";
  image.font = "bold 25px Arial";
  image.fillText("Level "+num_level, 54, 542);
  image.font = "bold 14px Arial";
  image.fillText("Score: "+score, 2, 558);
  image.font = "bold 14px Arial";
  image.fillText("Highscore: "+highscore, 87, 558);
  image.font = "bold 14px Arial";
  image.fillText("Time Remaining: "+time, 200, 558);
  image.font = "bold 14px Arial";
  if (num_lives == -1 || time == 0){
    r = confirm("Game Over");
    if (r){
      document.location.reload(true);
    }
    else {
    speed_log = 0;
    speed_Veh_l = 0;
    speed_veh_r = 0;      
    }
  }
  //drawing the remaining frog lives
  for (k = 0; k < num_lives; k++){
    image.drawImage(document.getElementById('source1'), 12, 330, 33, 27, 15*k, 520, 25, 20);
  }
}
