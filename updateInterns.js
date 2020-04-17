const assert = require("assert");
const {
  parse
} = require("querystring");

const updateDocument = (db, callback) => {
  const collection = db.collection("myMovies");
  const doc = {
    movie: "The Banker"
  };
  const newProp = {
    $set: {
      movie: "Heavenly places",
      year: "2020",
      rating: 10
    }
  };
  collection.findOneAndUpdate(doc, newProp, {
    returnOriginal: false
  }, (err, data) => {
    assert.equal(err, null);
    callback(data.value);
  });
};

module.exports = updateDocument;