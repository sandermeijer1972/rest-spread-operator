const telOp = (...arg) => {
    return arg.reduce((acc, item) => {
        return acc + item;
    })
};

console.log(telOp(1,2,3,4,5,6,7));

const optellen = function(num1, num2, num3) {
    return num1 + num2 + num3;
  }
  
  const cijfers = [1, 2, 3, 4];
  
  console.log(optellen(...cijfers));

