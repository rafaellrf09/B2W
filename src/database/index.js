const mongoose = require('mongoose');

class Database {
  constructor() {
    this.mongo();
  }
  mongo() {
    this.mongoConnection = mongoose.connect(process.env.MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('Banco de dados Mongo conectado;');
  }
}

module.exports = new Database();