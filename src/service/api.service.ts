import type { PostModel } from "../models/PostModel";
import type { PostResponseDummyjson } from "../models/PostResponseDummyJSON";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/posts';



const loadPosts = async (): Promise<PostModel[]> =>{

    const response:PostResponseDummyjson = await fetch(endpointTodos)
    
    .then(value => value.json());

    return response.posts;
}

export {loadPosts};