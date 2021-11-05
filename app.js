var selectedRow = null;

function onFormSubmit(){
   var formData = getFormData();
   if(selectedRow == null){
     insertNewRecord(formData);
   }else{
      updatedRecord(formData);
   }
   clearInputField();
}

// input text
function getFormData(){
    var formData ={};

    formData["fullName"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["classification"] = document.getElementById("classification").value;
    formData["specialisation"] = document.getElementById("special").value;

    return formData;
}

// insert new record
function insertNewRecord(data){
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    // cell 1
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    // cell 2
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    // cell 3
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.classification;
    // cell 4
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.specialisation;
    // cell 5
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="Remove(this)">Delete</a>`
}

// reset input field
function clearInputField(){
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById("classification").value = "";
    document.getElementById('special').value = "";
    selectedRow = null;
}

// edit
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('name').value = selectedRow.cells[0].innerHTML;
    document.getElementById('email').value = selectedRow.cells[1].innerHTML;
    document.getElementById('classification').value = selectedRow.cells[0].innerHTML;
    document.getElementById('special').value = selectedRow.cells[0].innerHTML;
}


// updated record
 function updatedRecord(formData){
     selectedRow.cells[0].innerHTML = formData.fullName;
     selectedRow.cells[1].innerHTML = formData.email;
     selectedRow.cells[0].innerHTML = formData.classification;
     selectedRow.cells[0].innerHTML = formData.specialisation;
 }

//  delete selected row
function Remove(td){
    if(confirm('Are you sure about this?')){
    row = td.parentElement.parentElement;
    document.getElementById("studentList").deleteRow(row.rowIndex);
    clearInputField();
    }
}

// validate
function validate(){
    isvalid = true;
    if(document.getElementById("name").value == ""){
     isvalid = false;
     document.getElementById("nameValidation").classList.remove("hide");
    }else{
      isvalid = true;
      if(!document.getElementById("nameValidate").classList.contains("hide")){
          document.getElementById("nameValidate").classList.add("hide");
      }
    }
    return isvalid;
}

// FILTER DATA
const searchInput = document.getElementById("filterInput");

// add event
searchInput.addEventListener('keyup',function(event){
    const rows = document.querySelectorAll('table#studentList tbody tr');
    console.log(event);
    const q = event.target.value.toLowerCase();
    rows.forEach((row)=>{
        console.log(row.querySelector('td'));
        if (row.querySelector('td')) {
            row.querySelector('td').textContent.toLowerCase().startsWith(q) 
            ? (row.style.display = '')
            : (row.style.display = 'none');
        }
    })
})