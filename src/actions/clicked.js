export const SET_CLICKED_LOCATION = 'set_clicked_location'
export const SET_NULL = 'set_null'

export function setClickedLocation({lat,lon}){
    return {
        type: SET_CLICKED_LOCATION,
        payload: {lat,lon}
    }
}

export function setNull(){
    return {
        type: SET_NULL
    }
}