#include<iostream>
using namespace std;

void update(int arr[], int n){
    cout<<endl<<"inside the function"<<endl;

    for(int i=0; i<3; i++){
        cout<<arr[i]<<" ";
    }cout<<endl;
    cout<<"Going back to main function"<<endl;
}

int main(){
    int arr[3]={1,2,3};
    update(arr, 3);
    cout<<endl<<"printing the main function"<<endl;
    for(int i=0; i<3; i++){
        cout<<arr[i]<<" ";
    }
    cout<<endl;
    return 0;
}