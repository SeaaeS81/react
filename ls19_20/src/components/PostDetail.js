
import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find(post => post.id === id);

  return post ? (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      // інші поля поста
    </div>
  ) : (
    <p>Пост не знайдено</p>
  );
};

export default PostDetail;