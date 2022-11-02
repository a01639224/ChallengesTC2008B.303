def linea(x1, y1, x2, y2):
    i = 1
    if x1 > x2:
        i = -1
    dx = x2 - x1
    dy = y2 - y1
    for x in range(x1, x2, i):
        y = y1 + dy * (x - x1) / dx;
        point(x, y);

size(400, 400);
linea(1, 2, 100, 20)
linea(10, 200, 50, 10)
linea(300, 300, 10, 10)
linea(200, 300, 250, 50)
linea(350, 350, 100, 300)
linea(200, 200, 200, 200)
