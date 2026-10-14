class parent{

home()
{
    console.log("parent methods = Home")
}


}


class childmethod extends parent
{

toys()
{
    console.log("child methods-TOYS")
}


}

const S1= new childmethod();
S1.toys();
S1.home();
