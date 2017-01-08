import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Radium from 'radium';

class Register extends Component {
  getStyles() {
    return {
      root: {
        backgroundColor: '#fff',
        boxShadow: '0 0 0 1px rgba(200, 215, 225, 0.5), 0 1px 2px #e9eff3',
        textAlign: 'center',
        padding: '0 1em 1em',
        margin: '30px 16px',
        '@media (min-width: 400px)': {
          width: '400px',
          margin: '30px auto'
        }
      },
      textField: {
        display: 'block',
        width: '100%',
        fontSize: '.9em'
      },
      label: {
        fontWeight: '600',
        fontSize: '1em',
        lineHeight: '40px'
      },
      button: {
        width: '130px',
        height: '40px',
        marginTop: '30px',
        marginBottom: '15px'
      },
      a: {
        fontSize: '.8em',
        textDecoration: 'none',
        color: 'gray',
        ':hover': {color: '#00bcd4'}
      }
    };
  }

  render() {
    let styles = this.getStyles();
    return (
      <div style={styles.root}>
        <form>
          <TextField style={styles.textField} floatingLabelText="用户名" />
          <TextField style={styles.textField} floatingLabelText="密码" type="password" />
          <TextField style={styles.textField} floatingLabelText="确认密码" type="password" />
          <TextField style={styles.textField} floatingLabelText="邮箱"  />
          <RaisedButton primary={true} style={styles.button} labelStyle={styles.label} type="submit" label="注册" />
        </form>
      </div>
    );
  }
}

export default Radium(Register);
