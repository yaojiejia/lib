// authorModel.js
import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
    titles: [{ type: String }] // Add titles field
});

const Author = mongoose.model("Author", authorSchema);
export default Author;
