const Mongo = require('mongodb').MongoClient;
const url = `mongodb://localhost`;

//https://docs.mongodb.com/manual/indexes/
// how to index a mongo database
module.exports = {
  getAllReviews(cb){
    Mongo.connect(url, { useUnifiedTopology: true }, (err,client) =>{
      if(err){
        console.log(err);
        cb(err);
      } else {
       const db = client.db('sdc')
       const collection = db.collection('reviews');

       collection.find().toArray((err,results) =>{
          if(err) {
            cb(err);
          } else {
            cb(null,results);
          }
        })
      }
    })
  },
  postReview(req, cb) {
    Mongo.connect(url, { useUnifiedTopology: true }, (err, client) =>{
      if (err) {
        cb(err);
      } else {
        const db = client.db('sdc')
        const collection = db.collection('reviews');

        collection.insertOne(req.body, (err, results) =>{
          if(err) {
            console.log('Error Posting');
            cb(err);
          } else {
            cb(null, results);
          }
        })
      }
    })
  },
  getSomeReviews(req, cb) {
    Mongo.connect(url, { useUnifiedTopology: true }, (err,client) =>{
      if(err) {
        cb(err);
      } else {
        const db = client.db('sdc')
        const collection = db.collection('reviews');

        let toFind = req.body;
        console.log('To Find:', toFind);
        collection.find(toFind).toArray((err, results) =>{
          if(err) {
            cb(err);
          } else {
            cb(null,results);
          }
        })

      }
    })
  },
  deleteReview(req, cb){
    Mongo.connect(url, { useUnifiedTopology: true }, (err,client) =>{
      if(err){
        cb(err);
      } else {
        let toDelete = req.params;
        collection.deleteOne(toDelete, (err,results) =>{
          if(err) throw err;
          cb(null, results);
        })
      }
    })

  }
}