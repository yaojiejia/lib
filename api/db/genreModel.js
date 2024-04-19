// genreModel.js
import mongoose from "mongoose";

const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
    titles: [{ type: String }] // Add titles field
});

const Genre = mongoose.model("Genre", genreSchema);
export default Genre;
