import { takeEvery } from 'redux-saga/effects'

import * as actionsTypes from '../actions/actionTypes'
import { getVideos } from './search'

export function* watchVideos() {
    yield takeEvery (actionsTypes.SEARCHVIDEOS, getVideos )
}