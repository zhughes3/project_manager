/**
 * The SPA component.
 */
import React, { Component } from 'react';
import logo from './test.svg';
import './App.css';
import Header from './Header';
import PostManager from './PostManager';

import {
    Route,
    HashRouter
} from 'react-router-dom'

const title = 'Project Manager';
const header_items = [
    {"href":"/" , "text":"Home"}
    , {"href":"/posts", "text":"Posts"}
    , {"href":"/resources", "text":"Resources"}
  ];


class App extends Component {
  // every react component needs a render method. this is triggered when the component is (re)rendered
  render() {
    return (
        <HashRouter>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Welcome text={title}/>
                </header>

                <Header items={header_items} />

                <div className="content">
                    <p className="App-intro">
                      To get started, edit <code>src/App.js</code> and save to reload.
                    </p>

                    <Route path="/posts" component={PostManager} />
                </div>
            </div>
        </HashRouter>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text } = this.props; //finds 'text' in this.props
    return (
        <h1 className="App-title">Welcome to {text}</h1>
    );
  }
}

class Post extends Component {
  render() {
    return (
        <p>Hello</p>
        );
  }
}





export default App;
