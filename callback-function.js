// callback function
const calcTwoNum = (a, b, addNum) => {
    console.log(`Sum of ${a} and ${b}: ${addNum(a, b)}`);
};

const addNum = (a, b) => a+b;

calcTwoNum(10, 20, addNum);

//Same thing without callback function
const calcTwoNum2 = (a, b) => console.log(`Sum of ${a} and ${b}: ${addNum(a, b)}`);

calcTwoNum2(10, 20);
