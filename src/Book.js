import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './Book.css';
import { FavContext } from './context/FavContext';

export default function Book() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { favbooks, setFavBooks } = useContext(FavContext);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
        setBook(res.data);
      } catch (err) {
        setError('Failed to load book');
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;
  if (!book) return <h2>Book not found.</h2>;

  const BK = book.volumeInfo;
  const isFav = favbooks.some(b => b.id === book.id);

  const addToFav = () => {
    if (!isFav) {
      const updated = [...favbooks, book];
      setFavBooks(updated);
      localStorage.setItem('favbooks', JSON.stringify(updated));
    }
  };

  const removeFromFav = () => {
    const updated = favbooks.filter(b => b.id !== book.id);
    setFavBooks(updated);
    localStorage.setItem('favbooks', JSON.stringify(updated));
  };

  return (
    <div className="book-detail">
      <div>
        <h1>{BK.title}</h1>

      {isFav ? (
        <button onClick={removeFromFav} className="remove">Remove from Fav 🗑️</button>
      ) : (
        <button onClick={addToFav} className="about">Add to Fav ❤️</button>
      )}
      </div>
      <br />

      <img src={BK.imageLinks?.thumbnail} alt={BK.title} />
      <p><strong>Authors:</strong> {BK.authors?.join(', ') || 'Unknown'}</p>
      <p><strong>Publisher:</strong> {BK.publisher || 'Unknown'}</p>
      <p><strong>Description:</strong> {BK.description || 'No description available'}</p>
      <a href={BK.previewLink} target="_blank" rel="noreferrer" className='link'>🔗 Preview Book</a>
    </div>
  );
}
