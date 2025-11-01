class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right =null;
    }
}


class BinaryTree{
    constructor(){
        this.root = null;
    }


    insert(value){
        const newNode = new Node(value);

        if(!this.root){
            this.root = newNode;
            return
        }

        let queue = [this.root];
        while(queue.length>0){
            const current = queue.shift();
            if(current.value === newNode.value) return;
            if(!current.left){
                current.left = newNode;
                return;
            }else{
                queue.push(current.left);
            }

            if(!current.right){
                current.right = newNode;
                return;
            }else{
                queue.push(current.right);
            }
        }
    }


        delete(root,value){
            if(!root) return null;

            let nodeToDelete = null;
            let queue = [root];
            let lastNode = null;


            while(queue.length>0){
                lastNode = queue.shift();
                if(lastNode.value === value) nodeToDelete = lastNode

                if(lastNode.left) queue.push(lastNode.left);
                if(lastNode.right) queue.push(lastNode.right);
            }

            if(!nodeToDelete) return root;

            nodeToDelete.value = lastNode.value;

            this.removeDeepest(root,lastNode);
        }

        removeDeepest(root,node){
             if(!root) return null;
             
             if(root === node) return null;

             if(root.left){
                if(root.left===node){
                    root.left = null;
                    return
                }else{
                    this.removeDeepest(root.left,node);
                }
             }

             if(root.right){
                if(root.right===node){
                    root.right = null;
                    return
                }else{
                    this.removeDeepest(root.right,node);
                }
             }
        }


    InOrder(root){
        if(root){
            this.InOrder(root.left);
            console.log(root.value);
            this.InOrder(root.right);
        }
    }
}

const bt = new BinaryTree();
bt.insert(10);
bt.insert(15);
bt.insert(5);
bt.insert(3);
bt.insert(7);
bt.insert(15);
bt.delete(bt.root,3)
bt.delete(bt.root,7)
bt.delete(bt.root,5);
bt.InOrder(bt.root)