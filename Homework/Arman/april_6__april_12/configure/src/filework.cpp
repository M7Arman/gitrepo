#include <iostream>
#include <fstream>
using namespace std;
int main(){
 ofstream myfile1,k;
 k.open("../openfile1.txt",ios::app);
string line;
  ifstream myfile ("../openfile.txt");
  if (myfile.is_open())
  {
    while ( getline (myfile,line) )
    {
     k<< line << '\n';
    }
    myfile.close();
  }

  else cout << "Unable to open file";

 return 0;
}
