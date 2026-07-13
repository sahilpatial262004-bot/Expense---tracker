/* ==========================================
   Dashboard JavaScript
========================================== */

const balanceElement = document.getElementById("totalBalance");
const incomeElement = document.getElementById("totalIncome");
const expenseElement = document.getElementById("totalExpense");
const savingsElement = document.getElementById("totalSavings");

function loadDashboard(){

    const summary = calculateSummary();

    if(balanceElement){

        balanceElement.textContent =
        currency + summary.balance.toFixed(2);

    }

    if(incomeElement){

        incomeElement.textContent =
        currency + summary.income.toFixed(2);

    }

    if(expenseElement){

        expenseElement.textContent =
        currency + summary.expense.toFixed(2);

    }

    if(savingsElement){

        savingsElement.textContent =
        currency + summary.savings.toFixed(2);

    }

}

loadDashboard();
/* ==========================================
   Recent Transactions
========================================== */

const recentTransactions = document.getElementById("recentTransactions");

function loadRecentTransactions() {

    if (!recentTransactions) return;

    recentTransactions.innerHTML = "";

    const latestTransactions = [...transactions]
        .sort((a, b) => b.id - a.id)
        .slice(0, 5);

    if (latestTransactions.length === 0) {

        recentTransactions.innerHTML = `
            <tr>
                <td colspan="5">No Transactions Found</td>
            </tr>
        `;

        return;
    }

    latestTransactions.forEach(function(item) {

        const row = document.createElement("tr");

        row.innerHTML = `

            <td>${item.date}</td>

            <td>${item.category}</td>

            <td>${item.source || item.description}</td>

            <td style="color:${item.type === "income" ? "#2ecc71" : "#ff4d4d"};font-weight:600;">

                ${item.type.toUpperCase()}

            </td>

            <td>

                ${currency}${Number(item.amount).toFixed(2)}

            </td>

        `;

        recentTransactions.appendChild(row);

    });

}

/* ==========================================
   Load Dashboard
========================================== */

loadDashboard();

loadRecentTransactions();