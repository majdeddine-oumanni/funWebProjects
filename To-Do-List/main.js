let myInput = document.querySelector(".theTodoList");
let myList = document.querySelector('.output');
function outputList(){
        // Create a new paragraph element
        let listItem = document.createElement("p");

        // Set the text content of the paragraph to the value of myInput
        listItem.textContent = myInput.value;
    
        // Append the paragraph element to the output list
        myList.appendChild(listItem);
    
        // Clear the input field
        myInput.value = '';
}
/*
    let myArray = [];
    let total = '';
    myArray.push(myInput.value);
    for(let i=0; i < myArray.length; i++){
        total += myArray[i];
    }
    myList.innerHTML = `<p>${total}</p>`;
    myInput.value = '';
    console.log(myArray);
*/
