import React from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";

export default function BlogList (props) {
  const posts = props.posts

    return (
      <Row>
        {posts && posts.map((post) => (
          <Col key={post.id} md={4} style={{ marginBottom: 50 }}>
            <BlogItem key={post.title} {...post} />
          </Col>
        ))}
      </Row>
    );

}
