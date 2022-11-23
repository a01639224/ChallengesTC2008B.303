function setup() {
  createCanvas(400, 400);
  click = 0;
}

function draw() {
  background(205);
  strokeWeight(2);
  if(click == 1 || click == 2) {
    noFill();
    bezier(10, 100, 160, 100, 170, 300, 200 , 390);
    bezier(390, 100, 240, 100, 230, 300, 200 , 390);
  }
  if(click == 2) {
    fill(255);
    s = 15;
    l = 10;
    w = 10;
    r = 0.01
    for (i = 0; i <= s; i++) {
      l *= 1.1;
      if(i == s) {
        k = l;
        l = w;
        w = k;
      }
      t = i / float(s);
      x = bezierPoint(10, 160, 170, 200, t);
      y = bezierPoint(100, 100, 300, 390, t);
      ellipse(x, y, w, l);
      x = bezierPoint(390, 240, 230, 200, t);
      y = bezierPoint(100, 100, 300, 390, t);
      ellipse(x, y, w, l);
    }
  }
  if(click == 3) {
    animation(10, 100, 160, 100, 170, 300, 200, 390);
  }
}

function mouseClicked() {
  click++
  if (click == 4) {click = 1}
}

async function animation(x1, y1, x2, y2, x3, y3, x4, y4){
  fill(255);
  s = 15;
  for(i = 0; i <= s; i++){
    await sleep(600);
    t = i / float(s);
    x = bezierPoint(x1, x2, x3, x4, t);
    y = bezierPoint(y1, y2, y3, y4, t);
    ellipse(x, y, 10, 10);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
