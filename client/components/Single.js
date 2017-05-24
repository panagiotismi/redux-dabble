import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Photo from './Photo';
// import Comments from './Comments';
import * as actionCreators from '../actions/actionCreators';

const Single = (props) => {
  const postId = props.match.params.postId;
  const post = props.posts.find(p => p.code === postId);
  return (
    <div className="single-photo">
      <Photo
        key={postId}
        postId={postId}
        post={post}
        comments={props.comments}
        increment={props.increment}
      />
    </div>
  );
};

Single.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired,
  comments: PropTypes.objectOf(
    PropTypes.array.isRequired
  ).isRequired,
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  posts: state.posts,
  comments: state.comments,
});

export default connect(mapStateToProps, actionCreators)(Single);
