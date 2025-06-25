const baseJsonUrl = 'https://jsonplaceholder.typicode.com';
const baseDummyUrl = 'https://dummyjson.com';

export const urls = {
    jsonUsers: {
    allUsers: baseJsonUrl + '/users'
    },
    dummyUsers:{
    allusers: baseDummyUrl + '/users'
    },
    jsonPosts:{
        allPosts: baseJsonUrl + '/posts'
    },
    dummyPosts: {
        allPosts: baseDummyUrl + '/posts'
    },
   jsonComments: {
    allComments: baseJsonUrl + '/comments'
   },
   dummyComments: {
      allCommnets: baseDummyUrl + '/comments'
   }

}