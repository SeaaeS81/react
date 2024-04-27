import React from 'react';
import { Link } from 'react-router-dom';

function Article({ article }) {
  return (
    <div>
      <h2><Link to={`/article/${article.id}`}>{article.title}</Link></h2>
      <p>{article.body}</p>
    </div>
  );
}

export default Article;