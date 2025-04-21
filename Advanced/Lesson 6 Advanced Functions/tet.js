let person = {
    name: "Lili",
    age: 25,
    sayHello () {
        console.log(`${this.name} says Hello!`)
}
}

 person.sayHello();

 const {sayHello} = person;

let person2 = {
    name: "Mimi",
    sayHello
    
}
 

person2.sayHello();