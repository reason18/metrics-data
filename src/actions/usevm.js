import fetch from 'isomorphic-fetch';

export function fetchUsevmUsers(type, timespan) {
  return {
    type: type,
    payload: fetch(`https://api.applicationinsights.io/beta/apps/3d6f5bed-c7f4-4ae9-be88-2faf24cb753b/metrics/users/count?timespan=${timespan}`, {
      method: 'get',
      headers: {
        "Host": `api.applicationinsights.io`,
        "x-api-key":`ny2f1usn2sas2i2a0bcft7ej2nig5roep2nvdfpc`,
        "x-ms-app":'Air'
       }
     }).then((response) => response.json())
        .then((data) => {
          return data.value['users/count'].unique
        })
  }
}

export function fetchUsevmFailedRequests(type, timespan) {
  return {
    type: type,
    payload: fetch(`https://api.applicationinsights.io/beta/apps/3d6f5bed-c7f4-4ae9-be88-2faf24cb753b/metrics/requests/failed?timespan=${timespan}`, {
      method: 'get',
      headers: {
        "Host": `api.applicationinsights.io`,
        "x-api-key":`ny2f1usn2sas2i2a0bcft7ej2nig5roep2nvdfpc`,
        "x-ms-app":'Air'
       }
     }).then((response) => response.json())
        .then((data) => {
          return data.value['requests/failed'].sum
        })
  }
}
