// @flow

export const addCount = (name: string): Object => ({
  type: 'ADD_COUNT',
  payload: {
    name,
  },
});

export const setCurrentCount = (name: string): Object => ({
  type: 'SET_CURRENT_COUNT',
  payload: {
    name,
  },
});

export const incrementByOne = (name: string): Object => ({
  type: 'INCREMENT_BY_ONE',
  payload: {
    name,
  },
});
