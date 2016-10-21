import React, {Component} from 'react';

export const Container = (props) => {
	return (
		<div style={{display: 'flex', justifyContent: 'space-around'}}>
      {props.children}
    </div>
	);
}