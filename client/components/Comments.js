import React from 'react';
import PropTypes from 'prop-types';

const Comments = props => (
  <div>
    {props.comments.map(c => (
      <div className="comment">
        <p>
          <strong>{c.user}</strong>
          {c.text}
          <button className="remove-comment">
            <i className="fa fa-times" />
          </button>
        </p>
      </div>
    ))}
    <form ref="commentForm" className="comment-form">
      <input type="text" ref="author" placeholder="author" />
      <input type="text" ref="comment" placeholder="comment" />
      <input type="submit" hidden />
    </form>
  </div>
);

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired,
};

export default Comments;
