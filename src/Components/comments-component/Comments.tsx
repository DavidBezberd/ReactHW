import { useEffect } from 'react';
import { useState } from 'react';
import './Comments.css';
import type {PostModel} from '../../models/PostModel';
import {loadPosts} from '../../service/api.service';
import { Post } from '../comment-component/Comment';

export const Posts  = () => {
    const [post, setPost] = useState<PostModel[]>([]);
    useEffect(() => {
     async function fetchPosts(){
        let allPosts = await loadPosts();
        setPost(allPosts);
     } 

     fetchPosts();
    }, []);
    return (
        <div>
          {post.map(post => (
            <Post post={post} key={post.id} />
          ))}
        </div>
      );
};