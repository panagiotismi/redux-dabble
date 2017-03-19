import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Photo from './Photo';
import { increment } from '../actions/actionCreators';

const PhotoGrid = props => (
  <div className="photo-grid">
    {props.posts.map(post =>
      <Photo
        key={post.id}
        postId={post.id}
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
  { increment },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);
