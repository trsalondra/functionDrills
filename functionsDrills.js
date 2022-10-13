/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * Tip: Comment out your solution to a prompt before moving on to the next one.
 * It will keep your console clean and easy to read!
 */

/*
 * Prompt 1:
 *
 * Write a function, using the function keyword. Call the function sayHello.
 * When invoked, sayHello should print the string 'hello world'.
 */

// function sayHello() {
//   console.log('hello world');
// }

// sayHello();

///////////////////////////////////////////////////////////////////////////////////

/*
 * Prompt 2:
 *
 * Create a function called print. Print should take a parameter called message.
 * When invoked and passed a string, print should `console.log` the message.
 */

// function print(message) {
//   console.log(message);
// }

// print('Testing, one, two...');

///////////////////////////////////////////////////////////////////////////////////

/*
 * Prompt 3:
 *
 * Create a function called printMessage. This function should take a parameter
 * called message. When invoked and passed a string, print 'Today's message
 * is:', followed by the message passed in as a parameter.
 */

// const printMessage = message => console.log(`Today\'s message is: ${message}`);

// printMessage('Have a spooky day!');

///////////////////////////////////////////////////////////////////////////////////

/*
 * Prompt 4:
 *
 * Fix the following function:
 */

/** Starter Code */
// function multiplyToSecondPow(a) {
//     return a ** 2;
//   }

// console.log(multiplyToSecondPow(5));

///////////////////////////////////////////////////////////////////////////////////

/*
 * Prompt 5:
 *
 * Create a function called reverseMessage. This function should take
 * a parameter called message. When invoked and passed a string, print the
 * string in reverse. (hint: look up some ways of doing this.)
 */

// const reverseMessage = (message) => console.log(message.split("").reverse().join(""));

// reverseMessage('Alondra Torres');

///////////////////////////////////////////////////////////////////////////////////


/*
 * Prompt 6:
 *
 * Create a function called multiply that takes two parameters: a and b. When
 * invoked, multiply a times b. If b an argument is not passed in for b, then
 * double a (i.e. multiply it by two).
 *
 * Hint: use a default parameter.
 */

// const multiply = (a, b = 2) => a * b;

// console.log(multiply(5*6));
// console.log(multiply(5));

///////////////////////////////////////////////////////////////////////////////////

/*
 * Prompt 7:
 *
 * Fix the following code. HINT: Think Objects :)
 */

/** Starter Code */
// function makePerson(firstName, lastName) {
//   const person = {
//     first: firstName,
//     last: lastName
//   }
//   return person;
// }

// const zakk = makePerson('Zakk', 'F');
// const jimmy = makePerson('Jimmy', 'B');

// console.log(zakk);
// console.log(jimmy);

///////////////////////////////////////////////////////////////////////////////////

/*
 * Prompt 8:
 *
 * Write a function that returns an object. The object can be anything.
 */

// function returnSomething() {
//   something = ['one', 'two', 'three'];
//   return something;
// }

// console.log(returnSomething());

///////////////////////////////////////////////////////////////////////////////////

/*
 * Prompt 9:
 *
 * Write a function that returns an array. The array can be of anything.
 */

// function returnArr() {
//   arr = ['one', 'two', 'three'];
//   return arr;
// }

// console.log(returnArr());

///////////////////////////////////////////////////////////////////////////////////

/*
 * Prompt 10:
 *
 * Write a function that, when called, adds a number passed in as a parameter to
 * the sum variable below. Invoke your method a few times and then print the sum
 */

/** Starter Code */
// let sum = 0;

// const addNum = num => sum += num;

// addNum(3);
// addNum(4);
// addNum(6);

// console.log(sum);


///////////////////////////////////////////////////////////////////////////////////

/*
 * Prompt 11:
 *
 * Write a function that takes an array of number values and returns the sum.
 * Test it out to make sure it works.
 */

// const numbers = [3, 8, 1, 9];

// let sum = 0;

// function returnSum(num) {
//   sum += num;
// } 

// var finalSum = numbers.forEach(returnSum, 3);

// console.log(finalSum);


///////////////////////////////////////////////////////////////////////////////////


/*
 * Prompt 12:
 *
 * Write a function that takes a string and returns an array of every word in
 * the string.
 */

// const str = 'The quick brown fox jumps over the lazy dog.';

// function returnArr(Arr) {
//   var newArr = Arr.split(' ');
//   return newArr;
// }

// console.log(returnArr(str));

///////////////////////////////////////////////////////////////////////////////////


/*
 * Prompt 13:
 *
 * How can you write a function so that this expression works? It should print
 * the string "this works!"
 */

/** Starter Code */
// const testFunc = function() {
//   console.log('This works!');
// }

// testFunc();


///////////////////////////////////////////////////////////////////////////////////

/*
 * Prompt 14:
 *
 * Write a function that takes the add function below as a parameter and invokes
 * it, passing in 2 and 4.
 */

/** Starter Code */
// function add(a, b) {
//   return a + b
// }

// const invokeAdd = anyFunc => console.log(anyFunc(2, 3));

// invokeAdd(add());


///////////////////////////////////////////////////////////////////////////////////

/*
 * Prompt 15:
 *
 * Write a function that returns another function. Have the inner function print
 * the string "hello world"
 */

// function sayHello() {
//   console.log('hello world');
// }

// const returnSayHello = () => sayHello();

// returnSayHello();