#include <iostream>

int main() {
  int x1, y1, x2, y2;
  
  std::cin >> x1;
  std::cin >> y1;
  std::cin >> x2;
  std::cin >> y2;

  int dx = x2 - x1;
  int dy = y2 - y1;

  for(int x = x1; x <= x2; x++) {
    int y = y1 + dy * (x - x1) / dx;
    std::cout << "(" << x << ", " << y << ")" << std::endl;
  }
}