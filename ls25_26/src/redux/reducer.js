
const initialState = {
    users: [],
    posts: [],
    comments: [],
    counter: 2
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USERS':
        return { ...state, users: action.payload };
      case 'FETCH_POSTS':
        return { ...state, posts: action.payload };
      case 'FETCH_COMMENTS':
        return { ...state, comments: action.payload };
      case 'MULTIPLY':
        return { ...state, counter: state.counter * 2 };
      case 'DIVIDE':
        return { ...state, counter: state.counter / 2 };
      default:
        return state;
    }
  };
  
  export default reducer;