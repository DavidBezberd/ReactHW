import type { IUser } from "./IUser"

export interface IUserResponse {
    total: number,
    skip: number,
    limit: number,
    users: IUser[]
}