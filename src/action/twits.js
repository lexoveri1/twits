import {SORT_BY_DATE, SORT_BY_POST_LENGTH} from "../types"

const userSortByDate = twits => ({
    type: SORT_BY_DATE,
    twits
})

const userSortByPostLength = twits => ({
    type: SORT_BY_POST_LENGTH,
    twits
})

export const sortByDate = twits => dispatch => {
    twits.sort((a,b)=> {
        return new Date(b.date) - new Date(a.date)
    })
    dispatch(userSortByDate(twits))
}

export const sortByPostLength = twits => dispatch => {
    twits.sort((a,b)=> {
       return b.post.length - a.post.length

    })
    dispatch(userSortByPostLength(twits))
}
