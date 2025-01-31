export default () => ({
  db: {
    url: process.env.DB_URL || 'mongodb://localhost/book-cart',
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
  },
});
