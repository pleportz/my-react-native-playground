const initialState = {
  list: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'ADD_COUNT':
      const name = action.payload.name;
      return {
        ...state,
        list: {
          ...state.list,
          [name]: {
            name,
            count: 0,
          },
        },
      };
    default:
      return state;
  }
}
