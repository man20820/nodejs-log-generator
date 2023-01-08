require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
var cron = require('node-cron');

app.use(cors());

const port = process.env.PORT || "3000";

app.route("/").get((req, res) => {
  res.send("info man@tkjpedia.com");
});

let log = null
let error = null

app.route("/log/:message/:frequency").get((req, res) => {
  let message = req.params.message
  let frequency = req.params.frequency
  if (log !== null) {
    log.stop()
  }
  log = cron.schedule(`*/${ frequency } * * * * *`, () => {
    console.log(`setiap ${ frequency } detik, ini adalah pesan ${ message } pada ${ new Date() }`);
  }, {
    scheduled: true
  });
  res.send(`membuat log ${ message } setiap ${ frequency } detik sekali`); 
});

app.route("/error/:message/:frequency").get((req, res) => {
  let message = req.params.message
  let frequency = req.params.frequency
  if (error !== null) {
    error.stop()
  }
  error = cron.schedule(`*/${ frequency } * * * * *`, () => {
    console.error(`setiap ${ frequency } detik, ini adalah error ${ message } pada ${ new Date() }`);
  }, {
    scheduled: true
  });
  res.send(`membuat error ${ message } setiap ${ frequency } detik sekali`); 
});

app.listen(port);