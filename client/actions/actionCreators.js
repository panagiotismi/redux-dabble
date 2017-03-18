// increment likes
export const increment = index => ({
  type: 'INCREMENT_LIKES',
  index
});

// add comment
export const addComment = (postId, author, comment) => ({
  type: 'ADD_COMMENT',
  postId,
  author,
  comment
});

// remove comment
export const removeComment = (postId, index) => ({
  type: 'REMOVE_COMMENT',
  postId,
  index
});
