const mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect('mongodb+srv://movie-user:abcd1234@movie-api.ulil3.mongodb.net/Movie-api?retryWrites=true&w=majority');
    mongoose.connection.on("open",() =>{
        console.log('mongoDB: Connected');
    });
    mongoose.connection.on('error',(err) => {
        console.log("MongoDB ERROR"+err);
    });

    mongoose.Promise = global.Promise;
};