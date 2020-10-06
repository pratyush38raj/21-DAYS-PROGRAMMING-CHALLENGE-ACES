function LinkedList(){
  this.head=null;
  this.tail=null;
}

function Node(value, next, prev){
  this.value=value;
  this.next=next;
  this.prev=prev;
}

var node1=new Node(100,'node2',null);

console.log(node1);

/*adding head to the linked list*/

LinkedList.prototype.addToHead=function(value) {
  var newNode=new Node(value,this.head,null);
  if(this.head)this.head.prev=newNode;
  else this.tail=newNode;
  this.head=newNode;
};

var ll=new LinkedList();

ll.addToHead(50);

console.log(ll);

ll.addToHead(100);
ll.addToHead(500);

console.log(ll);

/*adding tail to the linkedlist*/

LinkedList.prototype.addtoTail=function(value){
  var newNode=new Node(value,null,this.tail);
  if(this.tail)this.tail.next=newNode;
  else this.head=newNode;
  this.tail=newNode;
};

var myll=new LinkedList();

myll.addtoTail(1000);

console.log(myll);

myll.addtoTail(10);
myll.addtoTail(20);
myll.addtoTail(30);

console.log(myll);

console.log(myll.tail.prev.prev);
