import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ApartmentDetails from './components/Home/ApartmentDetails/ApartmentDetails';

function App() {
  return (
    <div className="main">
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/apartment/:id">
              <ApartmentDetails />
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
