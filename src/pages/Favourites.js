import {useContext } from 'react';

import FavoritesContext from '../store/favourites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavouritesPage(){
  const favouritesCtx = useContext(FavoritesContext);
 
  let content;
  if(favouritesCtx.totalFavourites === 0){
    content = <p>You got no favourites. Add some, Say swear</p>
  }else{
    content =  <MeetupList  meetups= {favouritesCtx.favorites} />
  }
  return <section>
    <h1>My Favourites </h1>
    {content}
    </section>
}

export default FavouritesPage;