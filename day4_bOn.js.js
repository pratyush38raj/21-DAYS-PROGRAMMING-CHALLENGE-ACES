                    /* THE BIG O NOTATION */
/*.................................................................*/

function log(array){                //constant runtime
   console.log(array[0]);
   console.log(array[1]);          //Big O Notation : o(1)

}

log([1,2,3,4]);
log([1,2,3,4,5,6,7,8]);


                        /*...............*/


function logAll(array){                            //linear runtime
  for(var i=0; i<array.length; i++){               // Big O Notation: O(n)
    console.log(array[i]);
  }                                                           
}     

logAll([1,2,3,4]);
logAll([1,2,3,4,5]);
logAll([1,2,3,4,5,6]);

                      /*................*/  


function addAndlog(array){                       //Exponential runtime
  for(var i=0; i<array.length; i++){             //Big O Notation : O(n^2)
      for(var j=0; j<array.length; j++){
        console.log(array[i]+array[j]);
      }
  }
}

addAndlog(['a','b','c']);
addAndlog(['a','b','c','d']);
addAndlog(['a','b','c','d','e']);

                      /*.................*/

 function binarysearch(array,key){              //Logarithmic runtime
   var low=0;                                   // Big O Notation : O(log n)
   var high=array.length-1;
   var mid;
   var element;

   while(low<=high){
     mid=Math.floor((low+high)/2,10);
     element=array[mid];
     if(element<key){
       low=mid+1;
    } else if(element>key){
      high=mid-1;
    } else{
      return mid;
    }
   }
   return -1;
 }                     