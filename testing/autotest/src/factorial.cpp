#include <iostream>
#include <stdlib.h>

int main(int argc, char *argv[]) {
   int k;
   int p=1;
   int x;

   x= atoi(argv[1]); 

   for(k=1; k<=x; k++){
      p=p*k;
   }

   std::cout << "\nx_i factorial:  " << p << std::endl;

   return 0;
}   
