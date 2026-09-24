function Book(title, author, pages, read) {
    if(!new.target) {
        throw Error("You must use the 'new' operator to call the constructor")
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        information = `${title} by ${author}, ${pages} pages, ${read}`
        return information
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295","not read yet");
console.log(theHobbit.info());