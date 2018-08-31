import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Main from './components/main.js';
import BlogPage from './components/blogmainpage.js';
import About from './components/about.js';
import WrappedNormalLoginForm from './components/adminPage';
import AdminPage from './components/admin';
import Blogging from './components/blogform';
import Example from './components/blogform';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Main} />
            <Route exact path='/blog/:id' component={BlogPage} />
            <Route exact path='/about' component={About} />
            <Route exact path='/adminpage' component={AdminPage} />
            <Route exact path='/blogpost' component={Blogging} />
            <Route exact path='/admin' component={WrappedNormalLoginForm} />
            <Route exact path='/admin/dashboard' component={Example} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
