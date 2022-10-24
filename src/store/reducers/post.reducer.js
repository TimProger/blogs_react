export const PostActionTypes = {
    FETCH_POSTS: 'FETCH_POSTS',
    DROP_POSTS: 'DROP_POSTS',
    FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR: 'FETCH_POSTS_ERROR',
    ADD_POST: 'ADD_POST',
}

const initialState = {
    posts: [],
    loading: true,
    error: null
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case PostActionTypes.FETCH_POSTS:
            return {loading: true, error: null, posts: []}
        case PostActionTypes.DROP_POSTS:
            return {loading: false, error: null, posts: []}
        case PostActionTypes.FETCH_POSTS_SUCCESS:
            return {...state, loading: false, error: null, posts: [...action.payload]}
        case PostActionTypes.FETCH_POSTS_ERROR:
            return {...state, loading: false, error: action.payload, posts: state.posts}
        default:
            return state
    }
}