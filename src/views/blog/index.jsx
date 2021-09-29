import React, { useState, useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import { withRouter } from "react-router";
import BlogAuthor from "../../components/blog/blog-author";
import "./styles.css";

const Blog = (props) => {

  const [blog, setBlog] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const { id } = props.match.params
    const blog = props.blogs && props.blogs.find((blog) => blog._id.toString() === id);

    if (blog) {
      setBlog(blog)
      setLoading(false)
    } else {
      props.history.push("/404");
    }

  }, [])


  return (
    <div className="blog-details-root">
      <Container>
        <Image className="blog-details-cover" src={blog.cover} fluid />
        <h1 className="blog-details-title">{blog.title}</h1>

        <div className="blog-details-container">
          <div className="blog-details-author">
            <BlogAuthor {...blog.author} />
          </div>
          <div className="blog-details-info">
            <div>{blog.createdAt}</div>
            {/* <div>{`${blog.readTime.value} ${blog.readTime.unit} read`}</div> */}
          </div>
        </div>

        <div dangerouslySetInnerHTML={{ __html: blog.content }}></div>
      </Container>
    </div>
  );
}


export default withRouter(Blog);
