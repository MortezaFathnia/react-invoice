import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import UserState from './context/user/UserState';
import AlertState from './context/alert/AlertState';
import Home from './components/pages/Home';
import './App.css';

function App() {
  return (
    <UserState>
      <AlertState>
        <Router>
          <div className="App">
          <Switch>
                <Route exact path='/' component={Home} />
              </Switch>
            <ToastContainer rtl position="bottom-center" />
          </div>
        </Router>
      </AlertState>
    </UserState>
  );
}

export default App;
