// If Statement Syntax
const x = 10;
const y = 5;

if (x >= y) {
  console.log(`${x} > ${y}`);
}

if (x === y) {
  console.log(`${x}= ${y}`);
} else {
  console.log(`${x} != ${y}`);
}
//else-if-nesting
const d = new Date(10, 30, 2022, 6, 0, 0);
const hour = d.getHours();

if (hour < 12) {
  console.log('Good Morning');
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');
}
//switches
const c= new Date(2022, 1, 10, 19, 0, 0);
const month = c.getMonth();
const h = c.getHours();
switch (true) {
    case h < 12:
      console.log('Good Morning');
      break;
    case h < 18:
      console.log('Good Afternoon');
      break;
    case month==1:
        console.log('Đây là tháng 1')  
    default:
      console.log('Good Night');
  }
  // cacular
  function calculator(num1, num2, operator) {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 'Invalid Operator';
  }

  console.log(result);
  return result;
}

calculator(5, 2, '/');
//logical-assignment

// ||= chỉ gán giá trị bên phải nếu bên trái là giá trị giả.

let a = null;

a ||= 10;

console.log(a);

// &&= chỉ gán giá trị bên phải nếu bên trái là giá trị trung thực.

let b = 10;

if (b) {
  b = 20;
}

b = b && 20;

b &&= 20;

console.log(b);

// ??= chỉ gán giá trị bên phải nếu bên trái là null hoặc không xác định.

let r = null;

if (r === null || r === undefined) {
  r = 20;
}

r = r ?? 20;

r ??= 20;

console.log(r);
//ternary-operator
const age = 19;
// Using a ternary operator
age >= 18 ? console.log('BẠN ĐỦ TUỔI ĐI TÙ') : console.log('BẠN CHƯA ĐỦ TUỔI NÊN CHỈ VÀO TRẠI');

// Gán giá trị có điều kiện cho biến
const canVote2 = age >= 20 ? 'BẠN ĐỦ TUỔI ĐI TÙ' : 'BẠN CHƯA ĐỦ TUỔI NÊN CHỈ VÀO TRẠI';

console.log(canVote2);