/* ==========================================
   Expense Page JavaScript
========================================== */

const expenseForm = document.getElementById("expenseForm");

if (expenseForm) {

    // Auto Current Date
    document.getElementById("expenseDate").valueAsDate = new Date();

    expenseForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const expense = {

            id: Date.now(),

            type: "expense",

            source: document.getElementById("expenseName").value,

            category: document.getElementById("expenseCategory").value,

            amount: Number(document.getElementById("expenseAmount").value),

            date: document.getElementById("expenseDate").value,

            description: document.getElementById("expenseDescription").value

        };

        addTransaction(expense);

        alert("✅ Expense Added Successfully!");

        expenseForm.reset();

        document.getElementById("expenseDate").valueAsDate = new Date();

    });

}