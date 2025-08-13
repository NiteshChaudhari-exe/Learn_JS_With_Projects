const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

function addTask() {
    if(inputBox.value === ''){
        alert("404 !!! The Data Is MiSSing. < />");

    }else{
        let taskText = inputBox.value;
        let li = document.createElement("li");
        li.textContent = taskText;
        let span = document.createElement("span");
        span.innerHTML = "&#10006;"; // Unicode for ×
        li.appendChild(span);
        listContainer.appendChild(li);
    }

    inputBox.value = "";
    saveTask();
    
}

listContainer.addEventListener("click",function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }

    
});


function saveTask(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();