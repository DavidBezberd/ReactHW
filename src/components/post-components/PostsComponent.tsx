import { useEffect, useState } from "react"
import type { IBaseResponseModel } from "../../models/IBaseResponseModel"
import type { IPost } from "../../models/IPost"
import { getAll } from "../../services/general.api.service"
import { PostComponent } from "./PostComponent"


export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
      getAll<IBaseResponseModel & {posts: IPost[]}>('/posts')
      .then(({posts}) =>
    setPosts(posts))
    }, [posts])
    return (
        <div>
            {
                posts.map(post => <PostComponent post={post} key={post.id}/>)
            }
        </div>
    )
}