class Student  
  {  
    constructor()  
    {  
       var name;  
       var marks;  
    }  
        getName()  
        {  
          return this.name;  
        }  
      setName(name)  
      {  
        this.name=name;  
      }  
        
      getMarks()  
      {  
        return this.marks;  
      }  
    setMarks(marks)  
    {  
        if(marks<33)  
        {  
          alert("Condidate Fail");  
          this.marks=marks; 
        }   
         
    }  
    }  
    var stud=new Student();  
     stud.setName("John");  
     stud.setMarks(22);//alert() invokes  
     console.log(stud.getName()+" "+stud.getMarks());  