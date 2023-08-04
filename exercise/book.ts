interface IBook {
  title: string;
  author: string;
  publishedYear: number;
  price: number;
  display: () => void;
}

const Book: IBook = {
  title: "Harry Porter",
  author: "J.K. Rowling",
  publishedYear: 1997,
  price: 15.0,
  display() {
    console.log(
      this.title +
        " was written by " +
        this.author +
        " and was published in " +
        this.publishedYear +
        ". Its price is " +
        this.price
    );
  },
};

Book.display();
