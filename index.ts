// Implicit typing
let someNumber = 23;

// Explicit typing
let myNum: number;
let myStr: any;

// Avoid redundancy

let anotherNumber: number = 23;

myNum = 3;
myStr = true;

// Interfaces for objects

interface Dog {
  name: string;
  color: string;
  age: number;
  [key: string]: any;
}

const dog1: Dog = {
  name: 'Enano',
  color: 'Salt/Pepper',
  age: 4,
  favoriteBook: 'The Lord of the Rings'
};

const dog2: Dog = {
  name: 'Rocky',
  color: 'Black/Tan',
  age: 7,
  favoriteMeal: 'Books'
};

const dog3: Dog = {
  name: 'Firulais',
  color: 'who knows',
  age: 10
};

console.log(dog1);
console.log(dog2);

// Function typing

function add(num1: number, num2: number, msg?: string): number {
  if (msg) console.log(msg);
  return num1 + num2;
}

console.log(add(1, 2, 'Hehe'));
console.log(add(3, 2));
console.log(add(1, 5));

// Arrays

const dogs: Dog[] = [];

dogs.push(dog1);
dogs.push(dog2);
dogs.push(dog3);

console.log(dogs);

// Tuples

type MyArr = [string, number, boolean];
const myArr: MyArr = ['de', 1, true];
console.log(myArr);

// Generics

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

console.log(getArray<number>([1, 2, 3]));
console.log(getArray<string>(['Some', 'body', 'save me']));
console.log(getArray<Dog>([dog1, dog2, dog3]));
