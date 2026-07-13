/* ==========================================
   Expense Tracker
   Common JavaScript File
========================================== */


/* ===========================
   Local Storage Keys
=========================== */

const STORAGE_KEY = "expenseTrackerData";

const CURRENCY_KEY = "selectedCurrency";

const THEME_KEY = "selectedTheme";


/* ===========================
   Default Data
=========================== */

let transactions = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

let currency = localStorage.getItem(CURRENCY_KEY) || "₹";

let theme = localStorage.getItem(THEME_KEY) || "light";


/* ===========================
   Save Data
=========================== */

function saveTransactions(){

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(transactions)
    );

}


/* ===========================
   Get Data
=========================== */

function getTransactions(){

    return transactions;

}


/* ===========================
   Currency
=========================== */

function saveCurrency(value){

    currency = value;

    localStorage.setItem(CURRENCY_KEY,value);

}


/* ===========================
   Theme
=========================== */

function saveTheme(value){

    theme = value;

    localStorage.setItem(THEME_KEY,value);

}
/* ==========================================
   Add New Transaction
========================================== */

function addTransaction(transaction){

    transactions.push(transaction);

    saveTransactions();

}


/* ==========================================
   Delete Transaction
========================================== */

function deleteTransaction(id){

    transactions = transactions.filter(function(item){

        return item.id !== id;

    });

    saveTransactions();

}


/* ==========================================
   Update Transaction
========================================== */

function updateTransaction(updatedTransaction){

    transactions = transactions.map(function(item){

        if(item.id === updatedTransaction.id){

            return updatedTransaction;

        }

        return item;

    });

    saveTransactions();

}


/* ==========================================
   Calculate Summary
========================================== */

function calculateSummary(){

    let income = 0;

    let expense = 0;

    transactions.forEach(function(item){

        if(item.type === "income"){

            income += Number(item.amount);

        }

        if(item.type === "expense"){

            expense += Number(item.amount);

        }

    });

    const balance = income - expense;

    return{

        income,

        expense,

        balance,

        savings: balance

    };

}
/* ==========================================
   Mobile Sidebar Toggle
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

if(menuBtn && sidebar){

    menuBtn.addEventListener("click", function(){

        sidebar.classList.toggle("active");

    });

    // Sidebar ke bahar click karne par close
    document.addEventListener("click", function(e){

        if(window.innerWidth <= 576){

            if(
                !sidebar.contains(e.target) &&
                !menuBtn.contains(e.target)
            ){
                sidebar.classList.remove("active");
            }

        }

    });

}