// callback function
const calcTwoNum = (a, b, addNum) => {
    console.log(`Sum of ${a} and ${b}: ${addNum(a, b)}`);
};

calcTwoNum(10, 20, addNum = (x, y) => x + y);

//Same thing without callback function
const calcTwoNum2 = (a, b) => console.log(`Sum of ${a} and ${b}: ${addNum2(a, b)}`);
const addNum2 = (a, b) => a+b;
calcTwoNum2(10, 20);
