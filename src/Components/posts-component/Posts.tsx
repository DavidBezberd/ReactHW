import { useEffect } from 'react';
import { useState } from 'react';
import './Todos.css';
import type {PostModel} from '../../models/PostModel';
import {loadPosts} from '../../service/api.service';
import { Post } from '../post-component/Post';

export const Posts  = () => {
    const [posts, setPosts] = useState<PostModel[]>([]);
    useEffect(() => {
     async function fetchPosts(){
        let allPosts = await loadPosts();
        setPosts(allPosts);
     } 

     fetchPosts();
    }, []);
    return (
        <div>
          {posts.map(post => (
            <Post post={post} key={post.id} />
          ))}
        </div>
      );
};