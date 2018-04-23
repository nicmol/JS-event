const timeoutDuration = 5000;

export default function apiCall(route, body = {}, method='GET') {
    const request = new Promise((resolve, reject) => {

      const headers = new Headers({
        'Content-Type': 'application/json',
      });

      const requestDetails = {
        method,
        mode: 'cors',
        headers,
      };

      if(method !== 'GET') requestDetails.body = JSON.stringify(body);

      function handleErrors(response) {
        if(response.ok) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      }

      fetch(`${SERVER_URL}/${route}`, requestDetails)
        .then(handleErrors)
        .then(resolve)
        .catch(reject);

    }); // end of Promise called request

    const timeout = new Promise((request, reject) => {
      setTimeout(reject, timeoutDuration, `Request timed out!`);
    }); // end of Promise called timeout

    return new Promise((resolve, reject) => {
      Promise.race([request, timeout])
        .then(resolve)
        .catch(reject);
    }); 
    /* the method ultimately returns a promise, 
       either the promise that results from the ajax call or
       the promise that resulted from the 5 second timeout,
       which ever finishes first
    */

}
