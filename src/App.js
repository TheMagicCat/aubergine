import React, { Component } from 'react';
import 'normalize.css';
import Sidebar from 'react-sidebar';

import ReactApp from './React';
import Nav from './Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { sidebarOpen: false, sidebarDocked: false };
    this.onSetOpen = this.onSetOpen.bind(this);
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
  }

  componentWillMount() {
    const mql = window.matchMedia('(min-width: 800px)');
    mql.addListener(this.mediaQueryChanged);
    this.setState({ mql, sidebarDocked: mql.matches });
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  onSetOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: this.state.mql.matches, sidebarOpen: false });
  }

  render() {
    const sidebarContent = <Nav />;
    return (
      <Sidebar
        sidebar={sidebarContent}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetOpen}
        docked={this.state.sidebarDocked}
        sidebarClassName="sidebar"
        rootClassName="sidebarRoot"
        contentClassName="sidebarContent"
        overlayClassName="sidebarOverlay"
        styles={{ sidebar: { overflow: 'visible' } }}
      >
        <div className="App">
          <ReactApp svgClick={this.onSetOpen} />
        </div>
      </Sidebar >
    );
  }
}

export default App;
