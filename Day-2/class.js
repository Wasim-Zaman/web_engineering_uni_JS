/*DOM*/

// What is DOM?
// DOM is a tree structure of HTML elements
// DOM is a programming interface for HTML and XML documents
// DOM is an object-oriented representation of the web page, 
// which can be modified with a scripting language such as JavaScript
// DOM is a standard for how to get, change, add, or delete HTML elements.




/* Asyncronous JS */

// What is Asyncronous JS?
// Asyncronous JS is a way to run JS code without blocking the main thread
// Asyncronous JS is a way to run JS code without waiting for a response
// Asyncronous JS is a way to run JS code without waiting for a task to finish


// What does asyncronous mean?
// asynchronous means that the code is not executed in order, and in simple words
// it means that the code is executed in the background, 
// without blocking the main thread. Or in very simple words, 
// it means not to wait. but according to sir, asynchronous programming is also
// used to alter the default behavior (which is async) 
// to sync so that the thread can wait.


// What is the main thread?
// The main thread is the thread that runs the code in the browser.


// How to acheive Asyncronous JS?
// There are three ways to acheive Asyncronous JS
// 1. Callbacks
// 2. Promises
// 3. Async/Await

// What is a callback?
// A callback is a function that is to be executed after another 
// function has finished executing — hence the name ‘call back’.

// Example:
function one(){
  console.log('one')
}

function two(){
  setTimeout(()=>{
    console.log('Two')
  }, 5000);
}

function three(){
  console.log('Three')
}

one();
two();
three();

// the output will be one, three, two. 
// in order to make it synchronous, what we can do is to use 'callback hell'


function one(callback){
  console.log('one')
  callback();
}

function two(callback){
  setTimeout(()=>{
    console.log('Two')
    callback();
  }, 5000);
}

function three(callback){
  console.log('Three')
  callback();
}

// Working.....
// The callbacks of functions are get called once the function (higher function)
// of the function is called.

// calling the function
// callback hell (ES-5)
one(() => {
  two(() => {
    three(() => {
      console.log('finish calling');
    })
  })
});




// ES-6 promises

// What is a promise?
// it converts asyncronous code into syncronous code
// A promise is an object that may produce a single value 
// some time in the future:
// either a resolved value, or a reason that 
// it’s not resolved (e.g., a network error occurred).
// Promise is a constructor function (a class), so you need to use 
// the new keyword to create one.
// It takes a function, as its argument, 
// with two parameters - resolve and reject.


// Promise is a class that takes two arguments in its callback 
// one is called resolve another is called reject.
// Promise resolve means the thing is received for which we are waiting for.
// Promise reject means either the responce is empty or it is incomplete.

// Example:

function one(){
  return new Promise((resolve, reject) => {
    console.log('one')
    resolve();
  });
}

function two(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('two');
      resolve();
    }, 5000)
  });
}

function three(){
  return new Promise((resolve, reject) => {
    console.log('three');
    resolve();
  });
}


// Calling..........
one().then(() => {
  two().then(() => {
    three().then(() => {
      console.log('Finish');
    })
  })
})

// then function is called whenever resolve is returned by the Promise()

// What is async/await?
// async/await is a way to write asynchronous code that looks synchronous.

// Example
// The calling method of the promise is little difficult to understand
// the alternative to that is async and await
// the function definition would not be changed
// only the calling method will be changed


async function runFunctions() {
  await one();
  await two();
  await three();
  console.log('all done!')
}

runFunctions();

// Easy way of async and await (without creating another function)

(async () => {
  await one();
  await two();
  await three();
  console.log('all done!')
})();


// The await keyword is used in a sense to wait for it until resolve is returned 
// from the Promise