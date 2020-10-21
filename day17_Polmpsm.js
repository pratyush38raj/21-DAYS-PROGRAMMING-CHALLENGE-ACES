class A  
  {  
     display()  
    {
      console.log("A is invoked");  
    }  
  }  
class B extends A  
  {  
    display()  
    {  
      console.log("B is invoked");  
    }  
  }  
  
var a=[new A(), new B()]  
a.forEach(function(msg)  
{  
msg.display();  
});  


/*............Through Prototype Method...............*/


function C()  
{  
}  
C.prototype.display=function()  
{  
  return "C is invoked";  
}  
function D()  
{  
    
}  
  
D.prototype=Object.create(C.prototype);

  
var a=[new C(), new D()]  
  
a.forEach(function(msg) 
{  
  console.log(msg.display());  
});  