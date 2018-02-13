import React, { Component } from 'react';
import { pure } from 'recompose';

import Vanilla from './Vanilla';

const Pure = pure(Vanilla);

class PureApp extends Component {
  constructor(props) {
    super(props);
    this.state = { fruit: 'aubergine' };
    this.a = this.a.bind(this);
  }
  a() {
    this.setState({ fruit: 'grapefruit' });
  }
  render() {
    return (
      <Pure change={this.a} fruit={this.state.fruit} name="Pure" />
    );
  }
}

export default PureApp;
