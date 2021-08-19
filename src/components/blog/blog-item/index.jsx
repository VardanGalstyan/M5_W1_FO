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
  }, [])

  const fetchData = async () => {
    const response = await fetch('http://localhost:3005/authors')
    const authors = await response.json()
    setAuthors(authors)
  }
  const { title, cover, author, id } = props;


  return (
    <>
      { id && 
        <Link to={`/blog/${id}`} className="blog-link">
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
