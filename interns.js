const assert = require("assert");
const MongoClient = require("mongodb").MongoClient;
const {
  findOneDocument,
  findAllWithRating,
  findAllTitles
} = require("./findInterns");
const updateDocument = require("./updateInterns");

const url = "mongodb://localhost:27017/";

MongoClient.connect(url, {
  useUnifiedTopology: true
}, (err, db) => {
  // if (err) throw err;
  const dbo = db.db("Victor_pro");
  // dbo.createCollection("interns", (err, res) => {
  if (err) {
    console.log(new Error(err));

  }
  insertDocuments(dbo, (result) => {
    console.log(result);
    findOneDocument(dbo, data => {
      console.log(data);
      findAllWithRating(dbo, data => {
        console.log(data);
        findAllTitles(dbo, data => {
          console.log(data);
          updateDocument(dbo, data => {
            console.log(data);
            db.close();
          });
        })
      });
    });
  });
});

const insertDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('myMovies');

  // Insert some documents
  collection.insertMany(

    [{
        movie: "The Banker",
        year: "2020",
        rating: 8
      }, {
        movie: "Bad Boys",
        year: "2020",
        rating: 7
      }, {
        movie: "The Hunt",
        year: "2020",
        rating: 7
      }, {
        movie: "Bloodshot",
        year: "2020",
        rating: 7.5
      }, {
        movie: "First Cow",
        year: "2020",
        rating: 6.5
      }

    ],
    function (err, result) {
      assert.equal(err, null);
      assert.equal(5, result.result.n);
      assert.equal(5, result.ops.length);

      console.log("Inserted 5 documents into the collection");

      callback(result);

    });

};