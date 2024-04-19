import Book from '../db/bookModel.js';
import Author from '../db/authorModel.js';
import Genre from '../db/genreModel.js';

export const createBook = async (req, res) => {
    const { isbn, title, authorName, genreName } = req.body;
    console.log(authorName);
    try {
        // If no author is provided, return an error
        if (!authorName) {
            return res.status(400).json({ message: 'Author name is required' });
        }

        // If no genre is provided, return an error
        if (!genreName) {
            return res.status(400).json({ message: 'Genre name is required' });
        }

        // Find or create the author
        let author = await Author.findOne({ name: authorName });
        if (!author) {
            author = new Author({ name: authorName });
            console.log(author);
            await author.save();
        }

        // Find or create the genre
        let genre = await Genre.findOne({ name: genreName });
        if (!genre) {
            genre = new Genre({ name: genreName });
            await genre.save();
        }

        // Create the book with the isbn, title, author and genre
        const newBook = new Book({
            isbn,
            title,
            author: author._id,
            genre: genre._id
        });
        // Save the book
        await newBook.save();
        // Add the book id to the 
        author.books.push(newBook._id);
        genre.books.push(newBook._id);
        author.titles.push(title);
        genre.titles.push(title);
        await author.save();
        await genre.save();
        res.status(201).json('Book Added Successfully');
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};
