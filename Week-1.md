### Week 1 Assessment

These are potential interview questions. Try your best to answer each question on your own before looking up the answer online.

#### 1. One great resource for learning Javascript is Eloquent Javascript - read this chapter on functions (http://eloquentjavascript.net/03_functions.html) and list a few thoughts, questions, or things you learned here:

  1. Global scope can be seen by all, local scope can be seen by only those within its own range. Lexical Scoping.
  2. Use "let" or "const" instead of "var." Let can be changed later on, const can not.
  3. Functions can be shorten with using =>
  4. Call Stack is where the info is stored from functions. It can be overloaded with an infinite loop or too much information.
  5. If you have more than one parameter but only use one argument then the rest of the parameters willl be ignored and vice versa.
  6. You can assign default values to a parameter with the "=" sign which can be changed if you assign a different value later on.
  7. Closure seems to reference the ablity to pull a function along as the sitution or values within it changes.
  8. Recursion is when a function calls on itself. Similiar to a loop but recursion is easier to read for humans and is better for handling branching out.
  9. Know what is needed and create the names and functions as needed. Sometimes breaking a function into two separate functions can be more useful in the long run when dealing with added situations.
  10. Some functions are called simply for the side affects (doing something to help something else) and others are called for their actual values.


#### 2. What is a linter for? Do you think they are usefull? Explain why/why not.

your answer: I believe it has to do with filtering or making something easier.
Googled Answer: Helps check code for errors or bad writing.

#### 3. Explain local vs global scope in programming. Feel free to create a code example to support your answer. 

 Your Answer: Local scope are values or functions that are written in an area that can only be seen by that area. Although that area can also see values or functions on outer scopes. Global scope is the same but written on the outermost layer and can be seen by all but cannot see into local scopes.
  
  
  //Googled Answer


#### 4. Another great resource for more practice writing code is Free Code Camp. Their Javascript section starts here (https://www.freecodecamp.org/challenges/comment-your-javascript-code) - do at least 5 exercises. 

Was this extra practice helpful? Take note of any concepts you learned or felt you understood better because of this resource. 

 Your Answer: Yes, redefined the basics of writing in javascript

#### 5. Complete the steps for pushing changes to Github, assuming that the directory you are working in is already a git repo:

- git add .
- git commit -m "This is a message"
- git push -u origin master

#### 6. List some differences between return and console.log in Javascript. When would you use one vs the other? 

return shows the programmer the current value and allows us to continue to use it as we code. Console.log shows the current value to be used for more debugging situations but never appears on the browser.

#### 7. Think back to the intro to Javascript presentation. We talked about Javascript being a "Dynamically Typed" language. What did this mean about the way we write Javascript?

Your Answer: Dynamically typed is the order that the computer reads the material. It reads the global scope until required to dive deeper into local scopes like when we are calling a function.


Googled Answer: Computer reads the code in real time?
