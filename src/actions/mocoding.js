import fetch from 'isomorphic-fetch';

export function fetchMocodingUsers(type, timespan) {
  return {
    type: type,
    payload: fetch(`https://api.applicationinsights.io/beta/apps/87ab4409-4fb3-43d5-ac3a-ba8ae22d4ffd/metrics/users/count?timespan=${timespan}`, {
      method: 'get',
      headers: {
        "Host": `api.applicationinsights.io`,
        "x-api-key":`frihfkvmlkrswusmq1wjegb3brgno15yfuey6j6p`,
        "x-ms-app":'Air'
       }
     }).then((response) => response.json())
        .then((data) => {
          return data.value['users/count'].unique
        })
  }
}

export function fetchMocodingFailedRequests(type, timespan) {
  return {
    type: type,
    payload: fetch(`https://api.applicationinsights.io/beta/apps/87ab4409-4fb3-43d5-ac3a-ba8ae22d4ffd/metrics/requests/failed?timespan=${timespan}`, {
      method: 'get',
      headers: {
        "Host": `api.applicationinsights.io`,
        "x-api-key":`frihfkvmlkrswusmq1wjegb3brgno15yfuey6j6p`,
        "x-ms-app":'Air'
       }
     }).then((response) => response.json())
        .then((data) => {
          return data.value['requests/failed'].sum
        })
  }
}
