// increment likes
export const increment = postId => ({
  type: 'INCREMENT_LIKES',
  postId,
});

// add comment
export const addComment = (postId, author, comment) => ({
  type: 'ADD_COMMENT',
  postId,
  author,
  comment,
});

// remove comment
export const removeComment = (postId, commentId) => ({
  type: 'REMOVE_COMMENT',
  postId,
  commentId,
});
