vehicles_l = [ 
              {"veh": { "x": 130, "y": 315, "x_sprite": 10, "y_sprite": 266, "sw": 27, "sh": 19, "w": 27, "h": 29}}, 
              {"veh": { "x": 80, "y": 315, "x_sprite": 10, "y_sprite": 266, "sw": 27, "sh": 19, "w": 27, "h": 29}}, 
              {"veh": { "x": 20, "y": 315, "x_sprite": 10, "y_sprite": 266, "sw": 27, "sh": 19, "w": 27, "h": 29}}, 
              {"veh": { "x": 150, "y": 387, "x_sprite": 106, "y_sprite": 302, "sw": 46, "sh": 18, "w": 46, "h": 29}}, 
              {"veh": { "x": 100, "y": 387, "x_sprite": 106, "y_sprite": 302, "sw": 46, "sh": 18, "w": 46, "h": 29}}, 
              {"veh": { "x": 50, "y": 387, "x_sprite": 106, "y_sprite": 302, "sw": 46, "sh": 18, "w": 46, "h": 29}},  
              {"veh": { "x": 130, "y": 459, "x_sprite": 10, "y_sprite": 266, "sw": 27, "sh": 19, "w": 27, "h": 29}}, 
              {"veh": { "x": 80, "y": 459, "x_sprite": 10, "y_sprite": 266, "sw": 27, "sh": 19, "w": 27, "h": 29}}, 
              {"veh": { "x": 20, "y": 459, "x_sprite": 10, "y_sprite": 266, "sw": 27, "sh": 19, "w": 27, "h": 29}}
             ]
vehicles_r = [
              {"veh": { "x": 200, "y": 351, "x_sprite": 10, "y_sprite": 300, "sw": 26, "sh": 22, "w": 26, "h": 29}}, 
              {"veh": { "x": 120, "y": 351, "x_sprite": 10, "y_sprite": 300, "sw": 26, "sh": 22, "w": 26, "h": 29}}, 
              {"veh": { "x": 40, "y": 351, "x_sprite": 10, "y_sprite": 300, "sw": 26, "sh": 22, "w": 26, "h": 29}}, 
              {"veh": { "x": 250, "y": 423, "x_sprite": 82, "y_sprite": 264, "sw": 24, "sh": 26, "w": 24, "h": 29}}, 
              {"veh": { "x": 170, "y": 423, "x_sprite": 82, "y_sprite": 264, "sw": 24, "sh": 26, "w": 24, "h": 29}}, 
              {"veh": { "x": 90, "y": 423, "x_sprite": 82, "y_sprite": 264, "sw": 24, "sh": 26, "w": 24, "h": 29}} 
             ]
logs =       [
              {"log": { "x": 10, "y": 98, "x_sprite": 7, "y_sprite": 197, "sw": 117, "sh": 20, "w": 117, "h": 30}},
              {"log": { "x": 50, "y": 170, "x_sprite": 7, "y_sprite": 230, "sw": 86, "sh": 20, "w": 86, "h": 30}},
              {"log": { "x": 50, "y": 242, "x_sprite": 7, "y_sprite": 166, "sw": 179, "sh": 20, "w": 179, "h": 30}}
             ]
turtles =    [
              {"turtle": { "x": 10, "y": 134, "x_sprite": 13, "y_sprite": 406, "sw": 111, "sh": 22, "w": 111, "h": 30}},
              {"turtle": { "x": 90, "y": 206, "x_sprite": 13, "y_sprite": 406, "sw": 111, "sh": 22, "w": 111, "h": 30}},     
             ]

vehicles_right = [];
vehicles_left = [];
function add_to_array(){
  var veh;
  for (i = 0; i < 9; i++){
    veh = vehicles_l[i];
    vehicles_left.push(veh);
  }
  for (i = 0; i < 6; i++){
    veh = vehicles_r[i];
    vehicles_right.push(veh);
  }

}

function speed_veh_l(){  
  for (i = 0; i < vehicles_left.length; i++){
    vehicles_left[i]['veh']['x']--;
    if (vehicles_left[i]['veh']['x'] == -vehicles_left[i]['veh']['w']){
      vehicles_left[i]['veh']['x'] = 398;
    }
    detection(vehicles_left[i]['veh']['x'], vehicles_left[i]['veh']['y'], vehicles_left[i]['veh']['w'])
  }
}

function speed_veh_r(){  
  for (i = 0; i < vehicles_right.length; i++){
    vehicles_right[i]['veh']['x']++;
    if (vehicles_right[i]['veh']['x'] == 398){
      vehicles_right[i]['veh']['x'] = -vehicles_right[i]['veh']['w'];
    }
    detection(vehicles_right[i]['veh']['x'], vehicles_right[i]['veh']['y'], vehicles_right[i]['veh']['w'])
  }
}

