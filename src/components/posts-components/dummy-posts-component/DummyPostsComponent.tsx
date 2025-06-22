import { useEffect, useState } from "react"
import { DummyPostComponent } from "./DummyPostComponent";
import { dummyPostService } from "../../../service/api-service";
import type { IPostsDummy } from "../../../models/PostsModel/IPostDummy";


export const DummyPostsComponent = () =>{
    const [postsDummy, setDummyPosts] = useState<IPostsDummy[]>([]);
    useEffect(() =>{
        dummyPostService.GetDummyPosts().then((allPosts) => {
        setDummyPosts(allPosts);
    });
}, [postsDummy]);
    return(
        <div>
        {
            postsDummy.map(user => <DummyPostComponent key={user.id} item={user}/>)
        }
        </div>
    )
}