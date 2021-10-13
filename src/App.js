/** @format */

import { Route, Switch } from "react-router-dom";

import AllmeetupsPage from "./pages/Allmeetups";
import FavouritesPage from "./pages/Favourites";
import NewmeetupsPage from "./pages/Newmeetups";
import Layout from "./components/layout/layout";

function App() {
  return (
    <Layout>
      
      <Switch>
        <Route path="/" exact>
          <AllmeetupsPage />
        </Route>
        <Route path="/favourites">
          <FavouritesPage />
        </Route>
        <Route path="/new-meetup">
          <NewmeetupsPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
