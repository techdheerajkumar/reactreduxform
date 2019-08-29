import * as types from './mainActions'

export function showData(formData) { //Calling this function in despatch method
    return { type: types.GET_DATA, formData }
}