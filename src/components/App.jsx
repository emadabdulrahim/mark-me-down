import React, { Component } from 'react';
import Container from './Container';
import Editor from './Editor';
import Preview from './Preview';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: {},
      page: 1,
      theme: 'light'
    }
  }
  render() {
    return (
      <Container className='app-container'>
        <Editor className='editor-panel'></Editor>
        <Preview className='preview-panel'></Preview>
      </Container>
    );
  }
}

export default App
