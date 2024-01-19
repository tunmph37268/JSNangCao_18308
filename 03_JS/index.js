// gobal-funtion-scope
function add() {
    //Ghi đè x toàn cầu (bóng mờ biến)
    const x = 1;
    const y = 50;
    console.log(x + y);
  }
  add();
   // A loop is a block
for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
  // nested scope
  function first() {
    const x = 100;
  
    function second() {
      const y = 200;
      console.log(x + y);
    }
    second();
  }
  
  first();
// Function Declaration
function addDollarSign(value) {
    return '$' + value;
  }
  
// Khi sử dụng khai báo, bạn có thể gọi hàm trước khi khai báo.
  console.log(addDollarSign(100));
  
  // Function Expression
  const addPlusSign = function (value) {
    return '+' + value;
  };
  
  console.log(addPlusSign(200));
  //arow funtion
  const createObj = () => ({
    name: 'Brad',
  });
  const numbers = [1, 2, 3, 4, 5];
  numbers.forEach(function (n) {
    // console.log(n);
  });
  
  // Arrow function in a callback
  numbers.forEach((n) => console.log(n));
  console.log(createObj());  
 // Challenge 2
function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
  
    return {
      min,
      max,
    };
  }
  console.log(minMax([2, 31, 4, 5, 6]));
//   execution-context-in-action
  const x = 100;
const y = 50;

function getSum(n1, n2) {
  const abc = n1 - n2;
  return abc;
}

const abc1 = getSum(x, y);
const abc2 = getSum(100, 45);

console.log(abc1,abc2);