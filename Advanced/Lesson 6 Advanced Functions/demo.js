function sayHello () {
    console.log(`${this.name} says Hi :)`)
}

let person = {
    name: 'Mimi',
}

sayHello.call(person)