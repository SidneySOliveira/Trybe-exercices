const {books} = require('./dados')
/*
// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
function authorBornIn1947(library, yearSearch) {
    return library.find((year) => year.author.birthYear === yearSearch)
  }

console.log(authorBornIn1947(books, 1947))

// 2 - Retorne o nome do livro de menor nome.
function smallerName(book) {
    let nameBook = book[0].name;
    book.forEach(element => { 
        element.name.length < nameBook.length ? nameBook = element.name : nameBook = nameBook;   
    });
    return nameBook;
  }

  console.log(smallerName(books));
//   console.log(books[0].name.length);
*/
// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
  
  function getNamedBook(books, nameLength) {
      return books.find((nome) => nome.name.length = nameLength)
  }

  console.log(getNamedBook(books, 26));