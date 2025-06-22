import type { ICommentsDummy } from "../CommentsModel/ICommentsDummy";


export interface IDummyComment {
    users: ICommentsDummy,
    total: number,
    skip: number, 
    limit: number
}