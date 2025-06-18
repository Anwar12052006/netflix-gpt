#include<iostream>
using namespace std;
 int factorial(int n){
    int factorial=1;
    for(int i=1; i<=n; i++){
        factorial=factorial*i;

    }
    return factorial;
 }
 int ncr(int n, int r){
    int num=factorial(n);
    int denom=factorial(r)*factorial(n-r);
    int ans=num/denom;
    return ans;
 }
 int main(){
    int n,r;
    cin>>n>>r;
    cout<<"ans is "<<ncr(n,r)<<endl;
 }