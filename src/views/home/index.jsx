import React from "react";
import { Container } from "react-bootstrap";
import BlogList from "../../components/blog/blog-list";
import "./styles.css";

export default function Home ({blogs}) {

    return (
      <Container fluid="sm">
        <h1 className="blog-main-title">Welcome to the Strive Blog!</h1>
        <BlogList blogs = {blogs} />
      </Container>
    );

}
