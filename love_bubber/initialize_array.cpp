#include<iostream>
using namespace std;

printarray(){

}
int main(){
    int number[15];
    cout<<"value at 14th index"<<" "<<number[14]<<endl;
    int second[3]={5,7,11};
    cout<<"value at 2nd index"<<" "<<second[2]<<endl;

    int third[15]={2,7};
    int n=15;

    cout<<"pritn the array"<<endl;
    for(int i=0; i<n; i++){
        cout<<third[i]<<" ";
    }

    return 0;
}