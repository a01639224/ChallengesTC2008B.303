function setup() {
  createCanvas(400, 400);
  p = [];
  t = 150;
}

function draw() {
  background(205)
  strokeWeight(2)
  if(p[7] == undefined) 
    {line(p[0], p[1], p[2], p[3])} 
  else
    {bezier(p[0], p[1], p[4], p[5], p[6], p[7], p[2], p[3])}
  strokeWeight(4)
  point(p[0], p[1])
  point(p[2], p[3])
  point(p[4], p[5])
  point(p[6], p[7])
  // console.log(p)
}

function mouseDragged() {
  if(p[4] == undefined) {
    p[2] = mouseX
    p[3] = mouseY
  } else {
    if((sq(mouseX - p[6]) + sq(mouseY - p[7])) < (sq(mouseX - p[4]) + sq(mouseY - p[5]))) {
      p[6] = mouseX
      p[7] = mouseY
    } else {
      p[4] = mouseX
      p[5] = mouseY
    }
  }
  redraw()
}

function mousePressed() {
  if(p[7] == undefined) {
    append(p, mouseX)
    append(p, mouseY)
  }
}
