import React, {Component} from 'react';
import editor from '../style/editor.css';

export default class Editor extends Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div>
    		<h2>Editor Panel</h2>
      	<textarea className='editor-panel editor-text'></textarea>
    	</div>
    );
  }
}
