import React from 'react';
import BookCard from './components/BookCard';
import { useNavigate } from 'react-router-dom'; // ✅ useNavigate instead of Navigate

export default function BookSearch({ search, setSearch, bookList }) {
  const navigate = useNavigate(); // ✅ get the navigate function

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} className='search'>
        <input
          type="text"
          placeholder="🔍 Search any kind of books you want 📖"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className='btn'>

          <button onClick={() => navigate('/favbooks')} className='about'>Fav Books</button>
        <button onClick={() => navigate('/about')} className='about'>About</button> {/* ✅ corrected */}
        </div>
        
      </form>

      <div className="book-container">
        {bookList.length > 0 ? (
          bookList.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <div className='marquee-wrapper'>
          <p className='marquee-text'>No books found. Try searching something else 📚</p>
          </div>
        )}
      </div>
    </div>
  );
}
