import type { FC } from "react"
import type { ICommentsDummy } from "../../../models/CommentsModel/ICommentsDummy"


type DummyCommentType = {
    item: ICommentsDummy
}

export const DummyCommentComponent:FC<DummyCommentType> = ({item}) =>{
    return (
        <div>
            {
                item.body
            }
            <br />
            {
                item.likes
            }
        </div>
    )
}