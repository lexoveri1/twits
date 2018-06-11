import {SORT_BY_DATE, SORT_BY_POST_LENGTH} from "../types"
import twits from '../data/twits'

export default function twitdata(state = twits, action) {
    switch (action.type) {
        case SORT_BY_DATE:
            return action.post
        case SORT_BY_POST_LENGTH:
            return action.twits

        default:
            return state
    }
}