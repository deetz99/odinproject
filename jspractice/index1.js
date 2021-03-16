function Book(title, author, numPages, haveRead){
    this.title = title
    this.author = author
    this.numPages = numPages
    this.haveRead = haveRead
    this.info = function() {
        return(`${Book.title} by ${Book.author}, ${Book.numPages}, ${Book.haveRead}}`)
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295 pages', 'not read yet')

console.log(theHobbit.info())