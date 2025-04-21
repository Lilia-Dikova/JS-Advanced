function Person (name, age) {
    this.name = name,
    this.age = age
};

Person.prototype.sayHello = function sayHello () {
    console.log(`${this.name} says hi!`)
};
Person.prototype.food = 'Gourmet'

let obj = new Person('Mimi', 22);

console.log(obj)
console.log(obj.food)
obj.food = "Felix"
console.log(obj.food.__proto__)
Person.prototype.food = 'New'
console.log(Person.prototype.food)
