import { useEffect } from 'react';
import { useState } from 'react';
import './Comments.css';
import type {CommentModel} from '../../models/CommentModel';
import {loadComments} from '../../service/api.service';
import { Comment } from '../comment-component/Comment';

export const Comments  = () => {
    const [comments, setComments] = useState<CommentModel[]>([]);
    useEffect(() => {
     async function fetchPosts(){
        let allPosts = await loadComments();
        setComments(allPosts);
     } 

     fetchPosts();
    }, []);
    return (
        <div>
          {comments.map(comment => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </div>
      );
};