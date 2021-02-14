import {SET_CLICKED_LOCATION,SET_NULL} from '../actions/clicked'
export default function clickedReducer(
  state = { location:null, },
  action
) {
    switch(action.type){
        case SET_CLICKED_LOCATION:
            return {location: action.payload}
        case SET_NULL:
            return {location: null}
        default:
            return state
    }
}
