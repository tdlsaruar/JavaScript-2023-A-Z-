// Logical AND ( &&)
// Return Ture if both operand are Ture 
// console.log(ture && true);
console.log('hellow man');
// console.log(true && ture); 
// ture 

console.log(false && ture);
// False 

// Logical OR (||) 
// Return Ture if one of the oparend is true 
let high = true;
let low = false;
let highlow = high || low;
console.log(highlow);

// NOT (!) 
//  whate ever we give it give us opostite resutl if something true it will give us a result false 


let sa = 2;
console.log(sa > 1);
console.log(!sa);


// Non boolean logical operator 
let x = false || 'Saruar';
console.log(x);


let userC = 'red';
let userR = 'blue';
let cR = userC || userR;
console.log(cR);

// out put will be red if user don't chose red out put will be blue 
let userCr= undefined ;
let userRr='blue';
let csR= userCr || userRr;
console.log(csR);

// out put will be blue because userCr is undefined that's why 