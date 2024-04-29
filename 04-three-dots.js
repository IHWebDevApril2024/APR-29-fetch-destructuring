const reptiles = ["snake", "lizard", "alligator"];
const mammals = ["puppy", "kitten", "bunny"];
const more = ["rabbit", "mongoose"];

const animals = reptiles.concat(mammals, more);
console.log(animals);

// SPREAD OPERATOR
const mammalsSpread = [...mammals]; // this is creating a NEW copy of the array
mammalsSpread.push("Cobra"); // it doesn't mutate the original one
console.log(mammals, mammalsSpread);

const animalsSpread = [...mammals, ...more, ...reptiles];

console.log(animalsSpread);

const myObject = {
  animals: animalsSpread,
};

// console.log(myObject);

const newObject = { ...myObject }; // it also creates a copy of the object
newObject.people = ["Jason", "Mike"];

console.log(myObject, newObject);
const complexObject = {
  name: "GitHub Copilot",
  age: 100,
  skills: ["programming", "problem-solving", "machine learning"],
  address: { street: "123 Main St", city: "San Francisco", country: "USA" },
  friends: [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 40 },
  ],
  isAwesome: true,
};

const complexCopy = { ...complexObject }; // this is not the way to create exact copies of "complex" objects

complexCopy.address.city = "Barcelona";
complexCopy.age = 50;

console.log(complexObject, complexCopy);

const complexObject2 = {
  name: "GitHub Copilot",
  age: 100,
  skills: ["programming", "problem-solving", "machine learning"],
  address: { street: "456 Elm St", city: "New York", country: "USA" },
  friends: [
    { name: "Eve", age: 25 },
    { name: "Frank", age: 45 },
    { name: "Grace", age: 50 },
  ],
  isAwesome: true,
};

// way to copy object and all the nested objects inside:
/* const complexObject2JSON = JSON.stringify(complexObject2);
const complexObject2Copy = JSON.parse(complexObject2JSON); */

const complexObject2Copy = structuredClone(complexObject2); // quickest way to clone object
complexObject2Copy.address.street = "1234 fake street";

console.log(complexObject2, complexObject2Copy);

function myFunction() {
  console.log(arguments); // we can see all the arguments even if we have no parameters
}

myFunction("dasadsadsa", 32143324, "third argument"); // it's going to conse log this:

/*
[Arguments] { '0': 'dasadsadsa', '1': 32143324, '2': 'third argument' }
*/

function sum() {
  console.log(arguments);
  let total = 0;
  for (let number of arguments) {
    total += number;
  }

  console.log(total);
}

sum(2, 3, 4, 5, 32, 100);

function logArguments(...arguments) { // we are converting all the arguments into an array
  arguments.forEach((element) => console.log(element)); // now arguments it's an array
}

logArguments("sdadsa", 123, false, NaN);


function sumArguments(...arguments){
    const total = arguments.reduce((acc,cur)=>{
        return acc+cur
    })
    console.log(total);
}

sumArguments(2,1,23,4,3,2)