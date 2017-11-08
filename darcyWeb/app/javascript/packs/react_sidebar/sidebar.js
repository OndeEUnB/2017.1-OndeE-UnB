import React from 'react';
import Sidebar from 'react-sidebar';

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
    var sidebarContent =
    <form class="form-inline">
        < link_to '<i class="ion-android-happy">Sobre</i> '.html_safe, about_path, class: 'btn btn-login btn-about' >
    </form>;

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
