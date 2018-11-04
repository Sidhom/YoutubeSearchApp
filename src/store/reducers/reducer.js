import * as actionTypes from '../actions/actionTypes'

const initialState = {
    currentVideoId:'',
    API_KEY:'AIzaSyAl7zXsIBvfZgZkmlZuoDGh-CIWDo_NJuo',
    searchValue:'',
    part:'snippet',
    type:'video',
     videos: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PLAYVIDEO:
        return {
            ...state,
            currentVideoId: action.id
        }
        case actionTypes.HANDLECHANGE:
            return {
                ...state,
                searchValue: action.value
            }
        case actionTypes.GETALLVIDEOS:
        console.log(action.videos);
        return {
            ...state,
            videos: action.videos,
            currentVideoId:action.videos[0].id.videoId,
        }
        default: return state
    }
}
export default reducer