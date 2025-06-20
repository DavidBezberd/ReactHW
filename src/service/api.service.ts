import type { CommentModel } from "../models/CommentModel";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/comments';



const loadComments = async (): Promise<CommentModel[]> =>{

    return await fetch(endpointTodos)
    
    .then(value => value.json());
}

export {loadComments};