let todoList =[];
let listItems = document.querySelector('.list');
function listAppear(){
    let todoListHtml = '';
    for(let i =0; i<todoList.length; i++){
        let todoObject = todoList[i];
        //let Name = todoObject.Name;
        //let date = todoObject.date;
        let { Name, date } = todoObject;
        todoListHtml += `
        <p>${Name}</p>
        <p>${date}</p>
        <button class="deleteButton" onclick="
            todoList.splice(${i}, 1);
            listAppear();
        ">Delete</button>
        `;
    }
    listItems.innerHTML = todoListHtml;
}
function listIn(){
    let listInput = document.querySelector('input');
    let listDateElement = document.querySelector('.listDate');
    todoList.push({
        Name:listInput.value,
        date: listDateElement.value
    });
    listInput.value = '';
    listAppear();
}