const mainlist = document.getElementById("main-list");
const catg = document.getElementById("catg");

// Get the category from the URL (e.g., ?cat=Shopping)
const params = new URLSearchParams(window.location.search);
const selectedCategory = params.get("cat");

catg.textContent = selectedCategory;

const todoarray = JSON.parse(localStorage.getItem('todoarray')) || [];

todoarray.forEach((item, index) => {
    if (item.category === selectedCategory) {
        const li = document.createElement("li");
        li.classList.add("list");
        li.textContent = item.text;
        li.addEventListener("click", function () {
            window.location.href = `inputscreen.html?edit=${encodeURIComponent(item.text)}&index=${index}`;
        });
        mainlist.appendChild(li);
    }
});
