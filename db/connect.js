const mongoose = require("mongoose");

uri = "mongodb+srv://aryalrajiv2:RRRproject123@feribranddb.gukgm4l.mongodb.net/FeribrandDB?retryWrites=true&w=majority";

const connectDB = () => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};
module.exports = connectDB;