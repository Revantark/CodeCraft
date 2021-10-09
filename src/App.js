import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Register from './Components/Registration/register';
import CCHome from './Components/CC-Home/CC_Home';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
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
