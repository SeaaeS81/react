import React, { useState } from 'react';

function ArticleForm({ article = {}, onSubmit }) {
  const [title, setTitle] = useState(article.title || '');
  const [body, setBody] = useState(article.body || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ ...article, title, body });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input value={title} onChange={e => setTitle(e.target.value)} required />
      </label>
      <label>
        Body:
        <textarea value={body} onChange={e => setBody(e.target.value)} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ArticleForm;