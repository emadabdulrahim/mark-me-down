import React, {Component} from 'react';

export default class Container extends Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	{this.props.children}
      </div>
    );
  }
}
