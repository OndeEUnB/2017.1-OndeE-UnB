import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from '../../src';
import MaterialTitlePanel from './material_title_panel';
import SidebarContent from './sidebar_content';

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
  },
  content: {
    padding: '16px',
  },
};

const mql = window.matchMedia(`(min-width: 800px)`);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mql: mql,
      docked: false,
      open: false,
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, docked: mql.matches});
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  onSetOpen(open) {
    this.setState({open: open});
  }

  mediaQueryChanged() {
    this.setState({
      mql: mql,
      docked: this.state.mql.matches,
    });
  }

  toggleOpen(ev) {
    this.setState({open: !this.state.open});

    if (ev) {
      ev.preventDefault();
    }
  }

  render() {
    const sidebar = <SidebarContent />;

    const contentHeader = (
      <span>
        {!this.state.docked &&
         <a onClick={this.toggleOpen.bind(this)} href="#" style={styles.contentHeaderMenuLink}>=</a>}
        <span> Responsive React Sidebar</span>
      </span>);

    const sidebarProps = {
      sidebar: sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen,
    };

    return (
      <Sidebar {...sidebarProps}>
        <MaterialTitlePanel title={contentHeader}>
          <div style={styles.content}>
            <p>
                (which is currently {'' + this.state.docked}).
            </p>
            <p>
            {this.state.docked ? 'hidden' : 'shown'}
              {!this.state.docked && 'not'} visible.
            </p>
          </div>
        </MaterialTitlePanel>
      </Sidebar>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('navbar'));
