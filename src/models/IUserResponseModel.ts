import type { IUser } from "./IUser";
export interface IUserResponseModel {
    total: number;
    limit: number;
    skip: number;
    users: IUser[];
}