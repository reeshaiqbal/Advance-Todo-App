const addbtn = document.getElementById("addbutton");
const delbtn = document.getElementById("delbutton");  
const mainlist = document.getElementById("main-list");
const myInput = document.getElementById("my-Input");
const taskscount0 = document.getElementById("tasks-count0");
const taskscount1 = document.getElementById("tasks-count1");
const taskscount2 = document.getElementById("tasks-count2");
const Card0 = document.getElementById("Card-0");
const Card1 = document.getElementById("Card-1");
const Card2 = document.getElementById("Card-2");


myInput.addEventListener("keyup", function () {
    const searchText = myInput.value.toLowerCase();   
    const listitems = document.querySelectorAll(".list");

    listitems.forEach((item) => {
        const itemtext = item.textContent.toLowerCase(); 
        if (itemtext.includes(searchText)) {
            item.style.display = "list-item";
        } else {
            item.style.display = "none"; 
        }
    });
});


addbtn.addEventListener("click", function(){
    window.location.href = "inputscreen.html"
})

delbtn.addEventListener("click", function(){
    mainlist.innerHTML = " "
    window.localStorage.removeItem('todoarray')
})

    const todoarray = JSON.parse(localStorage.getItem('todoarray')) || [];

    todoarray.forEach((item,index) => {
            const li = document.createElement("li");
            li.classList.add("list");
            li.textContent = item.text;
            li.addEventListener("click", function(){
                window.location.href = `inputscreen.html?edit=${encodeURIComponent(item.text)}&index=${index}`;
            });
            mainlist.appendChild(li);
    });


    const categorySet = new Set();
    todoarray.forEach(todo => {
    if(todo.category){
        categorySet.add(todo.category);
    }
})
const uniquecategories = Array.from(categorySet);
console.log(uniquecategories);

const count0 = Array.from(taskscount0);
const count1 = Array.from(taskscount1);
const count2 = Array.from(taskscount2);

todoarray.forEach(todo =>{
    if(todo.category==="Shopping"){
        count0.push(todo.text)
    }
})
console.log(count0)
taskscount0.textContent = count0.length;

todoarray.forEach(todo =>{
    if(todo.category==="Office"){
        count1.push(todo.text)
    }
})
console.log(count1)
taskscount1.textContent = count1.length;


todoarray.forEach(todo =>{
    if(todo.category==="Grocery"){
        count2.push(todo.text)
    }
})
console.log(count2)
taskscount2.textContent = count2.length;

Card0.addEventListener("click", function(){
    window.location.href = "tasks.html?cat=Shopping"
});

Card1.addEventListener("click", function(){
    window.location.href = "tasks.html?cat=Office"
});

Card2.addEventListener("click", function(){
    window.location.href = "tasks.html?cat=Grocery"
});