/*....................Loops.........................*/
        /*.......While Loop........*/


var sum = 0;
var number = 1;
while (number <= 100) {  
  sum += number;        
  number++;           
}
alert("Sum = " + sum);


          /*.........Do While Loop.............*/

var sum = 0;
var number = 1;
do {
   sum += number;         
   number++;              
} while (number <= 100);   
alert("Sum = " + sum);  


          /*...........For Loop..............*/

var sum = 0;
for (var i = 1; i <= 100; i++) {
   sum = sum + i;
}
alert("Sum = " + sum); 


          /*...........For-In Loop.............*/

var Student = function(name) {
    this.name = name;
}
Student.prototype.age = 38;
var student = new Student("Carl");
for (var item in student) {
   if (student.hasOwnProperty(item)) {
       alert (student[item]);         
   }
}


         /*.............Break Statement...............*/


var sum = 0;
for (var i = 1; i <= 10000; i++) {
   sum += i;
   if (i === 50) {
       break;    
   }
}
alert("Sum = " + sum); 


        /*................Continue Statement.............*/


var number = 0;
while (number <= 10) {
   number++;
   if ((number % 2) != 0) {
       continue;
   }
   alert(number);     
}        