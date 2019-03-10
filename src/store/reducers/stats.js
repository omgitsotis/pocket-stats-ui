import Immutable from 'immutable'

import * as actionTypes from '../actions/actionTypes'

const initialState = Immutable.fromJS({
  loading: false,
  updateFailed: false,
  updateSuccess: false
});

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
      case actionTypes.UPDATE_STATS_START:
        return state.set('loading', true);

      case actionTypes.UPDATE_STATS_SUCCESS:
        return state.merge(Immutable.fromJS({
          loading: false,
          updateSuccess: true
        }));

      case actionTypes.UPDATE_STATS_FAILED:
        return state.merge(Immutable.fromJS({
          loading: false,
          updateFailed: true
        }));

      default:
        return state
    }
}

export default reducer;
