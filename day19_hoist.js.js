  /*................Variable Hoisting...................*/

x=10;  
console.log(x);  
var x;  


   /*..........Function Hoisting..........*/


console.log(sum(10,20));  
function sum(a,b)  
{  
return a+b;  
}  