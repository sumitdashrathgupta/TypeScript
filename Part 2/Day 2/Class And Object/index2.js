//! Encapsulation  - It is used for data hadding .
//? we can used private ,
//? you can modfig private (value) variable setter() ,
//? You can get private value getter()
var ATM = /** @class */ (function () {
    function ATM() {
        this.case = 12000;
    }
    ATM.prototype.getCase = function () {
        return this.case;
    };
    ATM.prototype.setcase = function (amount) {
        this.case = amount;
    };
    ATM.prototype.withdraw = function (amount) {
        console.log("case withdram ".concat(amount));
        console.log("Current Balance");
        console.log((this.case -= amount));
    };
    return ATM;
}());
var p1 = new ATM();
p1.setcase(6000);
console.log("Balance", p1.getCase());
p1.withdraw(500);
/*class ATM {
    private cash: number = 12000;
  
    constructor(initialCash?: number) {
      if (initialCash !== undefined) {
        this.cash = initialCash;
      }
    }
  
    // Getter to retrieve the private cash value
    public getCash(): number {
      return this.cash;
    }
  
    // Setter to modify the private cash value
    public setCash(amount: number): void {
      if (amount >= 0) {
        this.cash = amount;
      } else {
        console.log("Invalid amount. Cash cannot be negative.");
      }
    }
  
    // Method to withdraw cash
    public withdraw(amount: number): void {
      if (amount > 0 && amount <= this.cash) {
        this.cash -= amount;
        console.log(`Withdrawal successful. Remaining balance: ${this.cash}`);
      } else {
        console.log("Insufficient funds or invalid amount.");
      }
    }
  }
  
  // Creating an ATM instance
  const atm = new ATM();
  atm.setCash(2999);
  console.log("Current Balance:", atm.getCash());
  atm.withdraw(500);
  console.log("Updated Balance:", atm.getCash());
  */
