var Book = {
    title: "Harry Porter",
    author: "J.K. Rowling",
    publishedYear: 1997,
    price: 15.0,
    display: function () {
        console.log(this.title +
            " was written by " +
            this.author +
            " and was published in " +
            this.publishedYear +
            ". Its price is " +
            this.price);
    },
};
Book.display();
