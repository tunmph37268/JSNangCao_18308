//math-oject
let x;
x = Math.sqrt(9);
// x = Math.abs(-5);
// x = Math.round(4.2);
// x = Math.ceil(4.2);
// x = Math.floor(4.9);
// x = Math.pow(2, 3);
// x = Math.min(4, 5, 3);
// x = Math.max(4, 5, 3);
// x = Math.random();
// x = Math.floor(Math.random() * 100 + 1);
console.log(x);
//number- challegn
const a = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

// sum
const sum = a + y;
const sumOutput = `${a} + ${y} = ${sum}`;
console.log(sumOutput);

//  difference
const diff = a - y;
const diffOutput = `${a} - ${y} = ${diff}`;
console.log(diffOutput);

// product
const prod = a * y;
const prodOutput = `${a} * ${y} = ${prod}`;
console.log(prodOutput);

//  quotient
const quot = a / y;
const quotOutput = `${a} / ${y} = ${quot}`;
console.log(quotOutput);
// date oject
let b;
let d = new Date();

// Date methods
b = d.toString();
b = d.getTime();
b = d.valueOf();

b = d.getFullYear();

b = d.getMonth();
b = d.getMonth() + 1;

x = d.getDate();

b = d.getDay();

b = d.getHours();
b = d.getMinutes();

b = d.getSeconds();

b = d.getMilliseconds();

b = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

console.log(b);
