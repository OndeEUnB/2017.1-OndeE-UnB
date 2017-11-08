import React from 'react';
import Sidebar from 'react-sidebar';

const defaultStyles = {
root: {
   position: 'absolute',
   top: 0,
   left: 0,
   right: 0,
   bottom: 0,
   overflow: 'hidden',
 },
 sidebar: {
   zIndex: 2,
   position: 'absolute',
   top: 0,
   bottom: 0,
   transition: 'transform .3s ease-out',
   WebkitTransition: '-webkit-transform .3s ease-out',
   willChange: 'transform',
   overflowY: 'auto',
 },
 content: {
   position: 'absolute',
   top: 0,
   left: 0,
   right: 0,
   bottom: 0,
   overflowY: 'scroll',
   WebkitOverflowScrolling: 'touch',
   transition: 'left .3s ease-out, right .3s ease-out',
 },
 overlay: {
   zIndex: 1,
   position: 'fixed',
   top: 0,
   left: 0,
   right: 0,
   bottom: 0,
   opacity: 0,
   visibility: 'hidden',
   transition: 'opacity .3s ease-out, visibility .3s ease-out',
   backgroundColor: 'rgba(0,0,0,.3)',
 },
 dragHandle: {
   zIndex: 1,
   position: 'fixed',
   top: 0,
   bottom: 0,
 },
};

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen: function(open) {
    this.setState({sidebarOpen: open});
  }

  render: function() {
    {
       const sidebarStyle = {...defaultStyles.sidebar, ...this.props.styles.sidebar};
       const contentStyle = {...defaultStyles.content, ...this.props.styles.content};
       const overlayStyle = {...defaultStyles.overlay, ...this.props.styles.overlay};
       const rootProps = {
         className: this.props.rootClassName,
         style: {...defaultStyles.root, ...this.props.styles.root},
         role: "form-inline",

    var sidebarContent =
    <form class="form-inline">
        < link_to '<i class="ion-android-happy">Sobre</i> '.html_safe, about_path, class: 'btn btn-login btn-about' >
    </form>

    return (
      <Sidebar sidebar={sidebarContent}
               open={this.state.sidebarOpen}
               onSetOpen={this.onSetSidebarOpen}>
        <b>Main content</b>
      </Sidebar>
    );
  }
};

export default App;
