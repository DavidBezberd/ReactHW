import type { FC } from "react"
import type { PostModel } from "../../models/PostModel"


type PostsProp = {post: PostModel};

export const Post:FC<PostsProp> = ({post:{body}}) => {
    return (
        <div>
            <h3>{body}</h3>
        </div>
    )
}