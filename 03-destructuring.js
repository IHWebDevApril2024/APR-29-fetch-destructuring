// DESTRUCTURING

let staff1 = {
  userName: "Laia",
  age: 34,
  role: "Project Manager",
  country: "Spain",
};

/* const userName = staff1.userName;
const age = staff1.age;
const role = staff1.role; */

const { userName, age, role, country, isAdmin = false } = staff1; // we take all the properties that match the names of the variables we want to create

// if the "extra" const we add doesn't exist it's going to assign the value, but if they exist is not going to overwrite it

console.log(userName, age, role, country, isAdmin);

const movie = {
  title: "Dune 2",
  category: "Sci-fi",
  director: "Denis Villeneuve",
};

const { title: movieName, category, director } = movie; // the variable name is changed from title to movieName. But it gets the correct value.

console.log(movieName);

const warrior = {
  type: "Tank",
  name: "Pepe the bonecrusher",
  armour: [
    {
      name: "hell helmet",
      points: 123,
      isLegendary: true,
    },
    {
      name: "forsaken sword",
      points: 20,
      isLegendary: false,
    },
  ],
  stats: {
    hp: 1000,
    fury: true,
  },
};

const { type, name, armour, stats } = warrior;
// Destructuring is to avoid this:
/*
const type = warrior.type
const name = warrior.name
const armour = warrior.armour
const stats = warrior.stats
*/

console.log(type, name, armour, stats);

// destructure a n object inside an object

const { hp, fury } = warrior.stats;

console.log("WARRIOR STATS: ", hp, fury);

// DESTRUCTURING ARRAYS

const fantasyNames = [
  "Eldron",
  "Lorelei",
  "Zephyr",
  "Aurelia",
  "Thorn",
  "Seraphina",
  "Draven",
  "Luna",
  "Ragnar",
  "Sylvana",
];

const [firstCharacter, secondCharacter] = fantasyNames; // we add the names of the variables inside the destructuring array

// I could do this:
/*
const firstCharacter = fantasyNames[0]
const secondCharacter = fantasyNames[1]
*/

console.log(firstCharacter, secondCharacter); // this creates new variables with those values

function sayHi() {
  console.log(`Hi, ${firstCharacter}`); // this variables are regular variables (with the scopes and everything)
}

sayHi();

const warriors = [
  ["Gandalf", "Wizard"],
  ["Aragorn", "Warrior"],
  ["Legolas", "Archer", ["Handsome", "Blonde"]],
];

const [warrior1, warrior2, warrior3] = warriors;

console.log(warrior1, warrior2, warrior3);

const [, , [, , [, w1]]] = warriors;

console.log(w1);

const [a, b] = [1];
console.log(a * b); // NaN

const [c, d = 1] = [2];
console.log(c * d); // <== ???

let [e, f = 2, g, h = 1] = [3, 4];
console.log(e, f, g, h); // ==> ???
// ALVARO: 3,2,4,1
// NISOL: 3,2,4,1
// Kai: 3,4,undefined, 1 😎
// Arnaldo: 3,2,undefined, 1
// Mikel: 3,2,4,1


