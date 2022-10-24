import { $api } from "../http"

class PostApi {
    
    async posts_get() {
        return await $api
            .get('/api/posts')
            .then((res)=>{
                return res
            })
            .catch((e)=>{
                return e
            })
    }

    async posts_add(title, image = null) {
        return await $api
                        .post('/api/posts/add', {
                            title,
                            image
                        })
                        .then((res)=>{
                            return res
                        })
                        .catch((e)=>{
                            return e
                        })
    }

    async posts_delete(id) {
        return await $api
                        .delete('/api/posts/'+id)
                        .then((res)=>{
                            return res
                        })
                        .catch((e)=>{
                            return e
                        })
    }
}

export default new PostApi()