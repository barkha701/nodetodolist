const mongoose = require('mongoose');

const uri = "mongodb+srv://admin:admin@cluster0.ttx5s.mongodb.net/test?retryWrites=true&w=majority"
const connectDB = async () => {
    await mongoose.connect(uri, { useUnifiedTopology: true }, { useNewUrlParser: true });
    console.log('mongoDb connected...'); 

}



connectDB();

module.exports = connectDB;  