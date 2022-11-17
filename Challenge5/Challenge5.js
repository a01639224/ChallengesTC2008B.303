function setup() {
  createCanvas(640, 480);
}


function myTranslate(x, y, tx, ty) {
  newX = x + tx;
  newY = y + ty;
  return [newX, newY];
}

// TODO: Fix it
function myRotate(x, y, rX, rY, angle) {
  angle =  angle * (PI / 180)
  newX = rX + (x - rX) * cos(angle) - (y - rY) * sin(angle)
  newY = rY + (x - rX) * sin(angle) + (y - rY) * cos(angle)
  return [newX, newY];
}

function myScale(x, y, sX, sY) {
  nX = x * sX + width/2 * (1 - sX)
  nY = y * sY + height/2 * (1 - sY)
  return [nX, nY];
}

function draw() {
  // REMEMBER: y-axis values are inverted
  background(102);
  fill(255); // WHITE = Original
  polygon(width/2, height/2, 50, 6, null);
  fill(255, 0, 0); // Red = Translation
  polygon(width/2, height/2, 50, 6, myTranslate, 100, 100);
  fill(0, 255, 0); // Blue = Rotation
  polygon(width/2, height/2, 50, 6, myRotate, width/2, height/2, 20); // 20° around center
  polygon(width/2, height/2, 50, 6, myRotate, width/2-100, height/2, 270); // 270° around pivot @ 50 units left 
  fill(0, 0, 255); // Green = Scaling
  polygon(width/2, height/2, 50, 6, myScale, 0.5, 0.5);
}

function polygon(x, y, radius, npoints, transform, ...params) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    if (transform != null) {
      [sx, sy] = transform(sx, sy, ...params);
    }
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
