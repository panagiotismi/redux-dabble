import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Photo from './Photo';
import Comments from './Comments';
import * as actionCreators from '../actions/actionCreators';

const Single = props => {
  const postId = props.match.params.postId;
  const post = props.posts.find(p => p.code === postId);
  const postComments = props.comments[postId] || [];

  return (
    <div className="single-photo">
      <Photo post={post} comments={postComments} increment={props.increment} />
      <Comments
        postId={postId}
        comments={postComments}
        addComment={props.addComment}
        removeComment={props.removeComment}
      />
    </div>
  );
};

Single.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  comments: PropTypes.objectOf(PropTypes.array.isRequired).isRequired,
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  increment: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  removeComment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  posts: state.posts,
  comments: state.comments,
});

export default connect(mapStateToProps, actionCreators)(Single);
