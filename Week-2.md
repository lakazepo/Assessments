### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. Name all of the data types in Javascript, mark which are primitives. 

  Your Answer: intergers, strings, booleans, null, undefine
  
  
  Googled Answer: boolean, null, undefined, number, string, symbol, object. All are primative except for objects.


#### 2. Look at this Javascript and try to predict, what will the browser's console show? 

``` javascript

var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};

logIt();

```

first Guess: outside


Then, past the code in your console and explain why you were right/wrong. 

Result: It shows the function in detail I assume because there was no argument to be passed through.


#### 3. What is JSON? How does it relate to javascript objects?

  Your Answer: JSON is a package 
  
  
  Googled Answer: JSON is javascript in human language


#### 4. Describe a closure, what is it good for and how do you recognize one?

  Your Answer: Closure is... something to do with scopes.
  
  
  Googled Answer: a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time. To use a closure, simply define a function inside another function and expose it./ A closure is a function having access to the parent scope, even after the parent function has closed.


  

#### 5. What's the difference between =, ==, and === in JavaScript?

  Your Answer: = is to assign, == equal to, === exact equal
  
  
  Googled Answer: JavaScript has both strict (===) and type-converting equality comparison (==). 
