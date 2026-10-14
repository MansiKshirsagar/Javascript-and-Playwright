class Animal
{

constructor(name)
{
this .name=name
}

    dog()
    {
        console.log("i am a dog")
    }
}

class Cat extends Animal
{
    constructor (name,age)
    {
        super(name)
        this.age=age
    }

    cutie()
    {
        console.log(`my name is ${this.name}, i am ${this.age} year old cat`)
    }
}

const C1=new Cat("minuu",1);
C1.dog();
C1.cutie();