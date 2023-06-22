// Ստուգել եթե օբյեկտում չկա "email" հատկություն(property) ապա ավելացնել
let myObject = {};
if (!myObject.hasOwnProperty("email")) {
  myObject.email = "example@example.com";
}

// Ստեղծել “{password: “Abcd1234”}” տիպի օբյեկտ։Այնպես անել,որ «password» հատկությունը հնարավոր լինի փոփոխել միայն եթե նոր արժեքը «String» տիպի է, սկսվում է մեծատառով և պարունակում է գոնե մեկ թիվ։ Հակառակ դեպքում տպել «invalid value» արտահայտությունը
let object = {
    password: "Abcd1234"
};


// Ստեղծել զանգված մեջը մի քանի օբյեկտներ։ `օր․՝ [ {title: "lorem... ", complited: true}, {...}, {...}]`; Գրել կոդ, որը բոլորի մեջ կավելացնի պատահական եռանիշ `id` հատկություն 

let objects = [
  { title: "lorem...", completed: true },
  { title: "...", completed: false },
  { title: "...", completed: true }
];

objects.forEach((object) => {
  object.id = Math.floor(Math.random() * 1000);
});

// Կա Օբյեկտ, որի մեջ բոլոր հատկությունները "number" տիպի արժեքներ են պարունակում,  գրել կոդ, որը կստանա այդ թվերի գումարը

let obj = {
  number1: 10,
  number2: 20,
  number3: 30
};

let sum = Object.values(obj).reduce((a,b) => a + b, 0);

// Ստեղծել 2 օբյեկտ, ժառանգել մեկը մյուսից , փորձել օգտագործել առաջին օբյեկտի ֆունկցիան երկրորդ օգյեկտի համար(կոնտեքստում)

let first = {
  name: "John",
  age: 25,
  greet: function() {
    console.log(`Hello, my name is ${this.name}. I'm ${this.age} years old.`);
  }
};

let second = {
  name: "Emily",
  age: 30
};

Object.setPrototypeOf(second, first);

second.greet();


// Ստեղծել Օբյեկտ, մեջը ավելացնել կամայական հատկություն ԱՅՆՊԵՍ, որ `for` ֆռալուց այն չերևա

let newObj = {};


// ստեղծել օբյեկտ,տպել միայն այն հատկությունների անունները (key),որոնք ԹԻՎ են պարունակում

let objKey = {
  name: "John",
  age: 30,
  score: 85
};

let numberProperties = Object.keys(objKey).filter(key => typeof objKey[key] === "number");


const player = {
	name: 'Michael', 
	surname:'Jordan',
	age:57,
	number: 23,
	points: 32292,
	password: "secret word",
	team: 'Chicago Bulls'
}

for (const key in object) {

}