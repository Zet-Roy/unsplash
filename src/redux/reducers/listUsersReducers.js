import { GET_DATA_IMAGES } from '../actions/listImagesDataActions'
import initialState from './initialState';

export default (state = initialState.listUsers, action) => {
    switch (action.type) {
        case GET_DATA_IMAGES:
            let results = [...action.data]
            return Object.assign({}, state, {
                data: { results }
            })
        default:
            return state
    }
}