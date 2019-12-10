import Immutable from 'immutable'

import * as actionTypes from '../actions/actionTypes'

const initialState = Immutable.fromJS({
    loading: false,
    callFailed: false,
    callSuccess: false,
    homepage: {},
    statsPage: {},
});

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.UPDATE_STATS_START:
        case actionTypes.GET_STATS_START:
        case actionTypes.GET_HOMEPAGE_START:
            return state.set('loading', true);

        case actionTypes.UPDATE_STATS_SUCCESS:
            return state.merge(Immutable.fromJS({
                loading: false,
            }));

        case actionTypes.GET_STATS_SUCCESS:
            return state.merge(Immutable.fromJS({
                loading: false,
                callSuccess: true,
                homepage: action.data,
                statsPage: action.data,
            }));

        case actionTypes.GET_HOMEPAGE_START:
            return state.merge(Immutable.fromJS({
                loading: false,
                callSuccess: true,
                statsPage: action.data,
            }));

        case actionTypes.UPDATE_STATS_FAILED:
        case actionTypes.GET_STATS_FAILED:
        case actionTypes.GET_HOMEPAGE_FAILED:
            return state.merge(Immutable.fromJS({
                loading: false,
                callFailed: true,
            }));
        default:
            return state
    }
}

export default reducer;
