import type { PostModel } from "../models/PostModel";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/posts';



const loadPosts = async (): Promise<PostModel[]> =>{

    return await fetch(endpointTodos)
    
    .then(value => value.json());
}

export {loadPosts};