/* =====================================
   Google Font
===================================== */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');


/* =====================================
   CSS Reset
===================================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{
    font-family:'Poppins',sans-serif;
    background:#f4f7fe;
    color:#222;
    overflow-x:hidden;
}


/* =====================================
   Root Variables
===================================== */

:root{

    --primary:#6C63FF;
    --primary-dark:#574bdb;

    --success:#2ecc71;
    --danger:#ff4d4d;
    --warning:#f39c12;

    --white:#ffffff;
    --black:#222222;

    --text:#444;
    --border:#e5e7eb;

    --shadow:0 10px 30px rgba(0,0,0,.08);

    --radius:15px;

}


/* =====================================
   Links
===================================== */

a{
    text-decoration:none;
    color:inherit;
}

ul{
    list-style:none;
}

button{
    border:none;
    outline:none;
    cursor:pointer;
    font-family:inherit;
}

input,
select{
    outline:none;
    font-family:inherit;
}


/* =====================================
   Main Container
===================================== */

.container{

    display:flex;

    width:100%;

    min-height:100vh;
    width:100%;
overflow-x:hidden;

}


/* =====================================
   Main Content
===================================== */

.main-content{

    flex:1;

    padding:25px;

}
/* =====================================
   Sidebar
===================================== */

.sidebar{

    width:270px;
    min-height:100vh;

    background:linear-gradient(180deg,#6C63FF,#5A52E8);

    color:#fff;

    padding:25px;

    position:fixed;

    left:0;
    top:0;

    overflow-y:auto;

    box-shadow:var(--shadow);

}

.logo{

    text-align:center;

    margin-bottom:40px;

}

.logo h2{

    font-size:28px;

    font-weight:700;

    letter-spacing:1px;

}

.sidebar nav ul{

    display:flex;

    flex-direction:column;

    gap:10px;

}

.sidebar nav ul li{

    border-radius:12px;

    transition:.3s;

}

.sidebar nav ul li a{

    display:flex;

    align-items:center;

    gap:15px;

    padding:15px 18px;

    color:#fff;

    font-size:16px;

    font-weight:500;

}

.sidebar nav ul li:hover{

    background:rgba(255,255,255,.15);

}

.sidebar nav ul li.active{

    background:#fff;

}

.sidebar nav ul li.active a{

    color:var(--primary);

}

.sidebar i{

    font-size:18px;

    width:20px;

}


/* =====================================
   Main Content
===================================== */

.main-content{

    margin-left:270px;

    padding:30px;

}
/* =====================================
   Navbar
===================================== */

.navbar{

    background:#fff;

    padding:20px 30px;

    border-radius:15px;

    box-shadow:var(--shadow);

    display:flex;

    justify-content:space-between;

    align-items:center;

    margin-bottom:30px;

}

.nav-left{

    display:flex;

    align-items:center;

    gap:20px;

}

.nav-left h1{

    font-size:28px;

    font-weight:600;

    color:var(--black);

}

.menu-btn{

    width:45px;

    height:45px;

    border-radius:10px;

    background:var(--primary);

    color:#fff;

    font-size:18px;

    transition:.3s;

}

.menu-btn:hover{

    background:var(--primary-dark);

}

.nav-right{

    display:flex;

    align-items:center;

    gap:20px;

}

.nav-right select{

    padding:10px 15px;

    border:1px solid var(--border);

    border-radius:10px;

    font-size:15px;

    cursor:pointer;

    background:#fff;

}

.theme-btn{

    width:45px;

    height:45px;

    border-radius:50%;

    background:#f4f7fe;

    color:var(--primary);

    font-size:18px;

    transition:.3s;

}

.theme-btn:hover{

    background:var(--primary);

    color:#fff;

}

.user{

    width:45px;

    height:45px;

    border-radius:50%;

    background:var(--primary);

    display:flex;

    justify-content:center;

    align-items:center;

    color:#fff;

    font-size:22px;

    cursor:pointer;

}
/* =====================================
   Dashboard Cards
===================================== */

.dashboard-cards{

    display:grid;

    grid-template-columns:repeat(4,1fr);

    gap:25px;

    margin-bottom:30px;

}

.card{

    background:#fff;

    border-radius:18px;

    padding:25px;

    display:flex;

    align-items:center;

    gap:20px;

    box-shadow:var(--shadow);

    transition:.3s;

    cursor:pointer;

}

.card:hover{

    transform:translateY(-8px);

}

.card-icon{

    width:70px;

    height:70px;

    border-radius:50%;

    display:flex;

    justify-content:center;

    align-items:center;

    color:#fff;

    font-size:28px;

}

.balance-card .card-icon{

    background:#6C63FF;

}

.income-card .card-icon{

    background:#2ecc71;

}

.expense-card .card-icon{

    background:#ff4d4d;

}

.savings-card .card-icon{

    background:#f39c12;

}

.card-info{

    display:flex;

    flex-direction:column;

}

.card-info h4{

    font-size:15px;

    color:#777;

    margin-bottom:8px;

    font-weight:500;

}

.card-info h2{

    font-size:28px;

    color:#222;

    font-weight:700;

}
/* =====================================
   Recent Transactions
===================================== */

.transactions{

    background:#fff;

    padding:25px;

    border-radius:18px;

    box-shadow:var(--shadow);

    margin-bottom:30px;

}

.section-header{

    display:flex;

    justify-content:space-between;

    align-items:center;

    margin-bottom:20px;

}

.section-header h2{

    font-size:24px;

    color:var(--black);

}

.view-all{

    color:var(--primary);

    font-weight:600;

    transition:.3s;

}

.view-all:hover{

    color:var(--primary-dark);

}

.table-container{

    width:100%;

    overflow-x:auto;

}

table{

    width:100%;

    border-collapse:collapse;

}

table thead{

    background:#f4f7fe;

}

table th{

    padding:15px;

    text-align:left;

    color:#555;

    font-weight:600;

}

table td{

    padding:16px;

    border-bottom:1px solid var(--border);

    color:#666;

}

tbody tr{

    transition:.3s;

}

tbody tr:hover{

    background:#f9f9ff;

}
/* =====================================
   Quick Actions
===================================== */

.quick-actions{

    display:flex;

    gap:20px;

    margin-bottom:30px;

}

.action-btn{

    display:flex;

    align-items:center;

    justify-content:center;

    gap:10px;

    flex:1;

    padding:18px;

    border-radius:15px;

    color:#fff;

    font-size:18px;

    font-weight:600;

    transition:.3s;

    box-shadow:var(--shadow);

}

.income-btn{

    background:#2ecc71;

}

.expense-btn{

    background:#ff4d4d;

}

.action-btn:hover{

    transform:translateY(-5px);

    opacity:.9;

}


/* =====================================
   Footer
===================================== */

.footer{

    margin-top:30px;

    text-align:center;

    padding:20px;

    color:#777;

    font-size:15px;

}
/* =====================================
   Form Section
===================================== */

.form-section{

    display:flex;

    justify-content:center;

    align-items:flex-start;

    margin-top:20px;

}

.form-container{

    width:100%;

    max-width:750px;

    background:#fff;

    padding:35px;

    border-radius:20px;

    box-shadow:var(--shadow);

}

.form-container h2{

    text-align:center;

    margin-bottom:30px;

    font-size:28px;

    color:var(--primary);

}

.form-group{

    display:flex;

    flex-direction:column;

    margin-bottom:22px;

}

.form-group label{

    font-size:15px;

    font-weight:600;

    margin-bottom:8px;

    color:#444;

}

.form-group input,
.form-group select,
.form-group textarea{

    width:100%;

    padding:15px;

    border:1px solid #ddd;

    border-radius:12px;

    font-size:16px;

    font-family:'Poppins',sans-serif;

    transition:.3s;

    background:#fafafa;

}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus{

    border-color:var(--primary);

    background:#fff;

    box-shadow:0 0 8px rgba(108,99,255,.2);

}

.form-group textarea{

    resize:none;

}


/* =====================================
   Save Button
===================================== */

.save-btn{

    width:100%;

    padding:16px;

    background:var(--success);

    color:#fff;

    border:none;

    border-radius:12px;

    font-size:18px;

    font-weight:600;

    cursor:pointer;

    transition:.3s;

}

.save-btn:hover{

    background:#27ae60;

    transform:translateY(-2px);

}
/* ==========================
   Modal
========================== */

.modal{
    display:none;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.5);
    justify-content:center;
    align-items:center;
}

