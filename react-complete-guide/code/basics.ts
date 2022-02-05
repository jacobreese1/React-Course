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