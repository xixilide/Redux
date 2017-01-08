import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Radium from 'radium';
import axios from 'axios'
class Login extends Component {
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
  handleSubmit(e){
     e.preventDefault();
     let username=this.refs.username.getValue();
     let password = this.refs.password.getValue();
     axios.post('http://localhost:4000/auth/login', { username, password })
       .then(response => {
         console.log(response.data.token)
       })
       .catch(error => {
         console.log(error.response);
       });
  }
  render() {
    let styles = this.getStyles();
    return (
      <div style={styles.root}>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <TextField style={styles.textField} floatingLabelText="用户名" ref="username"/>
          <TextField style={styles.textField} floatingLabelText="密码" type="password" ref="password"/>
          <RaisedButton primary={true} style={styles.button} labelStyle={styles.label} type="submit" label="登录" />
        </form>
      </div>
    );
  }
}

export default Radium(Login);
