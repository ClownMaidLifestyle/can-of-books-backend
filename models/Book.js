const mongoose = require("mongoose");
const {Schema} = mongoose;
require("dotenv").config();
mongoose.connect(process.env.DATABASE_URL);

const bookSchema = new Schema({
    title: String,
    description: String,
    Status: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;