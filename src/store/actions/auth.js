import * as actionTypes from './actionTypes'
import axios from '../../axios-pocket'

const getPocketTokenStart = () => {
  return {
    type: actionTypes.GET_POCKET_TOKEN_START
  };
}

const getPocketTokenSucess = () => {
  return {
    type: actionTypes.GET_POCKET_TOKEN_SUCCESS
  };
}

const getPocketTokenFail = () => {
  return {
    type: actionTypes.GET_POCKET_TOKEN_FAIL
  };
}

export const getPocketToken = () => {
  return dispatch => {
    dispatch(getPocketTokenStart());
    axios.get("/auth")
      .then(response => {
        console.log(response)
        dispatch(getPocketTokenSucess())
      })
      .catch(error => {
        console.error(error)
        dispatch(getPocketTokenFail())
      })
  }
}
