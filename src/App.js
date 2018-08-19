import React, { Component } from 'react';
// import {Layout} from 'antd';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Main from './components/main.js';
import BlogPage from './components/blogmainpage.js';

// const {Header,Footer,Sider,Content} = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Main}/>
            <Route exact path='/blog' component={BlogPage}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
