
const initialState = {
  userId : '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USER_ID': {
      console.log('user id reducer');
      return {...state, userId: action.payload};
    }

    default:
  }
  return state;
}
