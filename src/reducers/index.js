import { combineReducers } from 'redux'
import locationReducer from './locationReducer'
import clickReducer from './clickedReducer'

export default combineReducers({
    location: locationReducer,
    clicked: clickReducer
})