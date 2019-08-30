const mongoose = require('mongoose');
require('dotenv').config(); //required for MONGDB_ATLAS_URI, but not for PORT!
mongoose.connect(process.env.MONGODB_ATLAS_URI, { useNewUrlParser: true });
const db = mongoose.connection;
mongoose.Promise = global.Promise;

const yellReviewSchema = new mongoose.Schema({
  id: Number,
  photoID: String,
  gender: String,
  username: String,
  cityState: String,
  numFriends: Number,
  numReviews: Number,
  numPhotos: Number,
  date: String,
  numUseful: Number,
  numFunny: Number,
  numCool: Number,
  numVotes: Number,
  reviewScore: Number,
  reviewText: String
}); 

const yellReviews = mongoose.model('yellreviews', yellReviewSchema);

module.exports = db;
module.exports = yellReviews;