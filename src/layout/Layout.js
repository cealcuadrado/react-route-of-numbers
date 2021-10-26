import './Layout.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import One from '../pages/one/One';
import Three from '../pages/three/Three';
import Two from '../pages/two/Two';
import Home from '../pages/home/Home';

function Layout() {
  return (
    <div className="layout">
      <Router>
        <div class="row">
          <div class="col-12 col-lg-4">
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/one">One</Link>
            </div>
            <div>
              <Link to="/two">Two</Link>
            </div>
            <div>
              <Link to="/three">Three</Link>
            </div>
          </div>
          <div class="col-12 col-lg-8">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/one">
                <One />
              </Route>
              <Route exact path="/two">
                <Two />
              </Route>
              <Route exact path="/three">
                <Three />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default Layout;
