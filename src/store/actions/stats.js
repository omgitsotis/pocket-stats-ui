import * as actionTypes from './actionTypes'
import axios from '../../axios-pocket'

const updateStatsStart = () => {
  return {
    type: actionTypes.UPDATE_STATS_START
  };
}

const updateStatsSuccess = () => {
  return {
    type: actionTypes.UPDATE_STATS_SUCCESS
  };
}
const updateStatsFailed = () => {
  return {
    type: actionTypes.UPDATE_STATS_FAILED
  };
}

export const updateStats = () => {
  return dispatch => {
    dispatch(updateStatsStart());
    axios.get("/api/v1/update")
      .then(response => {
        console.log(response)
        dispatch(updateStatsSuccess())
      })
      .catch(error => {
        console.error(error)
        dispatch(updateStatsFailed())
      })
  }
}
