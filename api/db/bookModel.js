import mongoose from "mongoose";
//book schema

const bookSchema = new mongoose.Schema({
    isbn: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true},
    genre: { type: mongoose.Schema.Types.ObjectId, ref: 'Genre', required: true}
});

const Book = mongoose.model("Book", bookSchema);
export default Book;
