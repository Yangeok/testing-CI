const mongoose = require('mongoose');

module.exports = () => {
  function connect() {
    mongoose.connect(
      'mongodb://52.79.70.237:27017/test',
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true
      },
      err => {
        if (err) {
          console.error(`connection error:`, err);
        }
        console.log(`> DB connected on ${process.env.NODE_ENV} environment`);
      }
    );
  }
  connect();
  mongoose.connection.on('disconnected', connect);
};
