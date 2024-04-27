import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchArticle } from '../redux/articlesSlice';
import Article from '../components/Article';
import { Container, Row, Col } from 'react-bootstrap';

function ArticlePage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const article = useSelector(state => state.articles.find(article => article.id === id));

  useEffect(() => {
    if (!article) {
      dispatch(fetchArticle(id));
    }
  }, [id, article, dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Article Page</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          {article && <Article article={article} />}
        </Col>
      </Row>
    </Container>
  );
}

export default ArticlePage;