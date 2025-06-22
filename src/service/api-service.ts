import type { ICommentJson } from "../models/CommentsModel/ICommentsJson";
import type { IPostsDummy } from "../models/PostsModel/IPostDummy";
import type { IPostJson } from "../models/PostsModel/IPostJson";
import type { IUserJson } from "../models/UsersModel/IUsersJson";
import type { IDummyUser } from "../models/dummyJson/userDummy";
import { urls } from "./urls";

export const jsonUserService = {
    GetJsonUsers: async ():Promise<IUserJson[]> => {
       return await fetch(urls.jsonUsers.allUsers)
        .then(value => value.json());
    }
}
export const dummyUserService = async() => {
    const response: IDummyUser  =
    await fetch(urls.dummyUsers.allusers)
    .then(value => value.json());
    return response.users;
}
export const jsonPostService= {
        GetJsonPosts: async ():Promise<IPostJson[]> => {
            return await fetch(urls.jsonPosts.allPosts)
        .then(value => value.json());
    }
}
export const dummyPostService = {
    GetDummyPosts: async ():Promise<IPostsDummy[]> => {
         return await fetch(urls.dummyPosts.allPosts)
        .then(value => value.json())
        .then(data => data.posts)
    }
}
export const jsonCommentService = {
    GetJsonComments: async ():Promise<ICommentJson[]> => {
        return await fetch(urls.jsonComments.allComments)
        .then(value => value.json());
    }
}
export const dummyCommentService = {
    GetDummyComments: async () => {
        return await fetch(urls.dummyComments.allCommnets)
        .then(value => value.json())
        .then(data => data.comments)
    }
}