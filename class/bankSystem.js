class banksystem
{

/*
check balance
deposit amount
check balance
withdarw amount
get statement 
*/

//create constructor
constructor (accountholder,accountnum, balance,)
{
this.accountholder=accountholder;
this.accountnum=accountnum;
this.balance=balance;
this.transaction=[];
}

checkbalnce()
{
    console.log(`current acc balnce is ${this.balance}`)
}

deposit(amount)
{
    this.balance+=amount;
    this.transaction.push( `deposited amount is- ${amount}`)
    console.log(`after deposit ${amount} Total balance is= ${this.balance}`)
}


withdarwal(amount)
{
    this.balance-=amount
    this.transaction.push(`withdrawal amount is- ${amount}`)
    console.log(`after withdrawal ${amount} your Total balance is= ${this.balance}`)
}

getstatement()
{
    console.log(this.transaction) 
}

}

let bank1= new banksystem("Mansi",123456,50000);
bank1.checkbalnce()
bank1.deposit(10000)
bank1.withdarwal(5000)
bank1.getstatement()

