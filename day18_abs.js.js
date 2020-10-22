//Creating a constructor function  
 function Phone()  
{  
    this.phoneName="phoneName";  
    throw new Error("You cannot create an instance of Abstract Class");  
}  
Phone.prototype.display=function()  
{  
    return "phone is: "+this.phoneName;  
}  
//Creating a constructor function  
function Smartphone(phoneName)  
{  
    this.phoneName=phoneName;  
}  
//Creating object without using the function constructor  
Smartphone.prototype=Object.create(Phone.prototype);  
var smartphone=new Smartphone("iPhone");  
console.log(smartphone.display());  
  
  