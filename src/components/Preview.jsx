import React, {Component} from 'react';
import preview from '../style/preview.css';

var marked = require('marked');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: true,
  sanitize: true,
  smartLists: true,
  smartypants: true,
  code: true,
  lang: true
});

export const Preview = (props) => {
	const content = {
		__html: marked(props.data)
	}

	return (
  	<div style={{flexBasis: '750px'}}
  		className="preview-panel" 
  		dangerouslySetInnerHTML={content}>
  	</div>
  );
}