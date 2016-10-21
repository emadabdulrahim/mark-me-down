import React, { Component } from 'react';
import {Container} from './Container';
import Editor from './Editor';
import {Preview} from './Preview';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: '',
      page: 1,
      theme: 'light'
    }
  }

  updateData = (data) => {
    this.setState({data});
  }
  render() {
    return (
      <Container className='app-container'>
        <Editor className='editor-panel' updateData={this.updateData}></Editor>
        <Preview className='preview-panel' data={this.state.data}></Preview>
      </Container>
    );
  }
}

export default App
