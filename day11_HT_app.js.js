function HashTable(size){
  this.buckets=Array(size);
  this.numBuckets=this.buckets.length;
}

function HashNode(key,value,next){
  this.key=key;
  this.value=value;
  this.next=next||null;
}

HashTable.prototype.hash=function(key){
  var total=0;
  for(var i=0; i < key.length; i++)
{
  total += key.charCodeAt(i);
}
var bucket=total%this.numBuckets;
return bucket;
};
 /*............Refactoring or Updating the Insert Method............*/
/*..................Insert Method...................*/

HashTable.prototype.insert=function(key,value){
  var index=this.hash(key);
  if(!this.buckets[index]){
     this.buckets[index]=new HashNode(key,value);
  }

  else if(this.buckets[index].key===key){
    this.buckets[index].value=value;
  }

  else{
    var currentNode=this.buckets[index];
    while(currentNode.next){
      if(currentNode.next.key===key){
        currentNode.next.value=value;
        return;
      }
      currentNode=currentNode.next;
    }
    currentNode.next=new HashNode(key,value);
  }
};

/*....................Get Method...................*/

HashTable.prototype.get=function(key){
  var index=this.hash(key);
  if(!this.buckets[index]){
     return null;
  }

  else{
    var currentNode=this.buckets[index];
    while(currentNode){
      if(currentNode.key===key) return currentNode.value;
      currentNode=currentNode.next;
    }
    return null;
  }  
};

    /*...............Application.................*/
/*..............Retrieve all the data from the hash table..................*/


HashTable.prototype.retrieveAll=function(){
  var allNodes=[];
  for(var i=0; i<this.numBuckets; i++){
    var currentNode=this.buckets[i];
    while(currentNode){
      allNodes.push(currentNode);
      currentNode=currentNode.next;
    }
  }
  return allNodes; 

};

var myHT=new HashTable(30);

myHT.insert('piyush','piyush@gmail.com');
myHT.insert('kumar','kumar@gmail.com');
myHT.insert('pratyush','pratyush@yahoo.com');
myHT.insert('piyush','piyush@yahoo.com');
myHT.insert('pratyush','prtysh@bing.com');
myHT.insert('mahesh','mahesh@bing.com');
myHT.insert('suresh','suresh@gmail.com');


console.log(myHT.retrieveAll());