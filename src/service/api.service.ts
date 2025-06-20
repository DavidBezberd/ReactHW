import type { ProductModel } from "../models/ProductModel";
import type { PostResponseDummyjson } from "../models/PostResponseDummyJSON";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/products';



const loadProducts = async (): Promise<ProductModel[]> =>{

    const response:PostResponseDummyjson = await fetch(endpointTodos)
    
    .then(value => value.json());

    return response.products;
}

export {loadProducts};