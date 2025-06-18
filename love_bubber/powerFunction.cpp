#include<iostream>
using namespace std;
int power (int num1,int num2){
    cout<<num1<<endl;
    int ans=1;
    for(int i=1; i<=num2; i++){
        ans=ans*num1;
    }
    return ans;
}
int main(){
    int a,b;
    cin>>a>>b;
    int answer=power(a,b);
    cout<<"answer is "<<answer<<endl;
    int c,d;
    cin>>c>>d;
    int Answer=power(c,d);
    cout<<"answer is "<<Answer<<endl;
    return 0;
}