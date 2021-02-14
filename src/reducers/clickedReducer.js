import {SET_CLICKED_LOCATION,SET_NULL} from '../actions/clicked'
export default function clickedReducer(
  state = { hasLocation: false, lat: null, lon: null  },
  action
) {
    switch(action.type){
        case SET_CLICKED_LOCATION:
            return {lat: action.payload.lat, lon: action.payload.lon, hasLocation: true}
        case SET_NULL:
            return { hasLocation: false, lat: null, lon: null  }
        default:
            return state
    }
}
