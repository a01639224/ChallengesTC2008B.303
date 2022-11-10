// Challenge 3 - Fausto Alejandro Palma Cervantes (A01639224)
// Compilar: g++ main.cpp -o main -lglut -lGLU -lGL
// Ejecutar: ./main
// Referencias: www.youtube.com/watch?v=jGBQqZ3W4cU

#include <iostream>
#include <GL/glut.h>

void init(void) {
  glClearColor(1.0, 1.0, 1.0, 0.0); // Set display background color (White)
  glMatrixMode(GL_PROJECTION); // Set projection parameters (Projection of 3D to 2D image pale)
  gluOrtho2D(0.0, 400.0, 0.0, 400.0); // Specify the coordinate
}

void lineas() {
  // Display setup
  glClear(GL_COLOR_BUFFER_BIT); // Clear display window before drawing
  glColor3f(0.0, 0.0, 0.0); // Set drawing color (Black)
  glBegin(GL_POINTS);
  // Test cases
  int testCases[6][4] = {{1, 2, 100, 20},
  						 {10, 200, 50, 10},
  						 {300, 300, 10, 10},
  						 {200, 300, 250, 50},
  						 {350, 350, 100, 300}};
  // Line drawing algorithm
  for(auto i: testCases) {
  	int x1 = i[0], y1 = i[1], x2 = i[2], y2 = i[3], x, y, dx, dy;
    if(x1 > x2) {
      std::swap(x1, x2);
	  std::swap(y1, y2);
    }
    dx = x2 - x1;
    dy = y2 - y1;
    for(x = x1; x < x2; x++) {
  	  y = y1 + dy * (x - x1) / dx;
  	  glVertex2i(x, y); // Specify geometry (Vertex at which the point is to be drawn)  	
    }
  }
  // Ending
  glEnd();
  glFlush(); // Process all OpenGL routines as quickly as possible (Draw any current primitives to the frame buffer)
}

int main(int argc, char** argv) {
  glutInit(&argc, argv); // Initialize GLUT Library
  glutInitWindowSize(400, 400); // Set window size
  glutInitWindowPosition(50, 100); // Set window position
  glutInitDisplayMode(GLUT_SINGLE | GLUT_RGB); // Set display mode 
  glutCreateWindow("Challenge 3"); // Create "x" display window
  init(); // Initialize display's image attribute & coord. system
  glutDisplayFunc(lineas); // Send graphics to window
  glutMainLoop(); // Start event loop (Display & wait)
  return 0;
}
