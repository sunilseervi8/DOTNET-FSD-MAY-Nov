class Employee {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    dob: Date;
    gender: string;
    department: string;
    salary: number;
    // joiningDate: string;

    constructor(firstName: string, lastName: string, email: string, phone: string, dob: Date, gender: string, department: string, salary: number ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.dob = dob;
        this.gender = gender;
        this.department = department;
        this.salary = salary;
    }
    // function  writeFunction():Number{

    // }
    
}

document.getElementById("employeeForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const firstName = (<HTMLInputElement>document.getElementById("firstName")).value;
    const lastName = (document.getElementById("lastName") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const dob = new Date((document.getElementById("dob") as HTMLInputElement).value);
    const gender = (document.querySelector('input[name="gender"]:checked') as HTMLInputElement).value;
    const department = (document.getElementById("department") as HTMLInputElement).value;
    const salary = Number((document.getElementById("position") as HTMLInputElement).value);
    // const joiningDate = (document.getElementById("joiningDate") as HTMLInputElement).value;
    const employee = new Employee(firstName, lastName, email, phone, dob, gender, department, salary);
    const saalryyear=calculateSalary(salary);
    alert(`Employee ${employee.firstName} ${employee.lastName} registered successfully! salary is ${saalryyear} `);
});

function calculateSalary(salary){
 return salary*12;
 
}
var Employee1 =new Employee("sunil","seervi","b6Y6J@example.com","1234567890",new Date("01/01/1990"),"male","IT",50000);
console.log(Employee1.firstName)