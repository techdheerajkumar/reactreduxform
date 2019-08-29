import * as types from './mainActions'

export default function reducer(state = [], action) {
    // console.log(`${action.formData} ====== is the data `)
    // return state
    switch (action.type) {
        case types.GET_DATA:
            return [...state, { ...action.formData }];
        default:
            return state
    }
}

