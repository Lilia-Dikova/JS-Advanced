function personTeacher () {
    class Person {
    constructor (name, email) {
        this.name = name;
        this.email = email;
    }

    toString () {
        return `Person (name: ${this.name}, email: ${this.email})`;
    }
};

class Teacher extends Person {
    constructor (name, email, subject) {
        super (name,email);
        
        this.subject = subject;
    }

    toString () {
        return `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`;
    }
}

class Student extends Person {
    constructor (name,age,course) {
        super (name,age);
        
        this.course = course
    }
    toString () {
        return `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`;

    }
}
return {
    Person,
    Teacher,
    Student
}
 }

 let classes = personTeacher();
let t = new classes.Teacher("Ivan", 'ivan@ivan.com', "Graphics");
console.log(t);
console.log(t.toString());