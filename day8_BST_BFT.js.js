function BST(value){

  this.value=value;
  this.left=null;
  this.right=null;
}

BST.prototype.insert=function(value){
  if(value<=this.value){
    if(!this.left)this.left=new BST(value);
    else this.left.insert(value);
  }

  else {
    if(!this.right)this.right=new BST(value);
    else this.right.insert(value);
  }

};

   /*..................... Contains Method.........................*/



BST.prototype.contains=function(value){
  if(value===this.value) return true;
  else if(value<this.value) {
    if(!this.left) return false;
    else return this.left.contains(value);
  }
  else {
    if(!this.right) return false;
    else return this.right.contains(value);
  }
};

   /*...................Depth First Traversal.......................*/
               /*.......In Order........*/


BST.prototype.depthFirstTraversal=function(itertrtFunc){
  if(this.left) this.left.depthFirstTraversal(itertrtFunc);
  itertrtFunc(this.value);
  if(this.right) this.right.depthFirstTraversal(itertrtFunc);
};

  /*...................Depth First Traversal.......................*/
               /*.......Pre & Post Order........*/


BST.prototype.depthFirstTraversal=function(itertrtFunc,order){
  if(order==='pre-order') itertrtFunc(this.value);
  if(this.left) this.left.depthFirstTraversal(itertrtFunc,order);
  if(order==='in-order') itertrtFunc(this.value);
  if(this.right) this.right.depthFirstTraversal(itertrtFunc,order);
  if(order==='post-order') itertrtFunc(this.value);
};

   /*............Breadth First Traversal............*/

   BST.prototype.breadthFirstTraversal=function (iteratorFunc){
     var queue=[this];
     while(queue.length){
       var treeNode=queue.shift();
       iteratorFunc(treeNode);
       if(treeNode.left) queue.push(treeNode.left);
       if(treeNode.right) queue.push(treeNode.right);
     }
   };

var bst=new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

function log(node){
  console.log(node.value);
}

bst.breadthFirstTraversal(log);