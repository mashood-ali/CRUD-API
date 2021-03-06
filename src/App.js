import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Movies from './components/Movies';
import Genres from './components/Genres';
import Register from './components/Register';
import GenreForm from './components/GenreForm';
import PrivateRoute from './components/PrivateRoute';
import MoviesDetails from './components/MoviesDetails';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path={["/", "/movies"]} exact component={Movies} />
          <Route path="/genres" exact component={Genres} />
          <Route path="/register" component={Register} />
          <Route path="/loginuser" component={Login} />
          <PrivateRoute path="/genres/:id" component={GenreForm} />
          <Route path="/movies/details/:id" component={MoviesDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
