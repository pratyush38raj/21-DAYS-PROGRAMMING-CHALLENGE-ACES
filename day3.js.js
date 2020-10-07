function LinkedList(){
  this.head=null;
  this.tail=null;
}

function Node(value, next, prev){
  this.value=value;
  this.next=next;
  this.prev=prev;
}


/*adding head to the linked list*/

LinkedList.prototype.addToHead=function(value) {
  var newNode=new Node(value,this.head,null);
  if(this.head)this.head.prev=newNode;
  else this.tail=newNode;
  this.head=newNode;
};


/*adding tail to the linkedlist*/

LinkedList.prototype.addtoTail=function(value){
  var newNode=new Node(value,null,this.tail);
  if(this.tail)this.tail.next=newNode;
  else this.head=newNode;
  this.tail=newNode;
};

/* removing head */

LinkedList.prototype.removeHead=function(){
  if(!this.head) return null;
  var val=this.head.value;
  this.head=this.head.next;
  if(this.head) this.head.prev=null;
  else this.tail=null;
  return val;

};


var ll=new LinkedList();

ll.addToHead(5000);
ll.addToHead(3000);
ll.addtoTail(2000);

ll.removeHead();

console.log(ll.removeHead);

/* removing tail */

LinkedList.prototype.removeTail=function(){
  if(!this.tail) return null;
  var val= this.tail.value;
  this.tail=this.tail.prev;
  if(this.tail) this.tail.next=null;
  else this.head=null;
  return val;
};

var myll=new LinkedList();

myll.addToHead('a');
myll.addToHead('b');
myll.addtoTail('c');

console.log(myll.removeTail());


