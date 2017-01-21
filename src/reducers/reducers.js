import { combineReducers } from 'redux';

import * as actions from '../actions/actions';

import catData from '../cats';

export function cats(state = catData, action) {
  switch (action.type) {
    case actions.MEOW:
      const catIndex =
        state
          .findIndex(cat => cat.get('id') === action.payload.catId);

      return state
        .updateIn([catIndex, 'meows'], meows => meows + 1);

    case actions.DELETE_CAT:
      return state
        .filter(cat => cat.get('id') !== action.payload.catId);

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  cats,
});

export default rootReducer;
