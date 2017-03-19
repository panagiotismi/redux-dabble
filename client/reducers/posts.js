const posts = (state = [], action) => {
  switch (action.type) {
    case 'INCREMENT_LIKES': {
      const postId = action.postId;
      return state.map(post => (
        post.id === postId ?
        { ...post, likes: post.likes + 1 } :
        post
      ));
    }
    default:
      return state;
  }
};

export default posts;
