class PrintEditionItem {
  #state = 100;
  type = null;

  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(value) {
    if (value < 0) {
      this.#state = 0;
    }
    else if (value > 100) {
      this.#state = 100;
    }
    else {
      this.#state = value;
    }
  }

  get state() {
    return this.#state;
  }
}

class Magazine extends PrintEditionItem {
  type = "magazine";

  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
  }
}

class Book extends PrintEditionItem {
  type = "book";

  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
  }
}

class NovelBook extends Book {
  type = "novel";
}

class FantasticBook extends Book {
  type = "fantastic";
}

class DetectiveBook extends Book {
  type = "detective";
}

class Library {
  books = [];

  constructor(name) {
    this.name = name;
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    return this.books.find((book) => book[type] === value) || null;
  }

  giveBookByName(bookName) {
    const book = this.findBookBy("name", bookName);

    if (book) {
      this.books.splice(this.books.indexOf(book), 1);
    }

    return book;
  }
}

class Student {
  marks = {};

  constructor(name) {
    this.name = name;
  }

  addMark(mark, subject) {
    if (mark >= 2 && mark <= 5) {
      if (!this.marks[subject]) {
        this.marks[subject] = [];
      }

      this.marks[subject].push(mark);
    }
  }

  getAverageBySubject(subject) {
    if (!this.marks[subject]) {
      return 0;
    }

    const sumMarks = this.marks[subject].reduce((accumulator, mark) => accumulator + mark, 0);

    return sumMarks / this.marks[subject].length;
  }

  getAverage() {
    const subjects = Object.keys(this.marks);

    if (!subjects.length) {
      return 0;
    }

    const sumMarks = subjects.reduce((accumulator, subject) => accumulator + this.getAverageBySubject(subject), 0);

    return sumMarks / subjects.length;
  }
}