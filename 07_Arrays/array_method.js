// 1 'push() method: This method adds one or more elements to the end of an array. For example:

let neWarray=[1,2,3,4];
neWarray.push(5,6);
// console.log(neWarray);

// 2. pop() method: this method removes the last element from an array and returs it . for example

let myArray= [1,2,3];
const lastElement=myArray.pop()//out put will be 1,2
console.log(myArray);
// console.log(lastElement);//out put will be 3




// 3 'shift' method: this method removes the first element from an array and returs it .for example

const myShift=[5,6,7,8];

let RemoveFirstElement= myShift.shift();
// console.log(myShift);//out put will be 6,7,8

// console.log(RemoveFirstElement); //out put will be 5




// 4 'unshift'() method: This method adds one or more element to the begginning of an Array. for example

let myUnshift=['Saruar','Ahmed','Talukder'];
const Start=myUnshift.unshift('tdl');
// console.log(myUnshift);// out put will be tdl saruar,ahmed,talukder

// 5 splice () method : this method adds or remove element from any array at a specified index : for example
let myArray3 = [1, 2, 3, 4, 5];
myArray.splice(2, 1, "a", "b");
// console.log(myArray3); // Output: [1, 2, "a", "b", 4, 5]


// 6 slice() method: This method returns a new array that contains a portion of the original array. For example:

let myArray7 = [1, 2, 3, 4, 5];
let newArray0 = myArray7.slice(2, 4);
// console.log(myArray7); // Output: [3, 4]


let fruits = ['banana', 'apple', 'orange', 'grape'];
fruits.sort();
console.log(fruits); // Output: ['apple', 'banana', 'grape', 'orange']


let number=[1,2,0,3,8,7,6,4,10,9];
number.sort(function(a,b){
    return a-b;
});
console.log(number);