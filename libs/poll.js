const poll = (fn, timeout, interval) => {
  var endTime = Number(new Date()) + (timeout || 2000);
  interval = interval || 100;

  var checkCondition = function(resolve, reject) {
      var ajax = fn();
      // dive into the ajax promise
      ajax.then(response => {
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
            reject(new Error('timed out for auth poll'));
        }
    }).catch(error => {
      if (error.response && error.response.status === 401) {
        setTimeout(checkCondition, interval, resolve, reject);
      } else {
        console.error('Error', error.message);
      }
    });
  };

  return new Promise(checkCondition);
}

export default poll
