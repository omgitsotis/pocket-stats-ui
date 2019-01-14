import * as actionTypes from './actionTypes'
import axios from '../../axios-pocket'

const getPocketTokenStart = () => {
  return {
    type: actionTypes.GET_POCKET_TOKEN_START
  };
}

const getPocketTokenSucess = (link) => {
  return {
    type: actionTypes.GET_POCKET_TOKEN_SUCCESS,
    link: link
  };
}

const getPocketTokenFail = () => {
  return {
    type: actionTypes.GET_POCKET_TOKEN_FAIL
  };
}

const getPocketTokenComplete = () => {
  return {
    type: actionTypes.GET_POCKET_TOKEN_COMPLETE
  };
}

const poll = (fn, timeout, interval) => {
  var endTime = Number(new Date()) + (timeout || 2000);
  interval = interval || 100;

  var checkCondition = function(resolve, reject) {
      var ajax = fn();
      // dive into the ajax promise
      ajax.then(response => {
        console.log("checkCondition response")
        // If the condition is met, we're done!
        if(response.status === 200) {
            resolve();
        }
        // If the condition isn't met but the timeout hasn't elapsed, go again
        else if (Number(new Date()) < endTime) {
            setTimeout(checkCondition, interval, resolve, reject);
        }
        // Didn't match and too much time, reject!
        else {
            console.log("checkCondition error")
            reject(new Error('timed out for auth poll'));
        }
    }).catch(error => {
      if (error.response && error.response.status === 401) {
        setTimeout(checkCondition, interval, resolve, reject);
      } else {
        console.log('Error', error.message);
      }
    });
  };

  return new Promise(checkCondition);
}

const pollAuthedUser = (dispatch) => {
  poll(function() {
	   return axios.get('/auth/authed');
   }, 10000, 1000)
    .then(function() {
      dispatch(getPocketTokenComplete());
    })
    .catch(function() {
      console.log("pollAuthedUser error")
      dispatch(getPocketTokenFail());
    });
}

export const getPocketToken = () => {
  return dispatch => {
    dispatch(getPocketTokenStart());
    axios.get("/auth")
      .then(response => {
        console.log(response)
        dispatch(getPocketTokenSucess(response.data.url))
        pollAuthedUser(dispatch)
      })
      .catch(error => {
        console.error(error)
        dispatch(getPocketTokenFail())
      })
  }
}

export const checkAuthenticated = () => {
  return dispatch => {
    dispatch(getPocketTokenStart());
    axios.get("auth/authed")
      .then(response => {
        if (response.status === 200) {
          dispatch(getPocketTokenComplete())
        } else {
          dispatch(getPocketTokenFail());
        }
      })
      .catch(error => {
        console.error(error)
        dispatch(getPocketTokenFail())
      })
  }
}
