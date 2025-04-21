function myAge() {
    console.log(`Hello ${this.name}`);
}

const person = {
    name: 'Lili',
    age: 27,
    myAge
}; 


const person2 = {
    name: 'Nikol',
    age: 23,
    myAge
    }

    const personAsString = JSON.stringify(person)
    console.log(personAsString)
    person.myAge()
    person2.myAge()