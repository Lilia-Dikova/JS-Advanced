class BookClub {
    constructor (library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }
    addBook (title, author) {
        let findBook = this.books.find((b) => b.title == title);
        if (findBook)  {
            return `The book "${title}" by ${author} is already in ${this.library} library.`
        } else {
            this.books.push ({
                title,
                author
            });
            return `The book "${title}" by ${author} has been added to ${this.library} library.`
        }
    }
    addMember (memberName) {
        let findMember = this.members.find(m => m.memberName == memberName);
        if (findMember) {
            return `Member ${memberName} is already a part of the book club.`
        } else {
            this.members.push({memberName});
            return `Member ${memberName} has been joined to the book club.`
        }
    }
    assignBookToMember (memberName, bookTitle)  {
        let memberFound = this.members.find(x => x.memberName == memberName);
        let bookFound = this.books.find(b => b.title == bookTitle);

        if (!memberFound) {
            return `Member ${memberName} not found.`
        }
        if (!bookFound) {
            return `Book "${bookTitle}" not found.`
        }
        let index = this.books.indexOf(bookFound);
        this.books.splice(index, 1)[0];
        
        return `Member ${memberName} has been assigned the book "${bookTitle}" by ${bookFound.author}.`
    }
    generateReadingReport () {
        if (this.members.length <= 0) {
            return `No members in the book club.`
        }
         if (this.books.length <=0) {
            return 'No available books in the library.'
        }

         else {let result = [`Available Books in ${this.library} library:`];
        this.books.forEach(s => result.push(`"${s.title}" by ${s.author}`));
        return result.join ('\n')
    }
    }
}

const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Peter"));
console.log(myBookClub.assignBookToMember("Peter", "The Da Vinci Code"));
