'use strict'; 
(function() {

  let person1 = {
    firstName: 'Tommy',
    lastName: 'Hamblin',
    age: 23,
    isAdult() { return this.age >= 18; }
  };

  // Object.defineProperty(person1, 'firstName', {enumerable: false});

  for (let propertyName in person1) {
    display(propertyName + ': ' + person1[propertyName]);
  }

  // delete person1.lastName;
  // display(Object.keys(person1));
  // display(JSON.stringify(person1));

  Object.defineProperty(person1, 'fullName', {
    get: function() {
      return this.firstName + ' ' + this.lastName;
    },
    set: function(value) {
      var nameParts = value.split(' ');
      this.firstName = nameParts[0];
      this.lastName = nameParts[1];
    }
  });
  person1.fullName = 'Joe Bloggs';
  display(person1.fullName);

  // Object.defineProperty(person1, 'name', {writable: false});
  // Object.freeze(person1.name);
  // person1.name.firstName = "Joe";
  // display(person1.name);

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