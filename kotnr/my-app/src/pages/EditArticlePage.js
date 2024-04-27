import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { fetchArticle, updateArticle } from '../redux/articlesSlice';
import ArticleForm from '../components/ArticleForm';
import { Container, Row, Col } from 'react-bootstrap';

function EditArticlePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const article = useSelector(state => state.articles.find(article => article.id === id));

  useEffect(() => {
    if (!article) {
      dispatch(fetchArticle(id));
    }
  }, [id, article, dispatch]);

  const handleSubmit = (updatedArticle) => {
    dispatch(updateArticle(updatedArticle));
    history.push(`/article/${id}`);
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Edit Article Page</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          {article && <ArticleForm article={article} onSubmit={handleSubmit} />}
        </Col>
      </Row>
    </Container>
  );
}

export default EditArticlePage;