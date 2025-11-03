class minHeap{
    constructor(){
        this.heap = [];
    }


    insert(value){
        this.heap.push(value);
        this.heapify();
    }

    getParent(index){
        return Math.floor((index-1)/2);
    }

    swap(index1,index2){
        [this.heap[index1],this.heap[index2]] = [this.heap[index2],this.heap[index1]];
    }

    heapify(){
        let index = this.heap.length-1;
        while(index>0 && this.heap[index]>this.heap[this.getParent(index)]){
           this.swap(index,this.getParent(index));
           index= this.getParent(index);
        }
    }

    remove(){
        if(this.heap.length===1){
            this.heap.pop();
            return;
        }

        if(this.heap.length===0) return "empty";

        this.heap[0] = this.heap.pop()
        this.heapifyDown(0);
    }

    getLeft(index){
        return 2*index+1;
    }

    getRight(index){
        return 2*index+2
    }

    heapifyDown(index){
        let small = index;
        let left = this.getLeft(index);
        let right = this.getRight(index);

        if(left<this.heap.length && this.heap[small]<this.heap[left]){
             small = left;
        }

        if(right<this.heap.length && this.heap[small]<this.heap[right]){
            small = right;
        }

        if(small!==index){
            this.swap(small,index);
            this.heapifyDown(small);
        }
    }

    print(){
        console.log(this.heap);
    }
}

const heap=  new minHeap();
heap.insert(10);
heap.insert(1);
heap.insert(2);
heap.insert(0)
heap.insert(4);

heap.remove()
// heap.remove()



// const users = [
//     { name: "Thoufeek", age: 23, city: "Kollam" },
//     { name: "Ameer", age: 25, city: "Kochi" },
//     { name: "Rahul", age: 21, city: "Bangalore" },
//     { name: "Farhan", age: 24, city: "Chennai" },
//     { name: "Sneha", age: 22, city: "Trivandrum" }
//   ];
  
//   for(let i=0;i<users.length;i++){
//     heap.insert(users[i]);
// }

heap.print();