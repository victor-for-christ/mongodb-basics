const assert = require("assert");

exports.findOneDocument = (db, callback) => {
  const collection = db.collection("myMovies");
  collection.findOne({}, (err, data) => {
    assert.equal(err, null);
    callback(data);
  })
};

exports.findAllWithRating = (db, callback) => {
  const collection = db.collection("myMovies");
  collection.find({
    rating: 7
  }).toArray((err, data) => {
    assert.equal(err, null);
    callback(data);
  });
};

exports.findAllTitles = (db, callback) => {
  const collection = db.collection("myMovies");
  collection.find({}, {
    projection: {
      _id: 0,
      movie: 1
    }
  }).toArray((err, data) => {
    assert.equal(err, null);
    callback(data);
  });
};