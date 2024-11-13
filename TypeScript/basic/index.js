var _a;
var Employee = /** @class */ (function () {
    // joiningDate: string;
    function Employee(firstName, lastName, email, phone, dob, gender, department, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.dob = dob;
        this.gender = gender;
        this.department = department;
        this.salary = salary;
    }
    return Employee;

    
}());
(_a = document.getElementById("employeeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var dob = new Date(document.getElementById("dob").value);
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var department = document.getElementById("department").value;
    var salary = Number(document.getElementById("position").value);
    // const joiningDate = (document.getElementById("joiningDate") as HTMLInputElement).value;
    var employee = new Employee(firstName, lastName, email, phone, dob, gender, department, salary);
    var saalryyear = calculateSalary(salary);
    console.log(employee);
    alert("Employee ".concat(employee.firstName, " ").concat(employee.lastName, " registered successfully! salary is ").concat(saalryyear, " "));
});
function calculateSalary(salary) {
    return salary * 12;
}


var Employee1 = new Employee("sunil", "seervi", "b6Y6J@example.com", "1234567890", new Date("01/01/1990"), "male", "IT", 50000);
console.log(Employee1.firstName);
