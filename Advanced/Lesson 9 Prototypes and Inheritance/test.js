const person = {
    name: 'Mimi',
    age: 25
};

console.log(Object.getOwnPropertyDescriptor(person,'name'));
Object.defineProperty(person, 'food', {
    enumerable: true ,
    configurable: true,
    get () {
        return food
    },
    set (value) {
        food = value
    }
})
person.food = "Gourmet"


console.log(person.food)