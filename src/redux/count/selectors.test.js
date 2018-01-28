import { currentCountSelector } from './selectors';

describe('Count selectors', () => {
  describe('currentCountSelector', () => {
    it('selects the current count', () => {
      const state = {
        count: {
          current: 'Beers',
          list: {
            Beers: {
              name: 'Beers',
              count: 2,
            },
          },
        },
      };
      const expectedCount = {
        name: 'Beers',
        count: 2,
      };
      expect(currentCountSelector(state)).toEqual(expectedCount);
    });
  });
});
