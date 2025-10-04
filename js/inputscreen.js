const deletebtn = document.getElementById("del-btn");
const todoinput = document.getElementById("todo-input");
const savebtn = document.getElementById("save-btn");
const categoryinput = document.getElementById("category-input");

savebtn.addEventListener("click", function(){
    const inputvalue = todoinput.value;
    const inputcategory = categoryinput.value;
    if(inputvalue == ""){
        alert("Please, fill in the field")
    return;
    }
    const todoarray = JSON.parse(localStorage.getItem('todoarray')) || [];
    const inputobj ={
        text: inputvalue,
        category: inputcategory
    }
    todoarray.push(inputobj)
    localStorage.setItem('todoarray', JSON.stringify(todoarray));
    window.location.href = "main.html"
});

deletebtn.addEventListener("click", function(){
    todoinput.value = ""
});

// Read the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const editValue = urlParams.get("edit");

// If the 'edit' parameter exists, show it in the input field
if (editValue && todoinput) {
    todoinput.value = decodeURIComponent(editValue);
}



