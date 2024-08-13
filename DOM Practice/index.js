const body = document.querySelector("body");
const div  = document.createElement("div");
const divTwo = document.createElement("div");
const ul = document.createElement("ul");
const ol  = document.createElement("ol");
body.appendChild(div);
body.prepend(divTwo);
div.appendChild(ul);
divTwo.appendChild(ol);

const createListItems = (dElement, color) => {
    for(let li=0; li<3;li++){
        const li = document.createElement("li");
        li.style.color = color;
        li.style.fontFamily = "Impact,Charcoal,sans-serif";
        dElement.appendChild(li).textContent = "List Item";
    }
}

createListItems(ul, 'red');
createListItems(ol, 'blue');