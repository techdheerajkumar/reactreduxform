import * as types from './mainActions'

export function showData(formData) {
    return { type: types.GET_DATA, formData }
}
