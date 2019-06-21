$(document).ready(readyNow);


let salaryInventory = [];
// function creates object and pushes it into array.
function addItem(){
console.log('in additem');
 
 // capture user input
let newItem = {
     firstName: $('#firstNameIn').val(),
     lastName: $('#lastNameIn').val(),
     id: $('#idIn').val(),
     title: $('#jobTitleIn').val(),
     salary: $('#salaryIn').val()

 }// end newItem
 console.log(newItem);
 salaryInventory.push(newItem);
 $('.removeAll').val('');
 displaySalary();
}// end addItem

function readyNow() {
    console.log('jq');
    $('#addItemButton').on('click', addItem);
}

function displaySalary(){
    console.log('in Display inventory');
    //target id element and set it to el.
    let el = $('#employeeInfoOut');
    // empty output element;
    el.empty();
    for(let i=0; i < salaryInventory.length; i++){
        el.append(
        `<tr>
        <th>${salaryInventory[i].firstName}</th>
        <th>${salaryInventory[i].lastName}</th>
        <th>${salaryInventory[i].id}</th>
        <th>${salaryInventory[i].title}</th>
        <th>${salaryInventory[i].firstName}</th>
        <th>${salaryInventory[i].salary}</th>
        </tr>`);
        
    }
}