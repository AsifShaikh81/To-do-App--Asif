const inputbox = document.getElementById('input-box');
const listcontainer = document.getElementById('list-container');

// for adding
function addTask() {
    if (inputbox.value === "") {
        alert("you must write something")
        
    } else {
        let Li = document.createElement('li'); //its creating html elm li
        Li.innerHTML = inputbox.value;
        listcontainer.appendChild(Li);
        
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"; //this "\u00d7" for cross icon 
        Li.appendChild(span);
    
        
    }
    inputbox.value = "";
    SaveData();
}

//for deleting and toggle check 
listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('checked') 
        SaveData();
        
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove(); //here parent element is li 
    }
    SaveData();
    
}

) 

// for saving data 

function SaveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
    
}
// it will display data as it is
function displayData() {
    listcontainer.innerHTML = localStorage.getItem('data')
    
}

displayData();

// when enter key is pressed task will be added 
inputbox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        
        addTask(); // Add task on Enter key
    }
});

