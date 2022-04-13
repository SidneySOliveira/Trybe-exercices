const {books} = require('./dados')

function authorBornIn1947(library, yearSearch) {
    return library.find((year) => year.author.birthYear === yearSearch)
  }

console.log(authorBornIn1947(books, 1947))
