// console.log("Hello, World!");

//Types of Variables in JavaScript


var a = 10.0;
console.log(a);

console.log(typeof a);

b = "Hello";
console.log(typeof b);

console.log(typeof c);

answer = true;
console.log(typeof answer)

n = null;
console.log(typeof n);

n = 10;
console.log(typeof n);


//===========================================================================================================================================//

//Operator in Javascript


a = 10;
b = 20;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);


//===========================================================================================================================================//

//Conditional Statements in Javascript


a = 10;
b = 20;

if(a > b){
    console.log("My name is Walter Heartwell White");
}else{
    console.log("My name is Jesse Bruce Pinkman");
}

(a < b) ? console.log("My name is Walter Heartwell White") : console.log("My name is Jesse Bruce Pinkman");

if(a > 5 || b > 15){
    console.log("Both conditions are true");
}else{
    console.log("One of the conditions is false");
}



//===========================================================================================================================================//

//Loops in Javascript


a = 10;

while(a--){
    console.log(a + " ");
}

for(i = 0; i < 10; i++){
    console.log(i + " ");
}



//===========================================================================================================================================//

//Functions in Javascript

function sum(a, b){
    return a + b;
}
console.log(sum(10, 20));