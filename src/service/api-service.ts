import type { ICartsResponseModel } from "../models/ICartsResponseModel";
import type { IUserResponseModel } from "../models/IUserResponseModel"

const baseUrl = 'https://dummyjson.com'
export const userService ={
    getAllUsers: async ():Promise<IUserResponseModel> => {
        return await fetch(baseUrl + '/users')
        .then(value => value.json())
    }
};
export const cartService = {
    getAllCarts: async (userId:string):Promise<ICartsResponseModel> => {
    return await fetch( baseUrl + '/carts/user/' + userId   )
    .then(value => value.json())
}
}