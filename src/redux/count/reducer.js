const initialState = {
  current: null,
  list: {},
};

export default function(state = initialState, action) {
  let name;
  switch (action.type) {
    case 'ADD_COUNT':
      name = action.payload.name;
      return {
        ...state,
        list: {
          ...state.list,
          [name]: {
            name,
            count: 1,
          },
        },
      };

    case 'INCREMENT_BY_ONE':
      name = action.payload.name;
      return {
        ...state,
        list: {
          ...state.list,
          [name]: {
            ...state.list[name],
            count: state.list[name].count + 1,
          },
        },
      };

    case 'SET_CURRENT_COUNT':
      name = action.payload.name;
      return {
        ...state,
        current: name,
      };

    default:
      return state;
  }
}
