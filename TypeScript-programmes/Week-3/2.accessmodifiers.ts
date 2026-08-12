class BankAccount {
    public accountHolder: string;
    private balance: number;
    protected bankName: string;

    constructor(accountHolder: string, balance: number) {
        this.accountHolder = accountHolder;
        this.balance = balance;
        this.bankName = "State Bank";
    }

    public showDetails(): void {
        console.log("Account Holder: " + this.accountHolder);
        console.log("Balance: " + this.balance);
    }
}

class SavingsAccount extends BankAccount {
    public showBank(): void {
        console.log("Bank Name: " + this.bankName);
    }
}
const account1 = new BankAccount("Rahul", 25000);
account1.showDetails();

const account2 = new SavingsAccount("Anita", 50000);
account2.showDetails();
account2.showBank();
