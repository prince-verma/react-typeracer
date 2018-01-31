export function get(url) {
  return requestWeb('GET', url);
}

export function post(url, data) {
  return requestWeb('POST', url, data);
}

export function put(url, data) {
  return requestWeb('PUT', url, data);
}

export function del(url, data) {
  return requestWeb('DELETE', url, data);
}

function requestWeb(type, url, data = {}) {
  return new Promise(function (resolve, reject) {
    let options = {
      method: type,
      body: data ? JSON.stringify(data) : null,
      headers: {
        'Accept': 'application/json'
      }
    };
    type === 'GET' && delete options.body;

    fetch(url, options).then(response => {
      resolve(response.json());
    }).catch(err => {
      console.log('api error: ', JSON.stringify(err), err.message);
      reject(err);
    });
  });
}