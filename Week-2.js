// 1. Write an anonymous function that takes one argument of type number and decides if that number is evenly divisble by three or not. If it is, print the number and "is divisible by three". If it is not, print that the number "is not divisble by three".
let math = function(a){
	if (a % 3 === 0){
	console.log(a + " is divisble by three")
	} else 
		console.log(a + " is not divisble by three")
};

math(3)



// 2. Write about yourself using an object. Include at least three properties of you and store your object in a variable with your name.

let joseph = ["tall", "coder", "male"];

// 3. Given the object below, fill in how to find specific information:

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log just the bell from the list of gear
console.log(gear.length([2])

// Log the correct PSI for the tires
console.log(bicycle.wheels.specs[2])

// 4. Have the function AlphabetSoup(str) take the "str" parameter being passed and return a string with the letters in alphabetical order (ie. hello becomes ehllo). Assume no numbers or punctuation symbols will not be included in the parameter. 

// Input:"hooplah"
// Output:"ahhloop"

function AlphabetSoup(str) {
	let stuff = str.split('').sort().join('');
	
	return stuff; 
}


AlphabetSoup('hooplah');   

// 5. Given the arrays below, use a for loop to print one value from each array concatenated together. How would your code need to change to accomodate arrays of different lengths?

var nums = [1, 5, 88, 2, 5, 42, 57, 101]

var nouns = ["ducks", "telephone booth", "the enterprise", "robots", "amazon", "eraser", "zafod", "a"]

// output of the first function should be: "1 ducks"

let combo = function(nums[],nouns[]){
	for (var i = nums.length - 1; i >= 0; i--) {
		nums[i]
	}
}
