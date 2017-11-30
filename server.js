const express     = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser  = require('body-parser');
const config      = require('./config');
const app_routes  = require('.././app/routes');
const app         = express();
const port        = 8000;
const cors        = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all('*',function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app_routes(app);
app.listen(port, () => {
  console.log('We are live on ' + port);
});


//MongoClient.connect(config.url, (err, database) => {
//  if (err) console.log('mongoDB ERROR:',err);
//  (database) ? routes(app, database) : routes(app);
//
//  app.listen(port, () => {
//    console.log('We are live on ' + port);
//  });
//});
