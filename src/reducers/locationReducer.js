import {SET_LOCATION} from '../actions/location'
export default function locationReducer(
  state = { hasLocation: false, location: [26.8065, 87.2846] },
  action
) {
    switch(action.type){
        case SET_LOCATION:
            return {hasLocation: true, location: action.payload}
        default:
            return state
    }
}
