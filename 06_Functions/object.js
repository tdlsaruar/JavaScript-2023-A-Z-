// Declaring an object: In JavaScript, you can declare an object using curly braces {}. For example:

// The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.
const person ={
    firstName:'Saruar talukder',
    lastName:'Mubin',
    id:112182,
    fullName: function (){
        return this.firstName+" " +this .LastName;
    }
};
// person.firstName();

// In the example above, this refers to the person object.

// I.E. this.firstName means the firstName property of this.

// I.E. this.firstName means the firstName property of person

// NOte 
// this is not a variable. It is a keyword. You cannot change the value of this.



const car={
    version:'G75',
    Name:'Farari',
    color:'REd',
    start: function(){
        console.log('here is the start version')
    }
}

car.start();
console.log(car.version);
// The this Keyword
// In a function definition, this refers to the "owner" of the function.

// In the example above, this is the person object that "owns" the fullName function.

// In other words, this.firstName means the firstName property of this object.