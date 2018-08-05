let GABEN;
let sandvich;
let enemy;
let background;
let loss;
let x = 0;
let dx = 15;
let y = 0; 
let dy = 15;
let health= 100;
let time0 = 0;
let sandvichX = 0;
let sandvichY = 0;
let enemyX = 0;
let enemyY = 0;
let touches = 0;
let dHealth = 0;


function setup() {
	createCanvas(800, 800);
	  
  sandvichX = random(100, 700);
  sandvichY = random(100, 700);
  enemyX = random(400, 650);
  enemyY = random (400, 650);
  noStroke();
}
  
function draw() {
	
}

function preload() {  // preload() runs once
	  GABEN = loadImage("heavy.png");
  sandvich = loadImage("sandvich.png");
  enemy = loadImage("uganda.png");
  background = loadImage( "map.jpg");
  loss = loadImage("dawae.jpg");
		}


function draw() {
  background.resize(0, 800);
  image(background, 0, 0);
  GABEN.resize(0, 150);
  image(GABEN, x, y);
  sandvich.resize(0, 75);
  image(sandvich, sandvichX, sandvichY);

  enemy.resize(0, 75);
	image(enemy, enemyX, enemyY);
	rect(width - 130, 30, health, 30);

  // enemy movement
  if (x > enemyX) {
    enemyX = enemyX + 1;
  } else if (x < enemyX) {
    enemyX = enemyX - 1;
  } 
  if (y > enemyY) {
    enemyY = enemyY + 1;
  } else if (y < enemyY) {
    enemyY = enemyY - 1;
  }

  // loss conditions
  if (health <= 0) {
    health = 0;
    loss.resize(0, 800);
    image(loss, 0, 0);
    fill(255);
    textSize (30);
    text("YOU DO NOT KNOW DA WAE", 30, 500);
  } else {
    // health left
    fill('#2CD133');
    if (health < 20) {
      fill (250, 0, 0);
    }
    health = 50 - millis() / 1000 + dHealth;
  }
  

  if (x > enemyX - 30 && x < enemyX + 30) {
    if (y > enemyY - 30 && y < enemyY + 30) {
      dHealth = dHealth - 5;
    }
  }
  // hero eats
  if (x > sandvichX - 50 && x < sandvichX + 10) {
    if (y > sandvichY - 10 && y < sandvichY + 50) {
      sandvichX = random(100, 700);
      sandvichY = random(100, 700);
      dHealth = dHealth + 15;
      touches = touches + 1;
    }
  }
}
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    x = x + dx;
  } else if (keyCode == LEFTRIGHT_ARROW) {
    x = x - dx;
  } else if (keyCode == UPRIGHT_ARROW) {
    y = y - dy;
  } else if (keyCode == DOWNRIGHT_ARROW) {
    y = y + dy;
  }
}
	