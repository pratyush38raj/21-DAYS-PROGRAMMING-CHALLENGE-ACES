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

/* removing tail */

LinkedList.prototype.removeTail=function(){
  if(!this.tail) return null;
  var val= this.tail.value;
  this.tail=this.tail.prev;
  if(this.tail) this.tail.next=null;
  else this.head=null;
  return val;
};

/* searching of the value in LINKEDLIST */

LinkedList.prototype.search= function(searchvalue){
  var currentNode=this.head;
  while(currentNode){
    if (currentNode.value===searchvalue)
    currentNode=currentNode.next;
  }
  return null;
};

var ll=new LinkedList();

ll.addToHead(10);
ll.addToHead(20);
ll.addtoTail(30);
ll.addToHead(40);
ll.addtoTail(50);

console.log(ll.search(30));

/* application on LINKEDLIST */

LinkedList.prototype.indexof=function(value){
  var indexes=[];
  var currentIndex=0;
  var currentNode=this.head;
  while(currentNode){
    if(currentNode.value===value){
      indexes.push(currentIndex);
    }
    currentNode.next;
    currentNode++;
  }
};

var myll=new LInkedList();

myll.addToHead('a');
myll.addToHead('b');
myll.addtoTail('a');
myll.addToHead('c');
myll.addToHead('a');

console.log(myll.indexof('a'));
