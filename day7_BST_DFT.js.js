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

BST.prototype.depthFirstTraversal=function(itertrtFunc){
  if(this.left) this.left.depthFirstTraversal(itertrtFunc);
  itertrtFunc(this.value);
  if(this.right) this.right.depthFirstTraversal(itertrtFunc);
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

bst.depthFirstTraversal(log);

function log(value){
  console.log(value);
}