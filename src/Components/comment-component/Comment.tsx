import type { FC } from "react"
import type { CommentModel } from "../../models/CommentModel"


type CommentProp = {comment: CommentModel};

export const Comment:FC<CommentProp> = ({comment:{email, body}}) => {
    return (
        <div>
            <h3>{email}</h3>
            <p>{body}</p>
        </div>
    )
}