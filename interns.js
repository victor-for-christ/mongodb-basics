const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";

MongoClient.connect(url, {
  useUnifiedTopology: true
}, (err, db) => {
  if (err) throw err;
  const dbo = db.db("Victor_pro");
  dbo.createCollection("interns", (err, res) => {
    if (err) throw err;
    console.log("Interns collection created");
  });
  //It is not stated that the initial data here be removed Create a collection 

  db.close();
});

const insertDocuments = function (db, callback) {

  // Get the documents collection

  const collection = db.collection('documents');

  // Insert some documents

  collection.insertMany([

    {
      a: 1
    }, {
      a: 2
    }, {
      a: 3
    }

  ], function (err, result) {

    assert.equal(err, null);

    assert.equal(3, result.result.n);

    assert.equal(3, result.ops.length);

    console.log("Inserted 3 documents into the collection");

    callback(result);

  });

};
}