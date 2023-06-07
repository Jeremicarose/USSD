const mongoose = require('mongoose');
const url = "mongodb+srv://arosejeremic5:xNfdiOM99GTC26UH@cluster0.dc7ng0l.mongodb.net/arosejeremic5@admin?retryWrites=true&w=majority"
// "mongodb+srv://arosejeremic5:xNfdiOM99GTC26UH@cluster0.dc7ng0l.mongodb.net/celoussd?retryWrites=true&w=majority";
async function connectDB() {
    try{
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });
        console.log('MongoDB connected');
    }catch(err){
        console.log(err);
    }
}
module.exports = connectDB;