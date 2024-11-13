// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here
class Student {
    constructor(name, grammarScore, secondSubjectScore, secondSubject) {
        this.name = name;
        this.grammarScore = grammarScore;
        this.secondSubjectScore = secondSubjectScore;
        this.secondSubject = secondSubject;
        this.percentage = this.calculatePercentage();
    }

    calculatePercentage() {
        return (this.grammarScore + this.secondSubjectScore) / 2;
    }

    toString() {
        return `Name: ${this.name}, Subjects: Grammar (${this.grammarScore}), ${this.secondSubject} (${this.secondSubjectScore}), Percentage: ${this.percentage.toFixed(2)}%`;
    }
}

function generateRandomScore(min = 60, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateStudents() {
    let students = [];

    // Create 50 students with subjects Grammar and Accounts
    for (let i = 1; i <= 50; i++) {
        let name = `Student ${i}`;
        let grammarScore = generateRandomScore();
        let accountsScore = generateRandomScore();
        students.push(new Student(name, grammarScore, accountsScore, 'Accounts'));
    }

    // Create 50 students with subjects Grammar and Physics
    for (let i = 51; i <= 100; i++) {
        let name = `Student ${i}`;
        let grammarScore = generateRandomScore();
        let physicsScore = generateRandomScore();
        students.push(new Student(name, grammarScore, physicsScore, 'Physics'));
    }

    return students;
}

function displayResults(students) {
    students.forEach(student => {
        console.log(student.toString());
    });
}

const students = generateStudents(); 
displayResults(students);
