// Implicit typing
let someNumber = 23;
// Explicit typing
let myNum;
let myStr;
// Avoid redundancy
let anotherNumber = 23;
myNum = 3;
myStr = true;
const dog1 = {
    name: 'Enano',
    color: 'Salt/Pepper',
    age: 4,
    favoriteBook: 'The Lord of the Rings'
};
const dog2 = {
    name: 'Rocky',
    color: 'Black/Tan',
    age: 7,
    favoriteMeal: 'Books'
};
const dog3 = {
    name: 'Firulais',
    color: 'who knows',
    age: 10
};
console.log(dog1);
console.log(dog2);
// Function typing
function add(num1, num2, msg) {
    if (msg)
        console.log(msg);
    return num1 + num2;
}
console.log(add(1, 2, 'Hehe'));
console.log(add(3, 2));
console.log(add(1, 5));
// Arrays
const dogs = [];
dogs.push(dog1);
dogs.push(dog2);
dogs.push(dog3);
console.log(dogs);
const myArr = ['de', 1, true];
console.log(myArr);
// Generics
function getArray(items) {
    return new Array().concat(items);
}
console.log(getArray([1, 2, 3]));
console.log(getArray(['Some', 'body', 'save me']));
console.log(getArray([dog1, dog2, dog3]));
