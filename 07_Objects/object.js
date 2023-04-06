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


const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      console.log(this.firstName + " " + this.lastName);
    }
  };
  person.firstName();
