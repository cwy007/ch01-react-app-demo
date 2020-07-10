import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

/**
 * function - Route
 */
function Index() {
  return <p>This is home page.</p>
}

function About() {
  return <p>This is about page.</p>
}

function Users() {
  return <p>This is users page.</p>
}

/**
 * function - Router App
 * @returns {bollean}
 * @constructor
 */
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </nav>
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  )
}

export default App;
