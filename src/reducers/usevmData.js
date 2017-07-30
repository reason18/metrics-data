export default function reducer(state={
  fetching: false,
  fetched: false,
  users: [],
  views: [],
  failedRequests: [],
  unicUsers: 0,
  averageAccessTime: 0,
  error: null,
}, action) {
  switch (action.type) {
    case 'FETCH_USEVM_USERS_PENDING' : {
      return { ...state, fetching: true}
    }
    case 'FETCH_USEVM_USERS_REJECTED' : {
      return { ...state, fetching: false, error: action.payload}
    }
    case 'FETCH_USEVM_USERS_FULFILLED' : {
      return { ...state, fetching: false, fetched: true, users: action.payload}
    }
    case 'FETCH_USEVM_VIEWS_PENDING' : {
      return { ...state, fetching: true}
    }
    case 'FETCH_USEVM_VIEWS_REJECTED' : {
      return { ...state, fetching: false, error: action.payload}
    }
    case 'FETCH_USEVM_VIEWS_FULFILLED' : {
      return { ...state, fetching: false, fetched: true, views: action.payload}
    }
    case 'FETCH_USEVM_FAILED_REQUESTS_PENDING' : {
      return { ...state, fetching: true}
    }
    case 'FETCH_USEVM_FAILED_REQUESTS_REJECTED' : {
      return { ...state, fetching: false, error: action.payload}
    }
    case 'FETCH_USEVM_FAILED_REQUESTS_FULFILLED' : {
      return { ...state, fetching: false, fetched: true, failedRequests: action.payload}
    }
    case 'FETCH_USEVM_UNIC_USERS_PENDING' : {
      return { ...state, fetching: true}
    }
    case 'FETCH_USEVM_UNIC_USERS_REJECTED' : {
      return { ...state, fetching: false, error: action.payload}
    }
    case 'FETCH_USEVM_UNIC_USERS_FULFILLED' : {
      return { ...state, fetching: false, fetched: true, unicUsers: action.payload}
    }
    case 'FETCH_USEVM_AVERAGE_ACCESS_TIME_PENDING' : {
      return { ...state, fetching: true}
    }
    case 'FETCH_USEVM_AVERAGE_ACCESS_TIME_REJECTED' : {
      return { ...state, fetching: false, error: action.payload}
    }
    case 'FETCH_USEVM_AVERAGE_ACCESS_TIME_FULFILLED' : {
      return { ...state, fetching: false, fetched: true, averageAccessTime: action.payload}
    }
    default:
      return state;
  }
}
