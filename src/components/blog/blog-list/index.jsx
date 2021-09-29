import React from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";

export default function BlogList ({blogs}) {


    return (
      <Row>
        {blogs && blogs.map((blog) => (
          <Col key={blog.id} md={4} style={{ marginBottom: 50 }}>
            <BlogItem key={blog.title} {...blog} />
          </Col>
        ))}
      </Row>
    );

}