.modal-content{
    background:#fff;
    padding:20px;
    width:400px;
    border-radius:10px;
}

.modal-actions{
    display:flex;
    justify-content:space-between;
    margin-top:10px;
}

.cancel-btn{
    background:#ff4d4d;
    color:#fff;
    padding:10px;
    border:none;
    cursor:pointer;
}
/* ==========================================
   History Filters
========================================== */

.history-filters{

    display:flex;
    flex-wrap:wrap;
    gap:20px;

    background:#fff;

    padding:25px;

    margin:25px 0;

    border-radius:15px;

    box-shadow:0 10px 30px rgba(0,0,0,.08);

}

.filter-group{

    display:flex;

    flex-direction:column;

    flex:1;

    min-width:220px;

}

.filter-group label{

    font-size:14px;

    font-weight:600;

    color:#555;

    margin-bottom:8px;

}

.filter-group input,
.filter-group select{

    width:100%;

    padding:12px 15px;

    border:1px solid #ddd;

    border-radius:10px;

    outline:none;

    font-size:15px;

    transition:.3s;

    background:#fff;

}

.filter-group input:focus,
.filter-group select:focus{

    border-color:#4f7cff;

    box-shadow:0 0 0 4px rgba(79,124,255,.15);

}

.btn-group{

    justify-content:flex-end;

}

.action-btn{

    margin-top:30px;

    height:48px;

    background:#4f7cff;

    color:#fff;

    border:none;

    border-radius:10px;

    padding:0 25px;

    cursor:pointer;

    font-size:15px;

    font-weight:600;

    transition:.3s;

}

.action-btn:hover{

    background:#2f62ff;

    transform:translateY(-2px);

}