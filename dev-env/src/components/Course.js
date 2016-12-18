import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import Radium from 'radium';
import { Link } from 'react-router';

class Course extends Component {
  getStyles() {
    return {
      root: {
        margin: '0 2rem 4rem',
        flexBasis: '100%',
        '@media (min-width: 600px)': {
          flexBasis: 'calc(50% - 4rem)'
        }
      },
      imgWrap: {
        position: 'relative'
      },
      titWrap:{
        width:'100%',
        height:'10%',
        lineHight:'10%',
        paddingLeft:'0.2vw',
        backgroundColor:'rgba(0,0,0,0.3)',
        zoom:'2'
      },
      img: {
        width: '100%',
        height:'100%',
        display: 'block',
        zoom:'3'
      }
    };
  }

  render() {
    const { course } = this.props;
    let styles = this.getStyles();
    return (
      <div style={styles.root}>
        <Card>

          <div style={styles.imgWrap}>
            <Link to={`/view/${course.id}`}>
              <img src={course.image} alt={course.name} style={styles.img} />
            </Link>
          </div>
            <div style={styles.titWrap}><h3>{course.name}</h3></div>
        </Card>
      </div>
    );
  }
}

export default Radium(Course);
