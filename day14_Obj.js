var Person = function(name) {
  this.name = name;
  this.gud = true;
};

Person.prototype.greet = function() {
  if (this.gud) {
    console.log('Hi, I am ' + this.name);
  }
};

var Employee = function(name, title) {
  Person.call(this, name);
  this.title = title;
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; 

Employee.prototype.greet = function() {
  if (this.gud) {
    console.log('Hi, I am ' + this.name + ', the ' + this.title);
  }
};

var Customer = function(name) {
  Person.call(this, name);
};

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer; 


var Mime = function(name) {
  Person.call(this, name);
  this.gud = false;
};

Mime.prototype = Object.create(Person.prototype);
Mime.prototype.constructor = Mime; 


var Billu = new Employee('Billu', 'Barber');
var Ramesh = new Customer('Ramesh');
var Chotu= new Employee('Chotu', 'Painter');
var Mahesh = new Customer('Mahesh');
var mime = new Mime('Mime');

Billu.greet();
Ramesh.greet();
Chotu.greet();
Mahesh.greet();
mime.greet();