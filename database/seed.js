const fs = require('fs');

const createReview = require('./createReviews.js').createReviews;
let id = -1;

module.exports = {

  csv (writer,amt,cb){
    writer.pipe(fs.createWriteStream('sdc.csv'));
    console.log('Generating CSV...');
    let i = amt;
    let write=()=> {
      let ok = true;
      do {
        i -= 1;
        id += 1;
        console.log(i);
        let review = createReview(id);

        review.reviews.map((rev)=>{
          if (i === 0) {
            writer.write(rev,cb);
          } else {
            // see if we should continue, or wait
            ok = writer.write(rev);
          }
        })

      } while (i > 0 && ok);
        if (i > 0) {
          // write some more once it drains
          writer.once('drain', write);
        }
      }
        write();
    }

}










