const db = require('./index.js');
const yellReviews = require('./index.js');
const sampleReviews = require('./data.js');

const seed = ()=> {
  yellReviews.create(sampleReviews, (err, result) => {
    if (err) console.log('Error with seeding database:', err);
  })
}

seed();