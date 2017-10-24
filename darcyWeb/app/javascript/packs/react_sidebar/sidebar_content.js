import React from 'react';
import MaterialTitlePanel from './material_title_panel';
import PropTypes from 'prop-types';

const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#2E8B57',
    textDecoration: 'none',
  },
  divider:{
    margin: '8px 0',
    height: 1,
    backgroundColor: '#2E8B57',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: '#2E8B57',
  },
};

 //
const SidebarContent = (props) => {
  const style = props.style ? {...styles.sidebar, ...props.style} : styles.sidebar;

  const links = [];

  return (
    <MaterialTitlePanel title= "Menu" style={style}>
      <div style={styles.content}>
      <a href="admin/login.html" style={styles.sidebarLink}>Administração</a>
      <a href="index/sobre.html" style={styles.sidebarLink}>Sobre</a>
      <div styles={styles.divider} />
      {links}
      </div>
    </MaterialTitlePanel>
  );
}

SidebarContent.propTypes = {
  style: PropTypes.object,
};

export default SidebarContent;
