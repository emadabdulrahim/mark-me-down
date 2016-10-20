import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var marked = require('marked');
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: true,
  sanitize: true,
  smartLists: true,
  smartypants: true
});


class App extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Mark Me Down</h2>
          {marked('I am using __markdown__ **yahoo**')}
        </div>
        <p className="App-intro">
          {() => 'To get started, edit <code>src/App.js</code> and save to reload.'}
        </p>
      </div>
    );
  }
}

export default App
