class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // setter
    set name(value) {
        if(value.length <= 1) {
            console.log("Invalid name");
            return;
        }
        this._name = value;
        
    }
    set age(value) {
        if(value <= 18) {
            console.log("You are not eligible");
            return;
        }
        this._age = value;
    }

    // getter
    get age() {
        return this._age;
    }
    get name() {
        return this._name;
    }

    display() {
        console.log(this.name + " is " + this.age + " years old.");
    }

    click = () => {
        console.log(this.age)
    }
}

let user = new User("John", 20);
let user2 = new User("A", 21);
let user3 = new User("Simon", 17);

user.display();

console.log(user.name);
console.log(user.age);

setTimeout(user.click, 3000);

// class expression
let Welcome = class {
    sayHi() {
        console.log("Hi");
    }
};
new Welcome().sayHi();