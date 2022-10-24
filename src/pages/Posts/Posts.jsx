import React from "react"
import Post from "../../components/Post/Post"
import Container from 'react-bootstrap/Container';
import './Posts.css'
import PostApi from '../../api/posts'

const Posts = ({error, loading, posts, fetchPosts, addPost, deletePost}) => {

    const [isModalOpen, setIsModalOpen] = React.useState()
    const [textareaValue, setTextareaValue] = React.useState('')

    React.useEffect(()=>{
        fetchPosts()
    }, [])

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    const onTextareaChange = (e) => {
        setTextareaValue(e.target.value)
    }

    if (error) {
        return <div id="error">{error}</div>
    }

    return (
        <>
            <div className="posts">
                <h1>Посты <svg data-toggle="modal" onClick={()=>openModal()} xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </h1>
                <Container style={{padding: '20px 0 0 0', gap: '20px', display: 'flex', flexDirection: 'column'}}>
                    {!loading ? (posts.length > 0 ? posts.map((el, index)=>{
                        return <Post key={index} post={el} deletePost={deletePost} />
                    }) : <p>У вас нет опубликованных постов</p>) : <div id="loading">Идёт загрузка</div>}
                </Container>
                <div style={{width: '100%',
                            background: '#00000090',
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: `${isModalOpen ? 100 : 0}`,
                            display: `${isModalOpen ? 'flex' : 'none'}`}} 
                    className="modal fade" id="exampleModal">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" style={{width: '500px'}}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Создать пост</h5>
                            <svg onClick={()=>closeModal()} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label className="col-form-label">Текст поста:</label>
                                    <textarea value={textareaValue} onChange={(e)=>onTextareaChange(e)} className="form-control" id="message-text" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={()=>closeModal()} >Отмена</button>
                            <button type="button" onClick={()=>addPost(textareaValue)} className="btn btn-primary">Создать</button>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        </>
    )
}

export default Posts;