#include<iostream>
using namespace std;
void printarray(int arr[], int n){
    for(int i=0; i<n; i++){
        cout<<arr[i]<<" ";

    }cout<<endl;
}

void swapAlternate(int arr[], int size){
    for(int i=0; i<size; i+=2){
        if(i+1 < size){
          swap(arr[i], arr[i+1]);
        }
    }
}


int main(){
    int even[8]={5,3,7,9,11,13,4,1};
    int odd[5]={2,7,9,0,1};
    swapAlternate(even, 8);
    printarray(even,8);
}