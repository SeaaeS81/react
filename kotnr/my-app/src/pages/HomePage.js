import React from 'react';
import { useSelector } from 'react-redux';
import ArticleList from '../components/ArticleList';
import { Container, Row, Col } from 'react-bootstrap';

function HomePage() {
  const articles = useSelector(state => state.articles);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Home Page</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <ArticleList articles={articles} />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;