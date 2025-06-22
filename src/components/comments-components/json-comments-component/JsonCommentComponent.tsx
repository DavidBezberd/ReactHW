import type { FC } from "react"
import type { ICommentJson } from "../../../models/CommentsModel/ICommentsJson"


type JsonCommentType = {
 item: ICommentJson
}

export const JsonCommentComponent:FC<JsonCommentType> = ({item}) => {
    return (
        <div>
            {item.name}
            <br/><br/>
            {item.email}
            <br/><br/>
            {item.body}
        </div>
    )
}