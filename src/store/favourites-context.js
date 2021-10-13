/** @format */

import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavourites: 0,
  addFavourite: (favoriteMeetup) => {},
  removeFavourite: (meetupId) => {},
  itemIsFavourite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);

  function addFavouriteHandler(favoriteMeetup){
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.concat(favoriteMeetup);
    });
  }

  function removeFavouriteHandler(meetupId){
    setUserFavourites((prevUserFavourites) => {
      return prevUserFavourites.filter(meetup => meetup.id !== meetupId);
    });
  }

  function itemIsFavouriteHandler(meetupId){
    return userFavourites.some(meetup => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler
  };

  return (
   <FavoritesContext.Provider value={context}>
    {props.children}
   </FavoritesContext.Provider>
  );
}

export default FavoritesContext;