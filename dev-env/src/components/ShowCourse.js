import React, { Component } from 'react';

// import courses from '../data/courses';
import Course from './Course';
import CommentBox from './CommentBox';

class ShowCourse extends Component {
  getStyles() {
    return {
      top: {
        backgroundColor: '#00bcd4',
        paddingTop: '3rem',
        paddingBottom: '1rem'
      },
      container: {
        maxWidth: '900px',
        margin: '0 auto',
      }
    };
  }

  render() {
    const { courseId } = this.props.params;
    const comments = this.props.comments[courseId];//从store中提取评论
    const index = this.props.courses.findIndex((c) => c.id === courseId);
    const selectedCourse = this.props.courses[index];

    let styles = this.getStyles();
    return (
      <div>
        <div style={styles.top}>
          <div style={styles.container}>
            <Course course={selectedCourse} comments={comments} increment={this.props.increment} />
          </div>

            <CommentBox courseComments={comments} {...this.props}/>
        </div>
      </div>
    );
  }
}

export default ShowCourse;
