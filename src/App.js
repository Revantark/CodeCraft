import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Register from './Components/Registration/register';
import Home from './Components/home/home';
import Secret from './Components/secret/secret';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>     
          <Route path="/cs/codeCraft/secret/registers/3.0" component={Secret}/>

            <Route path="/register" component={Register}/>
            <Route path="/" component={Home} />             
            <Route path="*" component={Home} />           
          </Switch>
      </Router>      
    </div>
  );
}


// function Dummy() {
//   return (
//     <div>
//       check
      
//     </div>
//   )
// }



export default App;
