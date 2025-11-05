import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext) 

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    useEffect (() =>{
        const storedFavs =  localStorage.getItem("favorites")

        if(storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(() =>{
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addtoFavs = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const rmvfromfavs = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFav = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addtoFavs,
        rmvfromfavs,
        isFav
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}