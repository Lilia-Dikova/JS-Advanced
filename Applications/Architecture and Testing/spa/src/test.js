let myObj = {
    cat: '2Mimi',
    cat2: '1Ushe'
}

let sss = Object.fromEntries(Object.entries(myObj).sort((([,a],[,b]) => a.localeCompare(b))))

console.log(sss)