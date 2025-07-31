import React, { createContext, useState, useEffect } from 'react';

export const FavContext = createContext();

export const FavProvider = ({ children }) => {
  const [favbooks, setFavBooks] = useState(() => {
    const storedFavs = localStorage.getItem('favbooks');
    return storedFavs ? JSON.parse(storedFavs) : [];
  });

  useEffect(() => {
    localStorage.setItem('favbooks', JSON.stringify(favbooks));
  }, [favbooks]);

  return (
    <FavContext.Provider value={{ favbooks, setFavBooks }}>
      {children}
    </FavContext.Provider>
  );
};
