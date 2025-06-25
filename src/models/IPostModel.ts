import type { IPost } from "./IPost";

export interface IPostModel {
    limit: number,
    skip: number,
    total: number,
    posts: IPost[]
}