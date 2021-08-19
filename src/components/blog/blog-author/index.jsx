import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./styles.css";


export default function BlogAuthor(props) {
  
const authors = props.authors
const postAuthorId = props.authorId

const selectedAuthor = authors && authors.find(author => author.id === postAuthorId)

  return (
    <Row>
      <Col xs={2}>
        {
          selectedAuthor && <Image className="blog-author" src={selectedAuthor.avatar} roundedCircle />
        }
      </Col>
      <Col>
        <div>by</div>
        {
          selectedAuthor && <h6>{selectedAuthor.name}</h6>
        }
      </Col>
    </Row>
  );

}
