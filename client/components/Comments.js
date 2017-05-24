import React from 'react';
import PropTypes from 'prop-types';

const Comments = ({ postId, comments, addComment, removeComment }) => {
  let [form, author, commentText] = [null, null, null];

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(postId, author.value, commentText.value);
    form.reset();
  };

  return (
    <div>
      {/* existing comments  */}
      {comments.map(comment => (
        <div className="comment" key={comment.id}>
          <p>
            <strong>{comment.user}</strong>
            {comment.text}
            <button
              className="remove-comment"
              onClick={() => removeComment(postId, comment.id)}
            >
              <i className="fa fa-times" />
            </button>
          </p>
        </div>
      ))}
      {/* form for adding comments */}
      <form
        className="comment-form"
        ref={f => (form = f)}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="author"
          ref={input => (author = input)}
        />
        <input
          type="text"
          placeholder="comment"
          ref={input => (commentText = input)}
        />
        <input type="submit" hidden />
      </form>

    </div>
  );
};

Comments.propTypes = {
  postId: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired,
  addComment: PropTypes.func.isRequired,
  removeComment: PropTypes.func.isRequired,
};

export default Comments;
