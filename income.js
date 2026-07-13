/* ==========================================
   Categories System
========================================== */

let categories = JSON.parse(localStorage.getItem("categories")) || [];

const categoryForm = document.getElementById("categoryForm");
const categoryTable = document.getElementById("categoryTable");

/* Save Categories */
function saveCategories() {
    localStorage.setItem("categories", JSON.stringify(categories));
}

/* Render Categories */
function loadCategories() {

    if (!categoryTable) return;

    categoryTable.innerHTML = "";

    categories.forEach((cat, index) => {

        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${cat}</td>
            <td>
                <button onclick="deleteCategory(${index})" class="delete-btn">
                    🗑
                </button>
            </td>
        `;

        categoryTable.appendChild(row);

    });

}

/* Add Category */
if (categoryForm) {

    categoryForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let newCat = document.getElementById("categoryName").value.trim();

        if (newCat === "") return;

        categories.push(newCat);

        saveCategories();
        loadCategories();

        categoryForm.reset();

    });

}

/* Delete Category */
function deleteCategory(index) {

    categories.splice(index, 1);

    saveCategories();
    loadCategories();

}

/* Init */
loadCategories();