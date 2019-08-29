import * as types from './mainActions'

export default function dummy(state = [], action) {
    switch (action.type) {
        case types.GET_DATA:
            return [...state, { ...action.formData }];
        default:
            return state
    }
}

