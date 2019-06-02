import Immutable from 'immutable'

import * as actionTypes from '../actions/actionTypes'

const initialState = Immutable.fromJS({
    loading: false,
    callFailed: false,
    callSuccess: false,
    totalStats: {},
    itemisedStats: {}
});

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.UPDATE_STATS_START:
        case actionTypes.GET_STATS_START:
            return state.set('loading', true);

        case actionTypes.UPDATE_STATS_SUCCESS:
            return state.merge(Immutable.fromJS({
                loading: false,
            }));

        case actionTypes.GET_STATS_SUCCESS:
            console.log("GET_STATS_SUCCESS", action.data.totals)
            return state.merge(Immutable.fromJS({
                loading: false,
                callSuccess: true,
                totalStats: action.data.totals,
                itemised: action.data.itemised
            }));
        case actionTypes.UPDATE_STATS_FAILED:
        case actionTypes.GET_STATS_FAILED:
            return state.merge(Immutable.fromJS({
                loading: false,
                callFailed: true
            }));

        default:
            return state
    }
}

export default reducer;
