import React, { useContext } from 'react';
import { FavContext } from './context/FavContext'; // ✅ Correct path
import "./fav.css"
export default function FavBook() {
  const { favbooks } = useContext(FavContext); // ✅ useContext instead of useFav

  return (
    <div className='fav_con'>
      <h2 className='fav'>Favourite Books</h2>
      {favbooks.length === 0 ? (
        <p>No favourites added yet.</p>
      ) : (
        <ul>
          {favbooks.map(book => (
            <li key={book.id}>
              {book.volumeInfo?.title || 'No title'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
