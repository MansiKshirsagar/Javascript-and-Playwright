class Abstraction
{

#entermobile()
{
    console.log("enter mobile number")
}
#enterpin()
{
    console.log("enter pin")
}

#enteramount()
{
    console.log("enteramount")
}

collectmoney()
{
this.#entermobile();
this.#enterpin();
this.#enteramount();
}
}

let ab= new Abstraction();
ab.collectmoney();