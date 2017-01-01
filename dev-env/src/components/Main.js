import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Radium, { StyleRoot } from 'radium';
import { Link } from 'react-router';


class Main extends Component {
  getChildContext() {
    return {
      muiTheme: getMuiTheme()
    };
  }

  render() {
    let styles = {
      root: {
        fontFamily: 'sans-serif'
      },
      header: {
        backgroundColor: '#00bcd4',
        height: '8.4rem',
        width: '100%',
        textAlign: 'center'
      },
      logo: {
        fontWeight: '600',
        fontSize: '3rem',
        letterSpacing: '-1px',
        lineHeight: '8.4rem',
        color: '#fff'
      },
      a: {
        textDecoration: 'none'
      }
    };
    return (
      <StyleRoot style={styles.root}>
        <header style={styles.header}>
          <Link to='/' style={styles.a}><div style={styles.logo}>西西里的美丽传说</div></Link>
        </header>
        { React.cloneElement(this.props.children, this.props) }
      </StyleRoot>
    );
  }
}

Main.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default Radium(Main);
