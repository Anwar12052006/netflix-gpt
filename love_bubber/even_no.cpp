#include<iostream>
using namespace std;
int main(){
    int n;
    cin>>n;
     int even=2;
    int i=2;
   
    while(i<=n){
        even=even+i;
        i=i+2;
    }
    cout<<"even "<<endl;
}