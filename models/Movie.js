const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    director_id: Schema.Types.ObjectId,
    title:{
        type: String,
        required: [true, 'title alanı zorunlu'],
        maxlength: [15,"title 15 karakter uzun olamaz"],
        minlength: [2,'karakter 1den fazla olacak']
    },
    category: String,
    country: String,
    year: Number,
    imdb_score: Number,
    createdAt:{
        type:Date,
        default:Date.now
    }
    
});

module.exports = mongoose.model('movie',MovieSchema);