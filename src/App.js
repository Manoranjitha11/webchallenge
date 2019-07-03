import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Albums from './components/Albums';
import Users from './components/Users';
import Photos from './components/Photos';

function App() {
  return (
    <Router>
      <div>
          <div className="navOuter">
            <div>
              <ul>
                <li>
                  <Link style={{ textDecoration: 'none', color: '#000', border: '1px solid gray', borderRadius: '4px', padding: '10px 30px 10px 20px' }} to="/albums">Show All Albums</Link>
                </li>
                <li>
                  <Link style={{ textDecoration: 'none', color: '#000', border: '1px solid gray', borderRadius: '4px', padding: '10px 30px 10px 20px' }} to="/photos">Show All Photos</Link>
                </li>
              </ul>
            </div>
            <div>
              <Users />
            </div>
          </div>
          <Switch>
            <Route path="/albums/:userId" component={Albums} />
            <Route path="/albums" component={Albums} />
            <Route path="/photos" component={Photos} />
            <Route path="/photos/:albumId" component={Photos} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
