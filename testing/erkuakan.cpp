#include<iostream>

using namespace std;

int main(int argc, char* argv[]) {

   

   cout << "argc = " << argc << endl;
   for(int i = 0; i < argc; i++)
      cout << "argv[" << i << "] = " << argv[i] << endl; 
   
   
   
   int i;
   int m=0;
   int k=0;
   int x;
   x=3;
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
