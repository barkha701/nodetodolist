const mongoose = require('mongoose');

const user = new mongoose.Schema({
    item : {
        type : String
    }
});

module.exports = user = mongoose.model('user', user);