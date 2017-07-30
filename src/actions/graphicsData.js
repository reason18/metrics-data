import fetch from 'isomorphic-fetch';


export function fetchUsersData(type, siteId, siteKey, interval) {
  return {
    type: type,
    payload: fetch(`https://api.applicationinsights.io/beta/apps/${siteId}/metrics/users/count?timespan=P30D${interval}`, {
      method: 'get',
      headers: {
        "Host": `api.applicationinsights.io`,
        "x-api-key":`${siteKey}`,
        "x-ms-app":'Air'
       }
     }).then((response) => response.json())
        .then((data) => {
          if (!interval) {
            return data.value['users/count'].unique
          } else {
          let array = [];
          data.value.segments.forEach((item, index) => {
            array[index] = item['users/count'].unique;
          })
          return array;}
        })
  }
}


export function fetchViewsData(type, siteId, siteKey) {
  return {
    type: type,
    payload: fetch(`https://api.applicationinsights.io/beta/apps/${siteId}/metrics/pageViews/count?timespan=P30D&interval=P1D`, {
      method: 'get',
      headers: {
        "Host": `api.applicationinsights.io`,
        "x-api-key":`${siteKey}`,
        "x-ms-app":'Air'
       }
     }).then((response) => response.json())
        .then((data) => {
          let array = [];
          data.value.segments.forEach((item, index) => {
            array[index] = item['pageViews/count'].sum;
          })
          return array;
        })
  }
}

export function fetchFailedRequestsData(type, siteId, siteKey) {
  return {
    type: type,
    payload: fetch(`https://api.applicationinsights.io/beta/apps/${siteId}/metrics/requests/failed?timespan=P30D&interval=P1D`, {
      method: 'get',
      headers: {
        "Host": `api.applicationinsights.io`,
        "x-api-key":`${siteKey}`,
        "x-ms-app":'Air'
       }
     }).then((response) => response.json())
        .then((data) => {
          let array = [];
          data.value.segments.forEach((item, index) => {
            array[index] = item['requests/failed'].sum;
          })
          return array;
        })
  }
}


export function fetchBrowserPageloadTime(type, siteId, siteKey) {
  return {
    type: type,
    payload: fetch(`https://api.applicationinsights.io/beta/apps/${siteId}/metrics/browserTimings/totalDuration?timespan=P7D`, {
      method: 'get',
      headers: {
        "Host": `api.applicationinsights.io`,
        "x-api-key":`${siteKey}`,
        "x-ms-app":'Air'
       }
     }).then((response) => response.json())
        .then((data) => {
          return `${data.value['browserTimings/totalDuration'].avg}ms`;
        })
  }
}
