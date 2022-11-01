#include <iostream>

int strToInt(std::string input) {
  std::string numStr;
  for(char c : input) {
    if(isdigit(c)) {
      numStr += c;
    }
    if(c == ',') {
      return stoi(numStr);
    }
    if(c == ')') {
      return stoi(numStr);
    }
  }
  return stoi(numStr);
}

int main() {
  std::string sX1, sY1, sX2, sY2;
  int x1, y1, x2, y2;
  
  std::cin >> sX1;
  std::cin >> sY1;
  std::cin >> sX2;
  std::cin >> sY2;

  x1 = strToInt(sX1);
  y1 = strToInt(sY1);
  x2 = strToInt(sX2);
  y2 = strToInt(sY2);

  int dx = x2 - x1;
  int dy = y2 - y1;

  std::cout << std::endl;
  for(int x = x1; x <= x2; x++) {
    int y = y1 + dy * (x - x1) / dx;
    std::cout << "(" << x << ", " << y << ")" << std::endl;
  }
}
