import {createContext,useState} from 'react';

export const FavoritesContext= createContext({
    ids:[],
    addFavorite:(id)=>{},
    removeFavorite:(id)=>{},
});

const FavoritesContextProvider=({children})=>{
    const [favoritesMealIds,setFavoritesMealIds]=useState([])
    const addFavorite=(id)=>{
        setFavoritesMealIds((currentFavIds)=>[...currentFavIds,id])
    }
    const removeFavorite=(id)=>{
        setFavoritesMealIds((currentFavIds) =>currentFavIds.filter((mealId) => mealId !== id));
    }
    const value={
        ids:favoritesMealIds,
        addFavorite:addFavorite,
        removeFavorite:removeFavorite,
    }
    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}
export default FavoritesContextProvider