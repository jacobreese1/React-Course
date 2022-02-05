// Primitives: number, string, boolean
// Complex: arrays, objects
// Function types: parameters

//Primitives

let age: number;

age = 12;

let userName: string;

userName = "Vivisepulture";

let isStudent: boolean;

isStudent = true;

// Complex

let hobbies: string[];

hobbies = ["Cooking", "Homebrewing", "Coding", "DnD"];

type Person = {
    name: string;
    age: number;
  };

let person: Person;

person = {
  name: "Jacob",
  age: 26,
};

let people: Person[];

let course: string | number = "React - The Complete Guide";

course = 123456;

//functions and types

function addNumbers(a: number, b: number) {
    return a + b;
}

function printValue(value: any) {
    console.log(value);
}

// generics

function insertAtBeginning<T>(array: T[], value: T) { 
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')