console.log("Welcome to MERN");

// How do we declare variables?
var varname = "something";

// Let and Const
// Let 
let var2 = 7;
// Let is a function scoped variable(only exists within the function brackets in which its written)
for(var i =0; i<4; i++){
    console.log(i);
}

console.log(i);

for(let j = 0; j<4; j++){
    console.log(j);
}
// 'J' doesntrexcistout of the curly brackets
// console.log(j);

// var i still exists
for(;i < 8; i++ ){
    console.log(i);
}

console.log(i);

// Const
const var3 ="some value"
// const variables are unchanging

const arr = [1,2,3,4];
arr[2] = 7;
// arr = [5,6,7,1];
console.log(arr);
// const values cannot be changed
// Howerver we can change the values inside of objects and arrays that are in const values

// Rest/Spread
var myArray = [1,2,3,4,5];
var copyArray = [...myArray];
myArray[2] = 20;
console.log(myArray);
console.log(copyArray);

// Same situatiuon does not happen with strings
var mystring = "Hello";
var copyString = mystring;
// mystring = "GoodBye";
console.log(copyString);

// Ternary Operator
if(mystring == "Hello"){
    console.log("Hello there!")
} else {
    console.log("see you later!")
}

//Question                    True                          False
mystring == "Hello" ? console.log("Hello there!") : console.log("See you later!");