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
        textAlign: 'center',
        position:'relative'
      },
      logo: {
        fontWeight: '600',
        fontSize: '3rem',
        letterSpacing: '-1px',
        lineHeight: '8.4rem',
        color: '#fff'
      },
      login:{
        fontWeight: '400',
        fontSize: '2rem',
        lineHeight: '8.4rem',
        color: '#fff',
        position:'absolute',
        top:'10px',
        right:'40px'
      },
      register:{
        fontWeight: '400',
        fontSize: '2rem',
        letterSpacing: '-1px',
        lineHeight: '8.4rem',
        color: '#fff',
        position:'absolute',
        top:'10px',
        right:'90px'
      },
      a: {
        textDecoration: 'none'
      }
    };
    return (
      <StyleRoot style={styles.root}>
        <header style={styles.header}>
          <Link to='/' style={styles.a}><div style={styles.logo}>西西里的美丽传说</div></Link>
          <Link to='/login' style={styles.a}><div style={styles.login}>登录</div></Link>
          <Link to='/register' style={styles.a}><div style={styles.register}>注册</div></Link>
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
