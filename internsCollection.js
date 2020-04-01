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
  })
  db.close();
});