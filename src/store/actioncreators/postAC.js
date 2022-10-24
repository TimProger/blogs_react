import axios from 'axios';
import { PostActionTypes } from '../reducers/post.reducer';
import PostApi from '../../api/posts'

export const fetchPosts = () => {
    return async (dispatch) => {
        try {
            dispatch({type: PostActionTypes.FETCH_POSTS})
            PostApi.posts_get()
                .then(response => {
                    const reversed = []
                    for(let i = response.data.data.length; i>0; i--){
                        reversed.push(response.data.data[i-1])
                    }
                    dispatch({
                        type: PostActionTypes.FETCH_POSTS_SUCCESS,
                        payload: reversed
                    })
                }).catch(e => {
                    dispatch({
                        type: PostActionTypes.FETCH_POSTS_ERROR,
                        payload: 'Произошла ошибка при запросе к серверу'
                    })
                }
            )
        } catch (e) {
            dispatch({
                type: PostActionTypes.FETCH_POSTS_ERROR,
                payload: 'Произошла ошибка при загрузке постов'
            })
        }
    }
}

export const addPost = (title) => {
    return async (dispatch) => {
        try {
            PostApi.posts_add(title)
                .then(response => {
                    PostApi.posts_get()
                        .then(response => {
                            const reversed = []
                            for(let i = response.data.data.length; i>0; i--){
                                reversed.push(response.data.data[i-1])
                            }
                            dispatch({
                                type: PostActionTypes.FETCH_POSTS_SUCCESS,
                                payload: reversed
                            })
                        }).catch(e => {
                            dispatch({
                                type: PostActionTypes.FETCH_POSTS_ERROR,
                                payload: 'Произошла ошибка при запросе к серверу'
                            })
                        }
                    )
                }).catch(e => {
                    dispatch({
                        type: PostActionTypes.FETCH_POSTS_ERROR,
                        payload: 'Произошла ошибка при запросе к серверу'
                    })
                }
            )
        } catch (e) {
            console.log('Ошибка создания поста')
        }
    }
}

export const deletePost = (id) => {
    return async (dispatch) => {
        try {
            PostApi.posts_delete(id)
                .then(response => {
                    PostApi.posts_get()
                        .then(response => {
                            const reversed = []
                            for(let i = response.data.data.length; i>0; i--){
                                reversed.push(response.data.data[i-1])
                            }
                            dispatch({
                                type: PostActionTypes.FETCH_POSTS_SUCCESS,
                                payload: reversed
                            })
                        }).catch(e => {
                            dispatch({
                                type: PostActionTypes.FETCH_POSTS_ERROR,
                                payload: 'Произошла ошибка при запросе к серверу'
                            })
                        }
                    )
                }).catch(e => {
                    dispatch({
                        type: PostActionTypes.FETCH_POSTS_ERROR,
                        payload: 'Произошла ошибка при запросе к серверу'
                    })
                }
            )
        } catch (e) {
            console.log('Ошибка создания поста')
        }
    }
}

export const dropPosts = () => {
    return async (dispatch) => {
        dispatch({type: PostActionTypes.DROP_POSTS,})
    }
}