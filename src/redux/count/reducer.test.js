import reducer from './reducer';
import { addCount, incrementByOne } from './actions';

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
            count: 1,
          },
        },
      };
      expect(reducer(inputState, action)).toEqual(outputState);
    });
  });

  describe('INCREMENT_BY_ONE', () => {
    it('increments an existing count by one', () => {
      const action = incrementByOne('Beers');
      const inputState = {
        list: {
          'Lost pens': {
            name: 'Lost pens',
            count: 1,
          },
          Beers: {
            name: 'Beers',
            count: 2,
          },
        },
      };
      const outputState = {
        list: {
          'Lost pens': {
            name: 'Lost pens',
            count: 1,
          },
          Beers: {
            name: 'Beers',
            count: 3,
          },
        },
      };
      expect(reducer(inputState, action)).toEqual(outputState);
    });
  });
});
