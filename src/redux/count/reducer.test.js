import reducer from './reducer';
import { addCount } from './actions';

describe('Count reducer', () => {
  describe('ADD_COUNT', () => {
    it('adds a new count to the list', () => {
      const action = addCount('Lost pens');
      const inputState = {
        list: {},
      };
      const outputState = {
        list: {
          'Lost pens': {
            name: 'Lost pens',
            count: 0,
          },
        },
      };
      expect(reducer(inputState, action)).toEqual(outputState);
    });
  });
});
