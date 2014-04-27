#include <iostream>
#include <stdlib.h>
int main(int argc, char *argv[]) {
   double x;
   double y;
   double z;
   
   x= atof(argv[1]);
   y= atof(argv[2]);
   /*
   std::cout << "\nx = ";
   std::cin >> x;
   std::cout << "\ny = ";
   std::cin >> y;
    */
   z=x+y;

   std::cout << z << "\n";

return 0;
}
