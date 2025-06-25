import type { IPostModel } from "../models/IPostModel";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getPosts = async ():Promise<IPostModel> => {
    return await fetch(baseUrl + 'posts')
    .then(value => value.json())
}