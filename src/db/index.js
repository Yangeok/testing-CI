const mongoose = require('mongoose');

module.exports = () => {
  function connect() {
    mongoose.connect(
      'mongodb://root:root@52.79.70.237:27017/admin',
      {
        useNewUrlParser: true
      },
      err => {
        if (err) {
          console.error(`connection error:`, err);
        }
        console.log(`> DB connected on development environment`);
      }
    );
  }
  connect();
  mongoose.connection.on('disconnected', connect);
};

// () => {
//   const db = mongoose.connection;
//   db.on('error', console.error.bind(console, `connection error:`));
//   db.once('open', () => {
//     console.log(`> DB connected on development environment`);
//   });
//   mongoose.connect('mongodb://root:root@52.79.70.237:27017/admin', {
//     useNewUrlParser: true
//   });
// };
