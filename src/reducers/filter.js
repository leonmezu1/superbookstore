import { CHANGEFILTER } from '../types';

export default (state = 'All', action) => {
  switch (action.type) {
    default:
      return state;
    case CHANGEFILTER:
      return action.filter;
  }
};
