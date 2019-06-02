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
    axios.get("/api/v1/articles")
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

const getStatsStart = () => {
  return {
    type: actionTypes.GET_STATS_START
  };
}

const getStatsSuccess = (data) => {
    return {
        type: actionTypes.GET_STATS_SUCCESS,
        data: data
    };
}
const getStatsFailed = () => {
    return {
        type: actionTypes.GET_STATS_FAILED
    };
}

export const getStats = (startDate, endDate) => {
    return dispatch => {
        dispatch(getStatsStart());
        axios.get(`/stats?start=${startDate}&end=${endDate}`)
            .then(response => {
                console.log(response)
                dispatch(getStatsSuccess(response.data))
            })
          .catch(error => {
              console.error(error)
              dispatch(getStatsFailed())
          })
    }
}
