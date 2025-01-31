export default () => ({
  db: {
    url: process.env.DB_URL || 'mongodb://localhost/book-cart',
  },
});
