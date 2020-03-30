'use strict'; 
(function() {

    class Person {

        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }

        get fullName() {
            return this.firstName + ' ' + this.lastName;
        }

        set fullName(fullName) {
            const nameParts = fullName.split(' ');
            this.firstName = nameParts[0];
            this.lastName = nameParts[1];
        }

        isAdult() {
            return this.age >= 18;
        }
    }
    Object.defineProperty(Person.prototype, 'fullName', {enumerable: true});

    let tommy = new Person('Tommy', 'Hamblin', 23);
    display(tommy);

    class Student extends Person {
        constructor(firstName, lastName, age) {
            super(firstName, lastName, age);
            this._enrolledCourses = [];
        }

        static fromPerson(person) {
            return new Student(person.firstName, person.lastName, person.age);
        }

        enroll(courseId) {
            this._enrolledCourses.push(courseId);
        }

        getCourses() {
            return this.fullName + "'s enrolled courses are: "
                + this._enrolledCourses.join(', ');
        }
    }

    let tommyStudent = Student.fromPerson(tommy);
    display(tommyStudent);

})();