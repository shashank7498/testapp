
// connect to mongodb  atlas
const mongoose = require('mongoose');
const wallet = require('./schema/wallet');

mongoose.connect('mongodb+srv://shashank:shashank@cluster0.brjev0z.mongodb.net/wallet',
    {useNewUrlParser: true, useUnifiedTopology: true,
        });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.info("Connected to MongoDB Atlas");
});
 // export the connection
module.exports = {db,schema:{wallet}};


