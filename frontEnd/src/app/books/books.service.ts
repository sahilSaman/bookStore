export class BooksService {
  constructor() {}
  getBooks() {
    return [
      {
        name: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        src: 'data:image/jpeg;base64,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',
        amount: 200,
      },
      {
        name: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        src: 'https://books.google.co.in/books/publisher/content?id=u019AwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U2ulEEQiCZ1Uy1JW7k6EEUcCKdYiw&w=1280',
        amount: 300,
      },
    ];
  }
}