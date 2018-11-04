import * as actionTypes from './actionTypes'

export const playVideo = (id) => {
    return {
        type: actionTypes.PLAYVIDEO,
        id
    }
}

export const searchVideos = (searchValue) => {
    return {
        type: actionTypes.SEARCHVIDEOS,
        searchValue
    }
} 

export const handleChange = (event) => {
    return {
        type: actionTypes.HANDLECHANGE,
        value: event.target.value
    }
}

export const getAllVideos = (videos) => {
    return {
        type: actionTypes.GETALLVIDEOS,
        videos
       
    }
}
