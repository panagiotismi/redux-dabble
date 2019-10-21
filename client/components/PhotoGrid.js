import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Photo from './Photo';
import { increment } from '../actions/actionCreators';

const PhotoGrid = ({ posts, comments, inc }) => (
  <div className="photo-grid">
    {posts.map(post => (
      <Photo
        key={post.id}
        postId={post.id}
        post={post}
        comments={comments[post.code] || []}
        increment={inc}
      />
    ))}
  </div>
);

PhotoGrid.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  inc: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  posts: state.posts,
  comments: state.comments,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ increment }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoGrid);
