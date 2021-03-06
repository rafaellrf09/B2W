require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

require('./database');

const routes = require('./routes');


class App {
  constructor(){
    this.app = express();
    this.middlewares();
    this.routes(); 
  }

  routes(){
    this.app.use(routes);
  }

  middlewares() {
    this.app.use(bodyParser.json());
    this.app.use(cors());
  }
}

module.exports = new App().app;