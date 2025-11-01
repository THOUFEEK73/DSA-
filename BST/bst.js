class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }


    insertNode(root, newNode) {
        if (root.value > newNode.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    findMin(root){
        if(!root.left){
            return root.value;
        }else{
            this.findMin(root.left);
        }
    }


    delete(value){
        this.root = this.deleteNode(this.root,value);
    }

    deleteNode(root,value){
        if(root.value>value){
            root.left = this.deleteNode(root.left,value);
        }else if(root.value<value){
            root.right = this.deleteNode(root.right,value);
        }else{
            // condition 1 
            if(!root.left && !root.right) return null;

            // condition 2 
            if(!root.right) return root.left;
            if(!root.left) return root.right;

            // condition 3 

            root.value = this.findMin(root.right);
            root.right = this.deleteNode(root.right,root.value);
        }

        return root;
    }


    // kTh Largest

    kthLargest(k){
        let count = 0;
        let res = null;

        function reverseIn(node){
           if(!node || res!==null) return;

            reverseIn(node.right);
            count++;
            if(count===k){
                res = node.value;
                return
            }

            reverseIn(node.left);
        }

        reverseIn(this.root);
        return res;
    }


    countSubTree(root){
        if(!root) return 0;

        return 1 + this.countSubTree(root.left)+this.countSubTree(root.right);
    }

    Height(root){
        if(!root) return 0;

        let left = this.Height(root.left);
        let right = this.Height(root.right);
        return Math.max(left,right) + 1;
    }

    CountleafNode(root){
        if(!root) return 0;

        if(!root.left && !root.right) return 1;

        return this.CountleafNode(root.left) + this.CountleafNode(root.right)
    }

    InVertTree(root){
         if(!root) return null;

         [root.left,root.right] = [root.right,root.left];

          this.InVertTree(root.left) 
          this.InVertTree(root.right);

          return root;
    }


 isBST(root,min=-Infinity,max=Infinity){
     if(!root) return true;
       if(root.value<=min || root.value>=max) return false;
     return this.isBST(root.left,min,root.value) && this.isBST(root.right,root.value,max)

 }







    // IN-ORDER 

    InOrder(root) {
        if (root) {
            this.InOrder(root.left);
            console.log(root.value);
            this.InOrder(root.right);
        }
    }

    // PreOder - ORDER  
    PreOrder(root) {
        if (root) {
            console.log(root.value);
            this.PreOrder(root.left);
            this.PreOrder(root.right);
        }
    }
    // Post - ORDER
    PostOrder(root) {
        if (root) {
            this.PostOrder(root.left);
            this.PostOrder(root.right);
            console.log(root.value);
        }
    }

}


const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(7);



// console.log(bst.kthLargest(1))

console.log(bst.Height(bst.root))

// bst.InOrder(bst.root);