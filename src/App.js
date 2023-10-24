import NavbarTop from './Modules/Navbar/NavbarTop';
import Home from './Modules/Home/Home'
import AboutUs from './Modules/AboutUs/AboutUs'
import ThePokedex from './Modules/ThePokedex/ThePokedex';
import{ BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarTop/>
        <header className="content">
        <Redirect from="/" to="Home" />
          <Switch>
            <Route path='/Home'> <Home/> </Route>
          </Switch>
          <Switch>
            <Route path='/AboutUs'> <AboutUs/> </Route>
          </Switch>
          <Switch>
            <Route path='/ThePokedex'><ThePokedex/> </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
