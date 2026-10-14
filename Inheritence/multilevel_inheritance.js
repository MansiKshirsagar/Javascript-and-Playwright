class parent 
{

Home()
{
    console.log("2BHK")
}
car()
{
    console.log("BMW")
}

}
console.log("------".repeat(20))
class parents extends parent
{

kitchen()
{
    console.log("modular kitchen")
}
}
console.log("------".repeat(20))
class son extends parents
{

bike() 
{
    console.log("small bike")
}
}
console.log("------".repeat(20))
const S1= new son();
S1.bike();
S1.Home();
S1.car();
S1.kitchen();

