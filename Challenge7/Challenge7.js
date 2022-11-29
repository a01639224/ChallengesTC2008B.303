function setup() {
  createCanvas(400, 400);
  frameRate(24);
  click = 0;
  s = 15;
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
    l = 10;
    w = 10;
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
    if(frameCount % 1 == 0) {
      j++;
      if(j == 0) {
        fill(255);
        l = 10;
        w = 10;
      }
      if(j <= s) {
        l *= 1.1;
        if(j == s) {
          l = k;
          l = w;
          w = k;
        }
        t = j / float(s);
        x = bezierPoint(10, 160, 170, 200, t);
        y = bezierPoint(100, 100, 300, 390, t);
        ellipse(x, y, w, l);
      }
      if(j > s) {
        w /= 1.1;
        t = (j-s) / float(s);
        x = bezierPoint(200, 230, 240, 390, t);
        y = bezierPoint(390, 300, 100, 100, t);
        ellipse(x, y, l, w);
      }
      if(j == (2*s)) {j = -1;}
    }
  }
}

function mouseClicked() {
  click++;
  if(click == 3) {j = -1;}
  if(click == 4) {click = 1;}
}
