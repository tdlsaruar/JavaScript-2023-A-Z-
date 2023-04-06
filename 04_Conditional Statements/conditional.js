// in javascript 2 type of conditional statements 
// if...elese .. 
// and switch..case 


// Hour 
// If hour is between 6 am and 12pm say good morning 
// if it is between 12pm and 6mp : good afternoon
// otherwide Good evening 


// if (condition){
//     statement
// }
// else if (anotherCondition){
//     statement
// }

// else if (yetAnotherCondition){
//     statement
// }

let hour=100;
if (hour>=6 && hour<12){
    console.log('Good morning');
}
else if (hour>=12 && hour>6){
    console.log('Good afternoon');
    
}
else{
    console.log('good night');
}
