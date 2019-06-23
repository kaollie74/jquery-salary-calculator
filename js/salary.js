$(document).ready(readyNow);


let salaryInventory = [];
// function creates object and pushes it into array.
function addItem() {
    console.log('in additem');

    // capture user input us jQuery and the val method
    let newItem = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        id: $('#idIn').val(),
        title: $('#jobTitleIn').val(),
        salary: $('#salaryIn').val()

    } // end newItem
    if (newItem.firstName === "" || newItem.lastName === "" || newItem.id === "" || newItem.title === "" || newItem.salary === "") {
        textEmpty();
    } else {
        console.log(newItem);
        //push newItem object into salaryInventory array.
        salaryInventory.push(newItem);
        // targets class and empties all the inputs with a specific class
        $('.removeAll').val('');
        // invoke function
        displaySalary();
    }
} // end addItem

// function activates when one of the fields 
//left empty.
function textEmpty() {
    alert('you must fill out all text fields')
    return false;
}



// for loop to capture the value of each object key
// append it to the DOM while.
// take the annual salaries and divdes by 12 to get Monthly
// appends the overall monthly salary to the DOM
// if condition to check if the monthly exceeds 20000
// set the background to red when it exceeds 200000
function displaySalary() {
    let totalAnnualSalary = 0;
    let totalMonthlySalary = 0;
    console.log('in Display inventory');
    //target id element and set it to el.
    let el = $('#employeeInfoOut');
    // empty output element;
    el.empty();
    for (let i = 0; i < salaryInventory.length; i++) { // good practice is to use <td> not <th>
        el.append(
            `<tr>
        <th>${salaryInventory[i].firstName}</th> 
        <th>${salaryInventory[i].lastName}</th>
        <th>${salaryInventory[i].id}</th>
        <th>${salaryInventory[i].title}</th>
        <th>${salaryInventory[i].salary}</th>
        <th><button class="deleteButton">Delete</button></th> 
        </tr>`)
        // while looping, capture the value of salaryInventory[i].salary
        // and add it to the AnnualSalary variable
        totalAnnualSalary += Number(salaryInventory[i].salary);

    } // end for loop

    // take the current annualSalary/12, round up or
    // down depending on decimal and assign to monthlySalary
    totalMonthlySalary = Math.round(totalAnnualSalary / 12);

    // target ID (where i want it to go) and send the current
    // monthlySalary value to the DOM.
    $('#background').html(totalMonthlySalary);

    // condition checks if the monthlySalary is over 20,000
    if (totalMonthlySalary > 20000) {
        // targets ID (where I want it to go) and changes the
        // background to red.
        $('#background').parent().addClass('backgroundRed');
    } else if (totalMonthlySalary < 20000) {
        // if totalMonthlySalary drops below 20000, remove css class
        $('#background').parent().removeClass('backgroundRed');
    }


} // end displaySalary

function deleteEmployee() {
    // captures the index of element that is removed and sets to index
    let index = salaryInventory.indexOf('tr');
    //when clicked, removes the closest <tr>
    $(this).closest('tr').remove(); // .closest() removes the first <tr> that it runs in to
    //removes the specific index from the array.
    salaryInventory.splice(index, 1);
    //active function to recalculate math and append to the DOM
    displaySalary();

} // end deleteEmployee


function readyNow() {
    console.log('jq');
    $('#addItemButton').on('click', addItem);
    $('#employeeInfoOut').on('click', '.deleteButton', deleteEmployee);
}