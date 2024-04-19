import Book from '../db/bookModel.js';
import Author from '../db/authorModel.js';
import Genre from '../db/genreModel.js';

export const getBookByISBN = async (req, res) => {
    const { isbn } = req.params; // Extract the ISBN from request parameters
    try {
        const book = await Book.findOne({ isbn }).select('title author genre');

        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        const authorId = book.author; // Assuming author is referenced by _id
        const genreId = book.genre; // Assuming genre is referenced by _id

        const author = await Author.findById(authorId).select('name');
        const genre = await Genre.findById(genreId).select('name');

        if (!author || !genre) {
            return res.status(404).json({ message: 'Author or genre not found' });
        }

        // Construct the response object
        const bookDetails = {
            title: book.title,
            author: author,
            genre: genre
        };

        res.json(bookDetails);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};
export const getAuthor = async (req, res) => {
    const { name } = req.params; // Extract the author name from request parameters
    try {
        const author = await Author.findOne({ name }).select('name titles');
        res.json(author);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};
export const getGenre = async (req, res) => {
    const { name } = req.params; // Extract the genre from request parameters
    try {
        const genre = await Genre.findOne({ name }).select('name titles');
        res.json(genre);

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};