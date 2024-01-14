//object-spread-methods
let x;

// Create object using the object constructor
const todo = new Object();
todo.id = 1;
todo.name = 'Buy APPLE';
todo.completed = false;

x = todo;

// Object Nesting
const person = {
  address: {
    coords: {
      lat: 42.9384,
      lng: -71.3232,
    },
  },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Spread operator
const obj3 = { ...obj1, ...obj2 };
// Same as using ...
const obj4 = Object.assign({}, obj1, obj2);

// Array of objects
const todos = [
  { id: 1, name: 'Buy Milk' },
  { id: 2, name: 'Pickup kids from school' },
  { id: 3, name: 'Take out trash' },
];

x = todos[1].name;

console.log(x);
//destructuring-naming
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const persons = {
  firstName,
  lastName,
  age,
};

console.log(persons.age);
// Destructuring object properties

const todoID = {
    id: 1,
    title: 'Take out trash',
    user: {
      name: 'John',
    },
  };
  
  const {
    id: todoId, // rename id to todoId
    title,
    user: { name }, // destructuring multiple levels
  } = todoID;
  
  console.log(todoId,name);
  //oject-challenge
  //step1
  const library = [
    {
      title: 'NGUYEN MINH TU',
      author: 'Minh Tu',
      status: {
        own: true,
        reading: true,
        read: false,
      },
    },
    {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: 'Anh yeu em nhieu lam',
      author: 'em rat yeu anh',
      status: {
        own: true,
        reading: false,
        read: true,
      },
    },
  ];
  // step 2
  library[0].status.read = true;
library[1].status.read = true;
// step 3
const { title: firstBook } = library[0];
console.log(firstBook);
// step4
const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);
