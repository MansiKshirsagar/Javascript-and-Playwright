class banksystem{


#balance;
#pin;

constructor (name , amount, pin)
{
this.name=name
this.#balance=amount
this.#pin=pin
}

deposit(amount)
{
console.log(`Account balance is ${this.#balance}`)
this.#balance+=amount
console.log(`After deposit ${amount} acc balance is ${this.#balance}`)
}

withdrawal(amount)
{
if(amount<=this.#balance)
{
    this.#balance-=amount
    console.log(`withdrawal amount is ${amount} and remaining balance is ${this.#balance}`)
}
else{
    console.log(`insufficient fund`)
}
}

checkbalance(pin)
{
    if(pin===this.#pin)
    {
        console.log(`your account balance is ${this.#balance}`)
    }
    else{
        console.log(`wrong pin entered`)
    }
}
   
}

let bankpin= new banksystem("mansi",50000,852852)

bankpin.deposit(1000)
bankpin.withdrawal(2000)
bankpin.checkbalance(852852)


/*class BankSystem {

  #balance;
  #pin;

  constructor(name, amount, pin) {
    this.name = name;
    this.#balance = amount;
    this.#pin = pin;
  }

  deposit(amount) {
    this.#balance += amount;
    console.log(`After deposit account balance is ${this.#balance}`);
  }

  withdrawal(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrawal amount is ${amount} and remaining balance is ${this.#balance}`);
    } else {
      console.log("Insufficient fund");
    }
  }

  checkbalance(pin) {
    if (pin === this.#pin) {
      console.log(`Your account balance is ${this.#balance}`);
    } else {
      console.log("Wrong pin entered");
    }
  }
}

let bankpin = new BankSystem("Mansi", 50000, 852852);

bankpin.deposit(1000);
bankpin.withdrawal(2000);
bankpin.checkbalance(852852);*/