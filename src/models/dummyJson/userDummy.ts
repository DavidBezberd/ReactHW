import type { IUsersDummy } from "../UsersModel/IUsersDummy";


export interface IDummyUser {
    users: IUsersDummy[],
    total: number,
    skip: number, 
    limit: number
}