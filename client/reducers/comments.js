import generateSafeId from 'generate-safe-id';

const postComments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        {
          id: generateSafeId(),
          user: action.author,
          text: action.comment,
        }
      ];
    case 'REMOVE_COMMENT':
      return state.filter(comment => comment.id !== action.commentId);
    default:
      return state;
  }
};

const comments = (state = [], action) => {
  if (typeof action.postId === 'undefined') {
    return state;
  }
  return {
    ...state,
    [action.postId]: postComments(state[action.postId], action)
  };
};

export default comments;
