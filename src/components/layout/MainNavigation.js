/** @format */ 
import { Link } from 'react-router-dom';
import { useContext, } from 'react';

import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/favourites-context';

function MainNavigation() {
  const favouritesCtx = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>AllmeetupsPage</Link>
          </li>
          <li>
            <Link to='/new-meetup'>Add New meetups</Link>
          </li>
          <li>
            <Link to='/favourites'>
              My Favourites
              <span className={classes.badge}>{favouritesCtx.totalFavourites}</span>
              </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
