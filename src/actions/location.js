export const SET_LOCATION = 'set_location'

export function setLocation([lat,lon]){
    return {
        type: SET_LOCATION,
        location: [lat,lon]
    }
}