let btn = document.getElementById("addbtn");

let studentData = [];
let studentObj1 = { name: "raghav", age: 12, id: 1 };
let studentObj2 = { name: "soha", age: 13, id: 2 };
let studentObj3 = { name: "tiger", age: 14, id: 3 };
let studentObj4 = { name: "Liger", age: 15, id: 4 };

studentData.push(studentObj1)
studentData.push(studentObj2)
studentData.push(studentObj3)
studentData.push(studentObj4)

console.log(studentData);

btn.addEventListener("click", () => {
    let name = prompt("Enter Your Name");
    let age = prompt("Enter Your Age");
    let id = prompt("Enter You Id");

    let newStudent = {name, age, id};
    studentData.push(newStudent);
    console.log("New data entry", studentData);
    updateProfile();

});

function updateProfile() {
    let tableBody = document.querySelector("tbody")
    tableBody.innerHTML = "";
    
    studentData.forEach((oneObj)=>{
    let tableRow = document.createElement("tr")
    tableRow.innerHTML = `<td>${oneObj.name}</td>
    <td>${oneObj.age}</td>
    <td>${oneObj.id}</td>`

    tableBody.appendChild(tableRow);
});

}
updateProfile();