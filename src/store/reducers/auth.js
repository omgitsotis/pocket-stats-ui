import Immutable from 'immutable'

import * as actionTypes from '../actions/actionTypes'

const initialState = Immutable.fromJS({
  loading: false,
  hasError: false,
  isAuthenticated: false,
  link: ''
});

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
      case actionTypes.GET_POCKET_TOKEN_START:
        return state.set('loading', true);

      case actionTypes.GET_POCKET_TOKEN_SUCCESS:
        return state.merge(Immutable.fromJS({
          loading: false,
          link: action.link
        }));

      case actionTypes.GET_POCKET_TOKEN_COMPLETE:
        return state.merge(Immutable.fromJS({
          loading: false,
          isAuthenticated: true
        }));

      case actionTypes.GET_POCKET_TOKEN_FAIL:
        return state.merge(Immutable.fromJS({
          loading: false,
          hasError: true
        }));
      default:

      return state
    }
}

export default reducer;
