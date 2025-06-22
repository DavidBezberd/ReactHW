import { useState, useEffect } from "react";
import type { ICommentJson } from "../../../models/CommentsModel/ICommentsJson";
import { jsonCommentService } from "../../../service/api-service";
import { JsonCommentComponent } from "./JsonCommentComponent";




export const JsonCommentsComponent = () =>{
    const [comments, setCommentJson] = useState<ICommentJson[]>([]);
    useEffect(() => {
        jsonCommentService.GetJsonComments().then(allComments =>{
            setCommentJson(allComments)
        })
    })
    return(
        <div>
        {
            comments.map(comment => <JsonCommentComponent key={comment.id} item={comment}/>)
        }
        </div>
    )
}