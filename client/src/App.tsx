import './App.scss';
import {
  BrowserRouter as Router, 
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Home } from './components/Home';
import { Navbar } from './components/Navbar';
import {Reference} from './Reference/Reference';

function App() {
  return (
    <Router>
      <h1 className="title">React Playground</h1>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/references" component={Reference} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
