'use strict'; 
(function() {

  let person1 = {
    firstName: 'Tommy',
    lastName: 'Hamblin',
    age: 23,
    isAdult() { return this.age >= 18; }
  };
  display(person1.isAdult());

  let person2 = {
    firstName: 'Joe',
    lastName: 'Bloggs',
    age: 17,
    isAdult() { return this.age >= 18; }
  }
  display(person2.isAdult());

  let healthStats = {
    height: 70,
    weight: 140
  };

  function mergeHealthStats(person, healthStats) {
    return Object.assign({}, person, healthStats);
  }
  
  let mergedPerson = mergeHealthStats(person1, healthStats);
  display(mergedPerson);
  display(person1);
  
  function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isAdult = function() { return this.age >= 21; }
  }

  let tommy = new Person('Tommy', 'Hamblin', 23);
  display(tommy);

  let joe = new Person('Joe', 'Bloggs', 17);
  display(joe);

  let person = Object.create(
    Object.prototype,
    {
      firstName: {value: 'Tommy', enumerable: true, writable: true, configurable:true},
      lastName: {value: 'Hamblin', enumerable: true, writable: true, configurable:true},
      age: {value: 23, enumerable: true, writable: true, configurable:true}
    }
  );

  display(person);

})();