import React, { useContext } from 'react';
import { FavContext } from '../context/FavContext';
import { Link } from 'react-router-dom'; // ✅ import Link

export default function BookCard({ book }) {
  const { favbooks, setFavBooks } = useContext(FavContext);

  const addToFav = () => {
    const alreadyAdded = favbooks.find(item => item.id === book.id);
    if (!alreadyAdded) {
      setFavBooks([...favbooks, book]);
    }
  };

  return (
    <div className="book-card">
      <Link to={`/book/${book.id}`}> {/* ✅ Navigate to details page */}
        <img
          src={book.volumeInfo?.imageLinks?.thumbnail}
          alt={book.volumeInfo?.title}
        />
              <h3>
        {book.volumeInfo?.title.length > 20
          ? `${book.volumeInfo.title.slice(0, 20)}...`
          : book.volumeInfo.title}
      </h3>

      </Link>

      <button onClick={addToFav} className='favbtn'>Add to Fav ❤️</button>
    </div>
  );
}
