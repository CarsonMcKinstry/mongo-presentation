// MongoClient is a common npm library for accessing mongodb
const MongoClient = require("mongodb").MongoClient;

// Set up the url to the database
const dbUrl = "mongodb://localhost:27017/enron";

// Connect to the database
MongoClient.connect(dbUrl, (err, db) => {
  if (err) console.log("Unable to connect to the database:", err);
  else {
    console.log(`Connection successful at ${dbUrl}`);
    const emails = db.collection("emails");

    // in MongoClient use the .project instead of .projection
    // .toArray returns an array of all documents returned by .find({})
    emails.find({}).project({ sender: 1 }).toArray((err, senderArray) => {
      console.log(senderArray);
      db.close();
    });
  }
});
