import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Photo from './Photo';
import * as actionCreators from '../actions/actionCreators';

const PhotoGrid = props => (
  <div className="photo-grid">
    {props.posts.map((post, index) =>
      <Photo
        key={post.id}
        index={index}
        post={post}
        {...props}
      />
    )}
  </div>
);

PhotoGrid.propTypes = {
  posts: React.PropTypes.arrayOf(
    React.PropTypes.object.isRequired
  ).isRequired,
};

const mapStateToProps = state => ({
  posts: state.posts,
  comments: state.comments,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  actionCreators,
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);
