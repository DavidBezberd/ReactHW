import type { ICommentsDummy } from "../../../models/CommentsModel/ICommentsDummy";
import { useState, useEffect } from "react";
import { dummyCommentService } from "../../../service/api-service";
import { DummyCommentComponent } from "./DummyCommentComponent";


export const DummyCommentsComponent = () =>{
    const [comment, setDummyComment] = useState<ICommentsDummy[]>([]);
    useEffect(() => {
        dummyCommentService.GetDummyComments().then(allComments =>{
            setDummyComment(allComments)
        })
    })

    return(
        <div>
          {
            comment.map(comment => <DummyCommentComponent key={comment.id} item={comment}/>)
          }
        </div>
    )
}