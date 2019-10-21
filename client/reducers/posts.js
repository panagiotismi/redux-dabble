const posts = (state = [], action) => {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      return state.map(post =>
        post.id === action.postId ? { ...post, likes: post.likes + 1 } : post
      );
    default:
      return state;
  }
};

export default posts;
