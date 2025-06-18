#include<iostream>
using namespace std;
int main(){
    int n;
    cin>>n;

    int row=1;
   
    while(row<=n){
         int star=n-row+1;
        while(star){
            cout<<"*";
        }
        int col=1;
        while(col<=row){
       cout<<col;
        col=col+1;
        }
        cout<<endl;
        row=row+1;
    }
}