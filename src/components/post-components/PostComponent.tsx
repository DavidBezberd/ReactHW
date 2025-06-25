import type { FC } from "react";
import type { IPost } from "../../models/IPost"

type PostType = {
    post: IPost;
}

export const PostComponent:FC<PostType> = ({post}) =>{
      return (
        <div>
            {post.title}
        </div>
      )
}