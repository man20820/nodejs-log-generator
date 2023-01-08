require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
var cron = require('node-cron');

app.use(cors());

const port = process.env.PORT || $PORT;

app.route("/").get((req, res) => {
  res.send("info man@tkjpedia.com");
});

let task = null

app.route("/log/:message/:frequency").get((req, res) => {
  let message = req.params.message
  let frequency = req.params.frequency
  if (task !== null) {
    task.stop()
  }
  task = cron.schedule(`*/${ frequency } * * * * *`, () => {
    console.log(`setiap ${ frequency } detik, ini adalah pesan ${ message } ${ new Date() }`);
  }, {
    scheduled: true
  });
  res.send(`membuat cron ${ message } setiap ${ frequency } detik sekali`); 
  console.log(task)
});



// cron.schedule('*/3 * * * * *', () => {
//   console.log('ini adalah pesan log kedua');
// });

// cron.schedule('*/5 * * * * *', () => {
//   console.error('ini adalah pesan error');
// });

app.listen(port);