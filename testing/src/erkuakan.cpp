#include <iostream>
#include <stdlib.h>
//#include <>
using namespace std;

int main(int argc, char* argv[]) {
   int i;
   int m=0;
   int k=0;
   int x;
   x= atoi (argv[1]);
   for(i=1; ;i=i*10){
       if(x<2){
           k=k+m*i;
           break;
       }
      m=x%2;
      x=x/2;
      k=k+m*i;

   }

   cout << endl << k << endl;

   return 0;
}
