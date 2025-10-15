//variable  in js / we have 3 keyowrds let , var , const

var age  = 23;
// var age = "thirty"; // no any error in redecleration
let roll = 32;
// let roll = "thiry"
const name = "karan";// measn constant cnat be recdeclearedand re insitilized
const isStudent = true
console.log(isStudent)

//reseve keyowrs are also not allowed 
// if, else, for, while, function, return, var, let, const, switch, break


//scopes in js 
// when we declear something in the funtions it is only accessible only in the functiom braces
//function scope
function funNAme(){
 let fruits = "mango";

}


//block scope --> anythin thing created in {} onlu accessible in this curly brace
{
    let animal = "lion";
}

// global scope --> anythin declared or created outside the {} of function is global scope

let animal = "tiger";

// to print the value.
console.log(animal);

let a = 10;
let b = 20;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(b%a);

// comparision operators
console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);

let c  = 10;

// c = c+ 10 ;// 20
c +=10;
console.log(c)

c -=10;
console.log(c)

c *=10;
console.log(c)

c /=10;
console.log(c)


//conditiobnal; statement 

let personAGE = 17;

if (personAGE >= 18) {
    console.log("able to vote")
} else {
    console.log("he is not able to vote");
}

let hasKEy = false;

if (hasKEy) {
    console.log("get the treasure")
} else {
    console.log("got to jungle to find key")
}


//loops 
// for loop

for (let i = 1; i <= 10; i++) {
    console.log(i, "hello friends")
    
}

let num = 1;
while (num <= 11) {
    console.log(num)
    num++; //num = num +1;
}