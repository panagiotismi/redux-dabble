import React from 'react';
import PropTypes from 'prop-types';
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
        comments={props.comments[post.code] || []}
        increment={props.increment}
      />
    )}
  </div>
);

PhotoGrid.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired,
  increment: PropTypes.func.isRequired,
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
