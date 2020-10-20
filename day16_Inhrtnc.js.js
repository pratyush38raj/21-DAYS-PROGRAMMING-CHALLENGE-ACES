//Constructor function  
function Smartphone(company)  
{  
    this.company=company;   
}  
  
Smartphone.prototype.getCompany=function()  
{  
  return this.company;  
}  
//Another constructor function  
function Model(name,price) {  
 this.name=name;  
  this.price=price;  
  }   
var phone = new Smartphone("Apple");  
Model.prototype=phone;
 
var mdl=new Model("iPhone 12",79990);  
console.log(mdl.getCompany()+" "+mdl.name+" ₹"+mdl.price);  