
//! Bank Account Manager
//? Create a program that allows a user to manage a simple bank account, including depositing, withdrawing, and checking the balance.
//TODO Define Variables: Start with a balance variable.
let bankBal = 13798.22 //setting original balance for account


console.log("The starting balance of this account is " + bankBal);

//TODO Create Functions: Create functions to deposit money, withdraw money, and check the balance.
let depositAmount = 600;

makeDeposit(600)//calling function
withdraw()
// checkBalance()

// let withdrawFunds = 750;
//    console.log(withdrawFunds + " was withdrawn from the account.")

//create function that takes deposit amount and add that amount to bank balance
function makeDeposit(depositAmount){
    bankBal = bankBal + depositAmount;
}
console.log(depositAmount + " was deposited into the account.")
console.log("The current balance of this account is " + bankBal);

 
 //create function that subtracts withdrawal amount from bank balance *consider if/else parameters

//function withdraw 
 //TODO Use if-else Statements: Use if-else statements to ensure the withdrawal amount does not exceed the balance.

// if(withdrawal <= bankBal){
//     console.log( [bankBal - withdrawal ] + " is the account balance after withdrawal.");
// }else if(withdrawal > bankBal){
//     console.log("Withdrawal cannot be made.")
// }

// //create function that updates balance after deposit and withdrawals have been completed
// function checkBalance

//* Output Results: Use console.log to display the updated balance after each operation