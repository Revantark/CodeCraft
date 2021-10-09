// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Register from './Components/Registration/register';
import Home from './Components/home/home';


function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
       
          {/* <nav>
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
          </nav> */}

            <Route path="/register">
              <Register />
            </Route>
            <Route path="/" component={Home} />
             
            <Route path="*" component={Home} />
            
            
          </Switch>
      </Router>      
    </div>
  );
}

export default App;
