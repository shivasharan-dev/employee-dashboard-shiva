let employees = JSON.parse(localStorage.getItem("employees")) || [];
displayEmployees();
function addEmployee(){
const name=document.getElementById("name").value.trim();
const role=document.getElementById("role").value.trim();
const salary=document.getElementById("salary").value.trim();
if(!name || !role || !salary){
alert("Please fill all fields");
return;
}
const employee={
name:name,
role:role,
salary:salary
};
employees.push(employee);
localStorage.setItem("employees",JSON.stringify(employees));
clearForm();
displayEmployees();
}
function displayEmployees(){
const table=document.querySelector("#employeeTable tbody");
table.innerHTML="";
employees.forEach((emp,index)=>{
const row=document.createElement("tr");
row.innerHTML=`
<td>${emp.name}</td>
<td>${emp.role}</td>
<td>${emp.salary}</td>
<td>
<button class="edit" onclick="editEmployee(${index})">Edit</button>
<button class="delete" onclick="deleteEmployee(${index})">Delete</button>
</td>
`;

table.appendChild(row);
});
}
function deleteEmployee(index){
employees.splice(index,1);
localStorage.setItem("employees",JSON.stringify(employees));
displayEmployees();
}
function editEmployee(index){
const emp=employees[index];
document.getElementById("name").value=emp.name;
document.getElementById("role").value=emp.role;
document.getElementById("salary").value=emp.salary;
deleteEmployee(index)
}
function searchEmployee(){
const keyword=document.getElementById("search").value.toLowerCase();
const rows=document.querySelectorAll("#employeeTable tbody tr");
rows.forEach(row=>{
const text=row.innerText.toLowerCase();
row.style.display=text.includes(keyword) ? "" : "none";
});
}
function clearForm(){
document.getElementById("name").value="";
document.getElementById("role").value="";
document.getElementById("salary").value="";
}
