//forEach
const hobbies = ['Hiking', 'Backpacking', 'Camping', 'Archery', 'Growing flowers'];

hobbies.forEach((hobby, index) => console.log(index, hobby));

const logHobbies = (hobby) => console.log('My hobby is a ' + hobby);
hobbies.forEach(logHobbies);
