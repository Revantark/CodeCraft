// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Register from './Components/Registration/register';
import CCHome from './Components/CC-Home/CC_Home';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <CCHome />
            </Route>
            <Route path="*">
              <CCHome />
            </Route>
          </Switch>
        </div>
      </Router>      
    </div>
  );
}

export default App;
