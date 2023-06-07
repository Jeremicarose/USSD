const mongoose = require('mongoose');
const url = process.env.MONGO_URI;
async function connectDB() {
    try{
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('url', url);
    }catch(err){
        console.log(err);
    }
}
module.exports = connectDB;