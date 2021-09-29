import React from "react";
import { Card } from "react-bootstrap";
import BlogAuthor from "../blog-author";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./styles.css";


export default function BlogItem(props) {

  const [authors, setAuthors] = useState(null)

  useEffect(() => {
    fetchData()
    console.log(props);
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/authors')
      if (response.ok) {
        const authors = await response.json()
        console.log('authors', authors);
        setAuthors(authors)

      } else {
        console.log('response is not ok');
      }
    } catch (error) {
      console.log(error);
    }

  }
  const { title, cover, author, _id } = props;


  return (
    <>
      {_id &&
        <Link to={`/blog/${_id}`} className="blog-link">
          <Card className="blog-card">
            <Card.Img variant="top" src={cover} className="blog-cover" />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
            </Card.Body>
            <Card.Footer>
              {
                authors && <BlogAuthor authors={authors} authorId={author} cover={cover} />
              }
            </Card.Footer>
          </Card>
        </Link>
      }
    </>
  );

}
