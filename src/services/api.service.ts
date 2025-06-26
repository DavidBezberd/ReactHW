import type { IUserResponse } from "../model/IUserResponse"

const url = 'https://dummyjson.com'

export const getAllUsers = async (page: string):Promise<IUserResponse> => {
    const limit = 30;
    const skip = limit * (+page) - limit;
    if (+page <= 0){
       const response = await fetch (url + '/users' +'?skip=' + skip).then(value => value.json())
       return response;
    }
    else{
        const response = await fetch (url + '/users' +'?skip=' + skip).then(value => value.json())
           return response;
    }
}