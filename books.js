function findAuthorById(authors, id) {
 return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let array1 = books.filter((book) => book.borrows[0].returned === false);
  let array2 = books.filter((book) => book.borrows[0].returned !== false);
  return [array1,array2];  
}

function getBorrowersForBook(book, accounts) {
  let result = book.borrows.map(borrower => { 
   let result = accounts.find(account => borrower.id === account.id );
   result.returned = borrower.returned;
   return result;
  })
  console.log(result);
  return result.filter((borrower, i)=> result.findIndex(item => item.id === borrower.id) === i);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
