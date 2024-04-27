import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createArticle } from '../redux/articlesSlice';
import ArticleForm from '../components/ArticleForm';
import { Container, Row, Col } from 'react-bootstrap';

function CreateArticlePage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (article) => {
    dispatch(createArticle(article));
    history.push('/');
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>Create Article Page</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <ArticleForm onSubmit={handleSubmit} />
        </Col>
      </Row>
    </Container>
  );
}

export default CreateArticlePage;