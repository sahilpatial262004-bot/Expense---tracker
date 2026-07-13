<!DOCTYPE html>
<html lang="en">

<head>

    <!-- Meta Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Title -->
    <title>Expense Tracker | Dashboard</title>

    <!-- Google Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">

    <!-- CSS Files -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="stylesheet" href="css/animation.css">

</head>

<body>

    <!-- ==========================
            Main Container Start
    =========================== -->

    <div class="container">

        <!-- ==========================
                Sidebar Start
        =========================== -->

        <aside class="sidebar">

            <!-- Logo -->

            <div class="logo">
                <h2>Expense Tracker</h2>
            </div>

            <!-- Navigation Menu -->

            <nav>

                <ul>

                    <li class="active">
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

                    <li>
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

        <!-- ==========================
                Sidebar End
        =========================== -->



        <!-- ==========================
            Main Content Start
        =========================== -->

        <main class="main-content">

            <!-- ==========================
                    Navbar Start
            =========================== -->

            <header class="navbar">

                <!-- Left -->

                <div class="nav-left">

                    <button class="menu-btn">
                        <i class="fa-solid fa-bars"></i>
                    </button>

                    <h1>Dashboard</h1>

                </div>

                <!-- Right -->

                <div class="nav-right">

                    <!-- Currency -->

                    <select>

                        <option>₹ INR</option>
                        <option>$ USD</option>
                        <option>€ EUR</option>

                    </select>

                    <!-- Dark Mode -->

                    <button class="theme-btn">
                        <i class="fa-solid fa-moon"></i>
                    </button>

                    <!-- User -->

                    <div class="user">

                        <i class="fa-solid fa-circle-user"></i>

                    </div>

                </div>

            </header>

            <!-- ==========================
                    Navbar End
            =========================== -->
                        <!-- ==========================
                    Dashboard Cards Start
            =========================== -->

            <section class="dashboard-cards">

                <!-- Balance Card -->

                <div class="card balance-card">

                    <div class="card-icon">
                        <i class="fa-solid fa-wallet"></i>
                    </div>

                    <div class="card-info">
                        <h4>Total Balance</h4>
                        <h2 id="totalBalance">₹0.00</h2>
                    </div>

                </div>

                <!-- Income Card -->

                <div class="card income-card">

                    <div class="card-icon">
                        <i class="fa-solid fa-arrow-trend-up"></i>
                    </div>

                    <div class="card-info">
                        <h4>Total Income</h4>
                        <h2 id="totalIncome">₹0.00</h2>
                    </div>

                </div>

                <!-- Expense Card -->

                <div class="card expense-card">

                    <div class="card-icon">
                        <i class="fa-solid fa-arrow-trend-down"></i>
                    </div>

                    <div class="card-info">
                        <h4>Total Expense</h4>
                        <h2 id="totalExpense">₹0.00</h2>
                    </div>

                </div>

                <!-- Savings Card -->

                <div class="card savings-card">

                    <div class="card-icon">
                        <i class="fa-solid fa-piggy-bank"></i>
                    </div>

                    <div class="card-info">
                        <h4>Total Savings</h4>
                        <h2 id="totalSavings">₹0.00</h2>
                    </div>

                </div>

            </section>

            <!-- ==========================
                    Dashboard Cards End
            =========================== -->



            <!-- ==========================
                Recent Transactions Start
            =========================== -->

            <section class="transactions">

                <div class="section-header">

                    <h2>Recent Transactions</h2>

                    <a href="history.html" class="view-all">
                        View All
                    </a>

                </div>

                <div class="table-container">

                    <table>

                        <thead>

                            <tr>

                                <th>Date</th>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Type</th>
                                <th>Amount</th>

                            </tr>

                        </thead>

                        <tbody id="recentTransactions">

                            <tr>

                                <td colspan="5">

                                    No Transactions Found

                                </td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </section>

            <!-- ==========================
                Recent Transactions End
            =========================== -->



            <!-- ==========================
                Quick Actions Start
            =========================== -->

            <section class="quick-actions">

                <a href="add-income.html" class="action-btn income-btn">

                    <i class="fa-solid fa-plus"></i>

                    Add Income

                </a>

                <a href="add-expense.html" class="action-btn expense-btn">

                    <i class="fa-solid fa-minus"></i>

                    Add Expense

                </a>

            </section>

            <!-- ==========================
                Quick Actions End
            =========================== -->
                        <!-- ==========================
                    Footer Start
            =========================== -->

            <footer class="footer">

                <p>
                    © 2026 Expense Tracker. All Rights Reserved.
                </p>

            </footer>

            <!-- ==========================
                    Footer End
            =========================== -->

        </main>

        <!-- ==========================
                Main Content End
        =========================== -->

    </div>

    <!-- ==========================
            Main Container End
    =========================== -->



    <!-- ==========================
            JavaScript Files
    =========================== -->

    <script src="js/app.js"></script>
    <script src="js/dashboard.js"></script>

</body>

</html>
