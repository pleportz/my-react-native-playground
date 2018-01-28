const countsSelector = state => state.count.list;

export const currentCountSelector = state => state.count.list[state.count.current];
