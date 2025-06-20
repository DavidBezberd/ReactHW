import type { TodoModel } from "../models/TodoModel";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos';



const loadTodos = async (): Promise<TodoModel[]> =>{
    console.log(import.meta.env.VITE_API_BASE_URL); // має бути "https://jsonplaceholder.typicode.com"

    return await fetch(endpointTodos)
    
    .then(value => value.json());
}

export {loadTodos};