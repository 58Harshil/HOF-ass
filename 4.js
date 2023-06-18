// List of books
var books = [
  {
    title: "Book 1",
    author: "author 1",
    year: 2005
  },
  {
    title: "Book 2",
    author: "author 2",
    year: 2012
  },
  {
    title: "Book 3",
    author: "author 3",
    year: 2008
  },
  {
    title: "Book 4",
    author: "author 4",
    year: 2015
  }
];

// Function to filter books published after 2010 and capitalize author names
function filterBooks(books) {
  var filteredBooks = books.filter(function(book) {
    return book.year >= 2010;
  });

  var modifiedBooks = filteredBooks.map(function(book) {
    var modifiedAuthor = book.author.toUpperCase();
    return {
      title: book.title,
      author: modifiedAuthor,
      year: book.year
    };
  });

  return modifiedBooks;
}

// Call the filterBooks function with the list of books
var filteredList = filterBooks(books);

// Print the filtered list of books
//console.log(filteredList);
