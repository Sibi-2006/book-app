import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookSearch from './BookSearch';
import Book from './Book';
import About from './About';
import FavBook from './FavBook';
import { FavProvider } from './context/FavContext';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState('');
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}`);
        setBookList(res.data.items || []);
      } catch (err) {
        console.log(err.message);
      }
    };

    if (search) fetchBooks();
  }, [search]);

  return (
    <FavProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={
              <BookSearch 
                search={search}
                setSearch={setSearch}
                bookList={bookList}
              />
            } />
            <Route path='/book/:id' element={<Book />} />
            <Route path='/about' element={<About />} />
            <Route path='/favbooks' element={<FavBook />} />
          </Routes>
        </BrowserRouter>
      </div>
    </FavProvider>
  );
}
export default App;