function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter((book) => {
    let isBorrowed = !book.borrows[0].returned;
    return isBorrowed;
  }).length;
}

function _reduceByProp(arr, key) {
  let newArr = arr.reduce((acc, prop) => {
    let keyExist = acc.find((item) => item.name === prop[key]);
    if (keyExist) {
      keyExist.count += 1;
    } else {
      let obj = { name: prop[key], count: 1 };
      acc.push(obj);
    }
    return acc;
  }, []);
  return newArr;
}

function getMostCommonGenres(books) {
  let countArr = _reduceByProp(books, "genre");   
  
  return countArr.sort((keyA, keyB) => keyB.count - keyA.count).slice(0, 5);
}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
