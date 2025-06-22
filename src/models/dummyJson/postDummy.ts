import type { IPostsDummy } from "../PostsModel/IPostDummy";


export interface IDummyPost {
    users: IPostsDummy,
    total: number,
    skip: number, 
    limit: number
}