class BankAccount {
  #balance;

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error('Deposit amount must be positive.');
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) throw new Error('Insufficient balance.');
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(100);

try {
  account.deposit(50);
  console.log('Balance after deposit:', account.getBalance());
  account.withdraw(120);
  console.log('Balance after withdrawal:', account.getBalance());
  account.withdraw(50); // Should throw error
} catch (err) {
  console.error('Transaction Error:', err.message);
}

console.log('Final Balance:', account.getBalance());
