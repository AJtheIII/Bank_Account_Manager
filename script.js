
//! Bank Account Manager
//? Create a program that allows a user to manage a simple bank account, including depositing, withdrawing, and checking the balance.
//TODO Define Variables: Start with a balance variable.
let bankBal = 100 //setting original balance for account
let depositAmount = 60;
let withdrawFunds = 75 //set amount to withdraw
console.log("The starting balance of this account is " + bankBal);

makeDeposit(60
    
)//calling function

console.log(depositAmount + " was deposited into the account.")
console.log("The updated balance of this account is " + bankBal);

withdraw(withdrawFunds)
console.log(`There was a withdrawal of ${withdrawFunds} made to the account.`)

checkBalance(bankBal)


//TODO Create Functions: Create functions to deposit money, withdraw money, and check the balance.

function makeDeposit(depositAmount){
    bankBal = bankBal + depositAmount;
}


//create function that takes deposit amount and add that amount to bank balance



 //create function that subtracts withdrawal amount from bank balance *consider if/else parameters

// debugger
 function withdraw(withdrawFunds){
    bankBal = bankBal - withdrawFunds
     //TODO Use if-else Statements: Use if-else statements to ensure the withdrawal amount does not exceed the balance.
    //check if withdraw is valid/less than current balance
    if(withdrawFunds > bankBal){
        console.log("Insufficient Funds");
    }else if(withdrawFunds <= bankBal){
        console.log("The updated balance of this account is " + bankBal)
    }
 }  

// //create function that updates balance after deposit and withdrawals have been completed
function checkBalance(currentBalance){
    console.log(`The current balance of the account is ${currentBalance}`);
}

//* Output Results: Use console.log to display the updated balance after each operation