function heapSort(arr){

let n = arr.length;

for(let i=Math.floor((n-1)/2);i>=0;i--){
    heapify(arr,n,i);
}

for(let i=n-1;i>=0;i--){
    [arr[0],arr[i]] = [arr[i],arr[0]]
    heapify(arr,i,0);
}


}


function heapify(arr,n,i){
    let largest = i;
    let left = 2*i+1;
    let right = 2*i+2;

    if(left<n && arr[largest].age<arr[left].age){
         largest = left;
    }

    if(right<n && arr[largest].age<arr[right].age){
        largest = right;
    }

    if(i!==largest){
        [arr[i],arr[largest]] = [arr[largest],arr[i]];
        heapify(arr,n,largest);
    }
    


}
// let arr = [2,10,3,5,1,4,8,9];

const users = [
    { name: "Thoufeek", age: 23, city: "Kollam" },
    { name: "Ameer", age: 25, city: "Kochi" },
    { name: "Rahul", age: 21, city: "Bangalore" },
    { name: "Farhan", age: 24, city: "Chennai" },
    { name: "Sneha", age: 22, city: "Trivandrum" }
  ];
heapSort(users);
console.log(users);