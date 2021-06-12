import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import LogIn from './Components/LogIn/LogIn';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Book from './Components/Book/Book';
import Header from './Components/Header/Header';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
       <p>Name:{loggedInUser.name}</p>
    <Router>
    <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/login">
            <LogIn></LogIn>
        </Route>
        <PrivateRoute path="/book/:bookId">
            <Book></Book>
        </PrivateRoute>
        <Route path="*">
          <NotFound></NotFound>
        </Route>

      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
