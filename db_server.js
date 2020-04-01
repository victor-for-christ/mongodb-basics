const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/Victor_pro";

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("Database created by Victor_pro!");
  db.close();
});