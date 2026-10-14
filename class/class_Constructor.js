//student attendence syytem

//creating class
//syntax= class classname{
//}

class studentmodel
{

//constructor calling    
constructor (name, rollno,garde)
{
this.name=name;
this.rollno=rollno;
this.grade=garde
this.attendence=0
}

//methods /functions

markattendence()
{
    this.attendence++;
    console.log(`${this.name} attendence marked ,Total Attendence=${this.attendence}`)
}

getResult()
{
    console.log(`${this.name} rollno= ${this.rollno} grade= ${this.grade}`)
}

iseligible(attendence)
{
  // return console.log(this.attendence>=75)  
  if(this.attendence>=75)
  {
    console.log(`${this.name} is eligible for exam`)
  }
  else{
    console.log(`${this.name} is not eligible for exam`)
  }

}
}

//create object
//syntax= let/const obj name= new classname
let studentt= new studentmodel("Mansi",11,"A")
let student1= new studentmodel("Ashwini",12,"B")
studentt.markattendence()
studentt.getResult()
studentt.iseligible()
studentt.markattendence()
student1.markattendence()
student1.getResult()
student1.iseligible()