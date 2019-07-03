export function setUserId(payload) {
    return function somename(dispatch) {
        dispatch({
            type: 'SET_USER_ID',
            payload
        })
    }
}