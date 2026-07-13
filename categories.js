<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Transaction History | Expense Tracker</title>

    <!-- Google Font -->

    <link rel="preconnect" href="https://fonts.googleapis.com">

    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- Font Awesome -->

    <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">

    <!-- CSS -->

    <link rel="stylesheet" href="css/style.css">

    <link rel="stylesheet" href="css/responsive.css">

    <link rel="stylesheet" href="css/animation.css">

</head>

<body>

<div class="container">

    <!-- Sidebar -->

    <aside class="sidebar">

        <div class="logo">

            <h2>Expense Tracker</h2>

        </div>

        <nav>

            <ul>

                <li>

                    <a href="index.html">

                        <i class="fa-solid fa-house"></i>

                        Dashboard

                    </a>

                </li>

                <li>

                    <a href="add-income.html">

                        <i class="fa-solid fa-wallet"></i>

                        Add Income

                    </a>

                </li>

                <li>

                    <a href="add-expense.html">

                        <i class="fa-solid fa-money-bill-wave"></i>

                        Add Expense

                    </a>

                </li>

                <li class="active">

                    <a href="history.html">

                        <i class="fa-solid fa-clock-rotate-left"></i>

                        History

                    </a>

                </li>

                <li>

                    <a href="reports.html">

                        <i class="fa-solid fa-chart-pie"></i>

                        Reports

                    </a>

                </li>

                <li>

                    <a href="categories.html">

                        <i class="fa-solid fa-layer-group"></i>

                        Categories

                    </a>

                </li>

                <li>

                    <a href="settings.html">

                        <i class="fa-solid fa-gear"></i>

                        Settings

                    </a>

                </li>

            </ul>

        </nav>

    </aside>

    <!-- Main Content -->

    <main class="main-content">

        <header class="navbar">

            <div class="nav-left">

                <button class="menu-btn">

                    <i class="fa-solid fa-bars"></i>

                </button>

                <h1>Transaction History</h1>

            </div>

            <div class="nav-right">

                <div class="user">

                    <i class="fa-solid fa-circle-user"></i>

                </div>

            </div>

        </header>
                <!-- ==========================
                History Filter Section
        =========================== -->

        <!-- ==========================
        History Filter Section
========================== -->

<section class="history-filters">

    <div class="filter-group">
        <label>Search</label>
        <input
            type="text"
            id="searchTransaction"
            placeholder="🔍 Search Transaction...">
    </div>

    <div class="filter-group">
        <label>Date</label>
        <input
            type="date"
            id="filterDate">
    </div>

    <div class="filter-group">
        <label>Category</label>
        <select id="filterCategory">
            <option value="">All Categories</option>

            <option>Salary</option>
            <option>Business</option>
            <option>Freelancing</option>

            <option>Food</option>
            <option>Travel</option>
            <option>Shopping</option>
            <option>Bills</option>
            <option>Medical</option>
            <option>Education</option>
            <option>Entertainment</option>
            <option>Other</option>

        </select>
    </div>

    <div class="filter-group btn-group">
        <button id="resetFilter" class="action-btn">
            🔄 Reset
        </button>
    </div>

</section>

        <!-- ==========================
                History Table
        =========================== -->

        <section class="transactions">

            <div class="section-header">

                <h2>All Transactions</h2>

            </div>

            <div class="table-container">

                <table>

                    <thead>

                        <tr>

                            <th>Date</th>

                            <th>Type</th>

                            <th>Category</th>

                            <th>Name</th>

                            <th>Amount</th>

                            <th>Action</th>

                        </tr>

                    </thead>

                    <tbody id="historyTable">

                    </tbody>

                </table>

            </div>

        </section>
                <!-- ==========================
                Footer Start
        =========================== -->

        <footer class="footer">

            <p>
                © 2026 Expense Tracker. All Rights Reserved.
            </p>

        </footer>

    </main>

</div>
<!-- ==========================
        Edit Transaction Modal
========================== -->

<div id="editModal" class="modal">

    <div class="modal-content">

        <h2>Edit Transaction</h2>

        <form id="editForm">

            <input type="hidden" id="editId">

            <!-- Name -->
            <div class="form-group">

                <label>Name</label>
                <input type="text" id="editName" required>

            </div>

            <!-- Category -->
            <div class="form-group">

                <label>Category</label>
                <input type="text" id="editCategory" required>

            </div>

            <!-- Amount -->
            <div class="form-group">

                <label>Amount</label>
                <input type="number" id="editAmount" required>

            </div>

            <!-- Date -->
            <div class="form-group">

                <label>Date</label>
                <input type="date" id="editDate" required>

            </div>

            <!-- Buttons -->
            <div class="modal-actions">

                <button type="submit" class="save-btn">
                    Update
                </button>

                <button type="button" id="closeModal" class="cancel-btn">
                    Cancel
                </button>

            </div>

        </form>

    </div>

</div>
<!-- JavaScript -->

<script src="js/app.js"></script>
<script src="js/history.js"></script>

</body>
</html>