function speed_log(){  
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

function speed_veh_4(){
  veh_4_x++;
  if (veh_4_x == 398){
    veh_4_x = -38;
  }
  detection(veh_4_x, veh_4_y, veh_4_wid);
}

function draw_veh_l(){
  for (i = 0; i < vehicles_left.length; i++){
    image.drawImage(document.getElementById('source1'), vehicles_left[i]['veh']['x_sprite'], vehicles_left[i]['veh']['y_sprite'], vehicles_left[i]['veh']['sw'], vehicles_left[i]['veh']['sh'], vehicles_left[i]['veh']['x'], vehicles_left[i]['veh']['y'], vehicles_left[i]['veh']['w'], vehicles_left[i]['veh']['h']);
  } 
}

function draw_log(){
  for (i = 0; i < logs.length; i++){
    image.drawImage(document.getElementById('source1'), logs[i]['log']['x_sprite'], logs[i]['log']['y_sprite'], logs[i]['log']['sw'], logs[i]['log']['sh'], logs[i]['log']['x'], logs[i]['log']['y'], logs[i]['log']['w'], logs[i]['log']['h']);
  } 
}

function draw_turtles(){
  for (i = 0; i < turtles.length; i++){
    image.drawImage(document.getElementById('source1'), turtles[i]['turtle']['x_sprite'], turtles[i]['turtle']['y_sprite'], turtles[i]['turtle']['sw'], turtles[i]['turtle']['sh'], turtles[i]['turtle']['x'], turtles[i]['turtle']['y'], turtles[i]['turtle']['w'], turtles[i]['turtle']['h']);
  } 
}

function draw_veh_r(){
  for (i = 0; i < vehicles_right.length; i++){
    image.drawImage(document.getElementById('source1'), vehicles_right[i]['veh']['x_sprite'], vehicles_right[i]['veh']['y_sprite'], vehicles_right[i]['veh']['sw'], vehicles_right[i]['veh']['sh'], vehicles_right[i]['veh']['x'], vehicles_right[i]['veh']['y'], vehicles_right[i]['veh']['w'], vehicles_right[i]['veh']['h']);
  } 
}

//Function to start the game
function start_game(){
  //initializing all the variables for the game
  init_parameters(); 
  //calling the function to draw the game layout
//  draw();
  add_to_array();
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
console.log(y_coord_frog);
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
  
  setInterval(speed_veh_l, 20);
  setInterval(speed_veh_r, 20);
  setInterval(speed_log, 10);
  setInterval(draw, 1);
}

//Function to initiaize the game parameters
function init_parameters(){
  //initializing all the variables for the game
  num_lives = 3;
  num_level = 1;  
  is_game_over = false;
  time = 0;
  x_coord_frog = 154;
  y_coord_frog = 492;
  score = 0;
  highscore = 0;
}

function detection(veh_x, veh_y, veh_wid){
  if(((x_coord_frog > veh_x) && (x_coord_frog < veh_x + veh_wid)) && 
     ((y_coord_frog + 10 > veh_y) && (y_coord_frog + 10 < veh_y + 30))
   ||(((x_coord_frog + 30 > veh_x) && (x_coord_frog < veh_x)) &&
     ((y_coord_frog + 10 > veh_y) && (y_coord_frog + 10 < veh_y + 30)))){
    x_coord_frog = 154;
    y_coord_frog = 492;
  }
}


function frog_on_log(){
  if (y_coord_frog < 275){ //that means the frog is on the water
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
     ((y_coord_frog + 10 > turtles[j]['turtle']['y']) && (y_coord_frog + 10 < turtles[j]['turtle'] + 30))){
        if (x_coord_frog > 1){
          is_frog_drown = 1;
          x_coord_frog--;
        }
        else if(x_coord_frog > turtles[i]['turtle']['x']){
          is_frog_drown = 1;          
        }
      }
    }

    if (is_frog_drown == 0){
      x_coord_frog = 154;
      y_coord_frog = 492;
    }
  } 
}

function collision(){
  image.drawImage(document.getElementById('source'), 3, 2, 23, 26, x_coord_frog, y_coord_frog, 23, 26); 
  setInterval(set_frog_coords, 1000);
}

function set_frog_coords(){
  x_coord_frog = 154;
  y_coord_frog = 492;
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
  image.drawImage(document.getElementById('source1'), 1, 1, 398, 115, 1, 1, 398, 100);
  //drawing the pavements
  image.drawImage(document.getElementById('source1'), 1, 118, 398, 40, 1, 277, 398, 40);
  image.drawImage(document.getElementById('source1'), 1, 118, 398, 40, 1, 487, 398, 40);
  //drawing the log
  //image.drawImage(document.getElementById('source'), 7, 230, 86, 20, 50, 195, 86, 20);
  //drawing the vehicles
  
  draw_veh_l();
  draw_veh_r();
  draw_log();
  draw_turtles();
 // image.drawImage(document.getElementById('source'), 10, 266, 28, 21, veh_1_x, veh_1_y, veh_1_wid, 21);

//  image.drawImage(document.getElementById('source'), 5, 300, 26, 22, veh_2_x, veh_2_y, veh_2_wid, 22);
//  image.drawImage(document.getElementById('source'), 105, 300, 46, 30, veh_3_x, veh_3_y, veh_3_wid, 30);
//  image.drawImage(document.getElementById('source'), 40, 265, 38, 30, veh_4_x, veh_4_y, veh_4_wid, 30);
//  image.drawImage(document.getElementById('source'), 75, 265, 34, 30, veh_5_x, veh_5_y, veh_5_wid, 30);
//  image.drawImage(document.getElementById('source'), 3, 300, 34, 30, veh_6_x, veh_6_y, veh_6_wid, 30);


//  image.drawImage(document.getElementById('source'), 3, 3, 10, 10, 3, 3, 340, 300);
  //drawing the frog on the pavement
  //including the text for level, score and highscore 
  image.drawImage(document.getElementById('source1'), 12, 362, 23, 27, x_coord_frog, y_coord_frog, 23, 30);
  image.fillStyle = "#01fe08";
  image.font = "bold 25px Arial";
  image.fillText("Level "+num_level, 54, 542);
  image.font = "bold 14px Arial";
  image.fillText("Score: "+score, 2, 558);
  image.font = "bold 14px Arial";
  image.fillText("Highscore: "+highscore, 68, 558);
  image.font = "bold 14px Arial";
  
  //drawing the remaining frog lives
  image.drawImage(document.getElementById('source1'), 12, 330, 33, 27, 15, 520, 25, 20);
  image.drawImage(document.getElementById('source1'), 8, 330, 33, 27, 0, 520, 25, 20);
}
