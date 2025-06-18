#include<iostream>
using namespace std;
void printarray(int arr[], int size){
    cout<<"print the araay"<<endl;

    for(int i=0; i<size; i++){
        cout<<arr[i]<<" ";
    }
    cout<<"print done"<<endl;
}
int main(){
    int number[15];
    cout<<"value at 14th index"<<number[14]<<endl;

    int second[3]={5,7,11};
    cout<<"value at 2nd index"<<second[2]<<endl;

    int third[15];
    int n=15;
    printarray(third,15);

    int fourth[10]={0};
     n=10;
    printarray(fourth,10);

    int fifth[10]={1};
    n=10;
    printarray(fifth,10);

    return 0;
}