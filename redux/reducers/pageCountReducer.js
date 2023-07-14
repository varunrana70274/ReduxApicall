const initialState = {
  pageCount: 1,
};

export default function PageCountReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_COUNT': {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
}

export const updateCount = data => {
  return {
    type: 'UPDATE_COUNT',
    payload: data,
  };
};
