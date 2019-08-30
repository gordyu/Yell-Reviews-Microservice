const express = require('express');
const yellReviews = require('./database/index.js');
const app = express();
const port = process.env.PORT || 9002;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.static(__dirname + '/client/dist'));

app.listen(port, function() {
  console.log(`YellReviews is listening on port ${port}`);
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/dist/index.html');
});

app.get('/lowestrated', (req, res) => {
  yellReviews.find({ reviewScore : { $eq: 1 }}, (err, result) => {
    if (err) {
      console.log('GET lowest rated triggered ERROR', err);
      callback(err, null);
    }
    else {
      res.status(200).send(result);
    }
  }).limit(8);
});

app.get('/highestratedladies', (req, res) => {
  yellReviews.find({ gender: 'F', reviewScore: { $eq: 5 }}, (err, result) => {
    if (err) {
      console.log('GET highest rated triggered ERROR', err);
      callback(err, null);
    }
    else {
      res.status(200).send(result);
    }
  }).limit(8);
});

app.get('/highestratedgents', (req, res) => {
  yellReviews.find({ gender: 'M', reviewScore: { $eq: 5 }}, (err, result) => {
    if (err) {
      console.log('GET ladies first triggered ERROR', err);
      callback(err, null);
    }
    else {
      res.status(200).send(result);
    }
  }).limit(8);
});