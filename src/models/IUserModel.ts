import type { IUser } from "./IUser";

export interface IUserModel {
    limit: number,
    skip: number,
    total: number,
    users: IUser[]
}