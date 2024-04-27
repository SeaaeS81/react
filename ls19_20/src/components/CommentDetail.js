
import React from 'react';
import { useParams } from 'react-router-dom';

const CommentDetail = ({ comments }) => {
  const { id } = useParams();
  const comment = comments.find(comment => comment.id === id);

  return comment ? (
    <div>
      <h2>{comment.name}</h2>
      <p>{comment.body}</p>
      // інші поля коментаря
    </div>
  ) : (
    <p>Коментар не знайдено</p>
  );
};

export default CommentDetail;