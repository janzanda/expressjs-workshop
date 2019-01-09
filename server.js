const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

console.log('AA')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const dburl = 'mongodb://aw:Radlicka333@ds253284.mlab.com:53284/expressjs-worskhop'

const port = (process.env.PORT || 8000);

MongoClient.connect(dburl,{useNewUrlParser: true}, (err,database) => {
  if(err)  return console.log(err); 

  require('./routes')(app,database);

  app.listen(port,() => {
    console.log('We are live on ' + port);
  });
})

