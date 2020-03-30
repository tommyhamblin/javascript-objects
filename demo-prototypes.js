'use strict'; 
(function() {

    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    let tommy = new Person('Tommy', 'Hamblin');
    let joe = new Person('Joe', 'Bloggs');

    Person.prototype.age = 29;
    display(Person.prototype);
    display(tommy.__proto__);
    display(Person.prototype === tommy.__proto__);

    tommy.age = 23;
    display(tommy.age); //23
    Person.prototype.age = 31;
    display(tommy.age); //23 - Instance property overrides prototype property
    display(joe.age); //31 - No instance property

    Person.prototype = {age: 18};
    let jim = new Person('Jim', 'Average');
    display(jim.age);

    function Student(firstName, lastName, age) {
        Person.call(this, firstName, lastName, age);
        this._enrolledCourses = [];

        this.enroll = function(courseId) {
            this._enrolledCourses.push(courseId);
        };

        this.getCourses = function() {
            return this.firstName + "'s enrolled courses are: " +
                this._enrolledCourses.join(', ');
        };
    }

    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;

    let tommyStudent = new Student('Tommy', 'Hamblin', 23);
    tommyStudent.enroll('Maths');
    tommyStudent.enroll('Computing');

    display(tommyStudent);
    display(tommyStudent.getCourses());

    display(tommyStudent.__proto__);
    display(tommyStudent.__proto__.__proto__);

})();