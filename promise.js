let promise = new Promise((resolve, reject) => {
    const StudentMark = 60;

    if( StudentMark >= 45 ) {
        resolve(StudentMark);
    } else {
        reject(StudentMark);
    }
});

promise.then((mark) => {
    console.log('Pass: ' + mark);
}).catch( (mark) => {
    console.log(('Fail: ' + mark));
});
