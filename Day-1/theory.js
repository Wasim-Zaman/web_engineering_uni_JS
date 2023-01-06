/* Features of ES-6*/


/* Arrow Functions */

// Arrow functions can be annonymous or named
// It can be used in many reason, one of the reason is 
// this keyword.




/* Callbacks */

// Callbacks are functions that are passed as arguments to other functions and 
// are executed after some operation has been completed.

// Higher order functions:
// Functions that take other functions as arguments.


/* Destructuring */

// Destructuring is a way to extract data from arrays and objects.

// Types of destructuring:
// 1. Array destructuring
// 2. Object destructuring

// example of object destructuring
const person = {
    name: 'Momin',
    age: 24,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

// printing name and age from person object using destructuring
const printName = ({name, age}) => {
    console.log(name);
    console.log(age);
}

printName(person);

// example of array destructuring
const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;


console.log(hobby1, hobby2);


/* Array or List methods */

// Array methods:
// 1. map()
// 2. filter()
// 3. reduce()
// 4. find()
// 5. findIndex()
// 6. slice()
// 7. splice()
// 8. concat()
// 9. push()
// 10. pop()
// 11. forEach()    Higher order function method
// 12. sort()       Higher order function method
// 13. indexOf()
// etc.


// example of map() method
const numbers = [1, 2, 3];
const doubleNumArray = numbers.map((num) => {
    return num * 2;
}
);


// exammple of forEach() method
const nums = [1, 2, 3];
numbers.forEach((num) => {
    console.log(num);
});

// programming trick...
// if fist condition in the && operator is true, the result will be the second condition
const m = 13;
console.log(m == 13 && m);

// example of filter() method
const numbersToBeFiltered = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenNumbers = numbersToBeFiltered.filter((num) => {
    return num % 2 == 0;
});
console.log(evenNumbers);


// example of map() method
// Map method is used to apply some kind operation or process on each element of list
const numbersToBeMapped = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const mappedNumbers = numbersToBeMapped.map((num) => {
    return num * 2;
});
console.log(mappedNumbers);

// example of reduce() method
// Reduce method is used to reduce the list to a single value
// reduce() method takes two arguments, 
// first is a function and second is a initial value

// while callback function takes four arguments 
// 1. accumulator
// 2. current value
// 3. current index
// 4. source array

const numbersToBeReduced = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reducedNumbers = numbersToBeReduced.reduce((prevValue, curValue) => {
    return prevValue + curValue;
}, 0);
console.log(reducedNumbers);


// Example of sort() method
// sort() method is used to sort the list
const numbersToBeSorted = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sortedNumbers = numbersToBeSorted.sort((a, b) => {
    return a - b; // ascending order
});

// sort takes callback function as argument which takes two arguments
// 1. a
// 2. b
// if a is greater than b, then it will return positive number
// if a is less than b, then it will return negative number
// if a is equal to b, then it will return zero number

console.log(sortedNumbers);








/* Chaining */
// chaining is a way to call multiple methods on a single line

// example of chaining
const numbersToBeChained = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const chainedNumbers = numbersToBeChained.filter((n) => n>2)
    .map((num) => {
        return num * 2;
    }
    )
    .filter((num) => {
        return num > 5;
    }
    );
console.log(chainedNumbers);

