#include<iostream>
#include<math.h>
#include<bitset>
using namespace std;
int main(){
    
    int n;
    cin>>n;

     
       int i=0,  ans=0;
    while(n !=0){
        int digit=n % 2;
        if(digit==1){
        ans=ans+pow(2, i);
         }
        n=n/2;
        i++;
    }
    cout<<"Answer is "<<ans<<endl;
}