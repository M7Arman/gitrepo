#include <iostream>

int main(int x) {
   int k;
   int p=1;


   for(k=1; k<=x; k++){
      p=p*k;
   }

   std::cout << "\nx_i factorial:  " << p << std::endl;

   return 0;
}   
