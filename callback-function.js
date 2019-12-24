const calcTwoNum = (a, b, addNum) => {
    console.log(`Sum of ${a} and ${b}: ${addNum(a, b)}`);
};

const addNum = (a, b) => a+b;

calcTwoNum(10, 20, addNum);