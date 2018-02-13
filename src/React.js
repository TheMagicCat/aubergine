import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import Immutable from 'immutable';

import Vanilla from './Vanilla';

class ReactApp extends Component {
  constructor(props) {
    super(props);
    this.state = { data: Immutable.fromJS({ fruit: '' }) };
    this.a = this.a.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }
  a(input) {
    this.setState(({ data }) => ({
      data: data.set('fruit', input),
    }));
  }
  render() {
    return (
      <Vanilla change={this.a} fruit={this.state.data.get('fruit', 'notFound')} name="React App" svgClick={this.props.svgClick} />
    );
  }
}

export default ReactApp;
