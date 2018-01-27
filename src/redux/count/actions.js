// @flow

export const addCount = (name: string): Object => ({
  type: 'ADD_COUNT',
  payload: {
    name,
  }
});
