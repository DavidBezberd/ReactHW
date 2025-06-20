import type { FC } from "react"
import type { PostModel } from "../../models/PostModel"


type PostProp = {post: PostModel};

export const Post:FC<PostProp> = ({post: {title, body}}) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    )
}