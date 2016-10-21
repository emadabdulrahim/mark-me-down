import React, {Component} from 'react';
import editor from '../style/editor.css';

export default class Editor extends Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.updateContent = this.updateContent.bind(this);
  }

  updateContent(event) {
  	this.props.updateData(event.target.value);
  }
  render() {
    return (
    	<div style={{flexBasis: '750px'}}>
    		<h2>Editor Panel</h2>
      	<textarea className='editor-panel editor-text' onChange={this.updateContent}></textarea>
    	</div>
    );
  }
}
