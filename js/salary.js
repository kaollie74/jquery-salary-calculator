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
    let AnnualSalary = 0;
    let monthlySalary = 0;
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
        <th>${salaryInventory[i].salary}</th>
        </tr>`);
        
        AnnualSalary += Number(salaryInventory[i].salary);
        
        }// end for loop
        
        monthlySalary = Math.round(AnnualSalary / 12);

        $('#background').html(monthlySalary);
        
        if (monthlySalary > 20000){
            $('#background').append().addClass('red-background');
        }// end if 
        
     
} // end displaySalary

function monthlyCost(){

}// end monthlyCost