import { put, call } from 'redux-saga/effects'
import * as actions from '../actions/actions'
import { store } from '../../index'


import  youtubeSearch from "youtube-api-v3-search";

export function* getVideos(action) {
    try {
    let options = {
        q: action.searchValue ,
        part: store.getState().part,
        type: store.getState().type
      }
      let youtubeResult = yield call(youtubeSearch, store.getState().API_KEY,options);
     yield put (
        actions.getAllVideos(youtubeResult.items))
        }catch (err) {
            console.log(err)
        }

}