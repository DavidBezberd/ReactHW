import type { IUserModel } from "../models/IUserModel";

const baseUrl = import.meta.env.VITE_BASE_URL;

export const getUsers = async ():Promise<IUserModel> => {
    return await fetch(baseUrl + 'users')
    .then(value => value.json())
}