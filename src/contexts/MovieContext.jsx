import { createContext, useContext, useEffect, useState } from "react";

export const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {

  const [favorites, setFavorites] = useState(() => {
    const storedFavs = localStorage.getItem("favorites");
    return storedFavs ? JSON.parse(storedFavs) : [];
  });

  // useEffect(() => {
  //   const storedFavs = localStorage.getItem("favorites");
  //   console.log("Loaded from localStorage:", storedFavs);
  //   if (storedFavs) {
  //     setFavorites(JSON.parse(storedFavs));
  //     alert("Loaded favorites: " + storedFavs);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    console.log("Saving to localStorage:", favorites);
  }, [favorites]);

  const addToFavs = (movie) => {
    setFavorites(prev => [...prev, movie]);
  }

  const removeFromFavs = (movieId) => {
    setFavorites(prev => prev.filter(movie => movie.id !== movieId));
  }

  const isFavorite = (movieId) => {
    return favorites.some(movie => movie.id === movieId);
    // if === is true 
    // maps - returns the matched object
    // some - returns just a boolean value 
  }

  const contextData = {
    favorites,
    addToFavs,
    removeFromFavs,
    isFavorite
  }

  return (
    <MovieContext.Provider value={contextData}>
      {children}
    </MovieContext.Provider>
  )
}

