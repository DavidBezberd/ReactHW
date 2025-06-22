import type { FC } from "react";
import type { IPostJson } from "../../../models/PostsModel/IPostJson";

type JsonPostsType = {
    item: IPostJson
}

export const JsonPostComponent:FC<JsonPostsType> = ({item}) =>{
return (
        <div>
            {
                item.title
            }
            <br/>
            {
                item.body
            }
        </div>
)
}