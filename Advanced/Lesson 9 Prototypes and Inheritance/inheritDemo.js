class Cat {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello () {
        console.log(`${this.name} says Hello!`)
    }
}

class MyCat extends Cat {
    constructor (name,age,food) {
        super (name, age);

        this.food = food;
    }
}

let mimi = new MyCat('Mimi' , 5, 'Gourmet');

console.log(mimi)
mimi.sayHello()
console.log(mimi.constructor)