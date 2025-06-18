// #include<bits/stdc++.h>
// using namespace std;
// int binarysearch(int arr[], int size, int key){
//     int start =0;
//     int end =size-1;

//     int mid=(start+end)/2;
//     while(start<=end){
//         if(arr[mid]==key){
//             return mid;
//         }
//         if(key>arr[mid]){
//             start=mid+1;
//         }else{
//             end=mid-1;
//         }
//         mid=(start+end)/2;
//     }
//     return -1;
// }

// int main(){
//     int even[6]={2,4,8,12,14,18};
//     int odd[5]={3,5,8,10,12};

//     int index=binarysearch(even,6,14);
//     cout<<"index of 14 is"<<index<<endl;

//     // int index=binarysearch(odd,5,12);
//     // cout<<"index of 12 is"<<index<<endl;

//     return 0;
// }

#include<bits/stdc++.h>
using namespace std;

int getMIN(int num[], int n){
    int MIN=INT_MAX;
    for(int i=0; i<n; i++){
        if(num[i]< MIN){
        MIN=num[i];
        }
    }
    return MIN;
}

int getMAX(int num[], int n){
    int MAX=INT_MIN;
    for(int i=0; i<n; i++){
        if(num[i]> MAX){
            MAX=num[i];
        }
    }
    return MAX;
}


int main(){
    int size;
    cin>>size;
    int num[100];
    for(int i=0; i<size; i++){
        cin>>num[i];
    }
    cout << "Minimum value is: " << getMIN(num, size) << endl;
    cout << "Maximum value is: " << getMAX(num, size) << endl;

    return 0;
}