import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import Posts from "./Posts";
import ActionCreators from '../../store/actioncreators/'

const mapStateToProps = (state) => (
    {
        posts: state.post.posts,
        loading: state.post.loading,
        error: state.post.error,
    }
)

const mapDispatchToProps = (dispatch) => {
    const boundActions = bindActionCreators(ActionCreators, dispatch)
    return {
        fetchPosts: boundActions.fetchPosts,
        dropPosts: boundActions.dropPosts,
        addPost: boundActions.addPost,
        deletePost: boundActions.deletePost
    }
  }

let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;