class BankAccount {
  #balance = 5000; // Private field

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(1000);

console.log(account.getBalance()); // 1000
// console.log(account.#balance); // Error: Private field cannot be accessed


//ENCAPSULATION---