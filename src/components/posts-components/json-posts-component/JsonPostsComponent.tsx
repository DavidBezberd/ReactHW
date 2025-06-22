import { useEffect, useState } from "react"
import { JsonPostComponent } from "./JsonPostComponent";
import { jsonPostService } from "../../../service/api-service";
import type { IPostJson } from "../../../models/PostsModel/IPostJson";


export const JsonPostsComponent = () =>{
    const [postsJson, setJsonPosts] = useState<IPostJson[]>([]);
    useEffect(() =>{
        jsonPostService.GetJsonPosts().then((allPosts) => {
            setJsonPosts(allPosts);
    });
}, [postsJson]);
    return(
        <div>
        {
            postsJson.map(user => <JsonPostComponent key={user.id} item={user}/>)
        }
        </div>
    )
}
