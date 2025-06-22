import type { FC } from "react";
import type { IPostsDummy } from "../../../models/PostsModel/IPostDummy";

type DummyPostsType = {
    item: IPostsDummy
}

export const DummyPostComponent:FC<DummyPostsType> = ({item}) =>{
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