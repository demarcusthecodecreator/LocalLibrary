function getTotalBooksCount(books) {
 return books.length;
}

function getTotalAccountsCount(accounts) {
 return accounts.length;
}

function getBooksBorrowedCount(books) {
 let booksCheckedOut = books.filter(
  (book) =>
   book.borrows.filter((record) => record.returned === false).length > 0
 );
 return booksCheckedOut.length;
}

function helper(books) {
 let countObj = {};
  books.forEach(aBook => {
    if (countObj[aBook.genre] != null) {
      countObj[aBook.genre]++;
    } else {
      countObj[aBook.genre] = 1;
    }
  }
 return countObj;
}
}


function getMostCommonGenres(books) { 
  let countObj = helper(books);
  let countArray = [];
  for (const [key, value] of Object.entries(countObj)) {
    countArray.push({
      'name' : key,
      'count' : value
    }); 
  }
  countArray.sort((a,b) => b.count - a.count);
  return countArray.slice(0, 5);
}


function getMostPopularBooks(books) {
  const result =[];
  const borrows = books.reduce((acc, book)=>  { 
    result.push({ name: book.title, count: book.borrows.length }); }, []);
 return result.sort((a,b) => b.count - a.count).slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
 let result = [];
 authors.forEach((author) => {
  let theAuthor = {
   name: `${author.name.first} ${author.name.last}`,
   count: 0
  };
  books.forEach((book) => {
   if (book.authorId === author.id) {
    theAuthor.count += book.borrows.length;
   }
  });
  result.push(theAuthor);
 });
 return result.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
