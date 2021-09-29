import React from "react";
import './index.css'
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./views/home";
import Blog from "./views/blog";
import NewBlogPost from "./views/new";
import { BrowserRouter, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import Signup from "./components/singinup/Signup";




function App() {

  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])


  const fetchData = async () => {
    const response = await fetch('http://localhost:3001/blogs')
    const data = await response.json()
    console.log('blogs', data.blogs);
    setBlogs(data.blogs)
  }


  return (
    <div >
      <BrowserRouter >
        <NavBar />
        <Signup />
        <Route path="/" exact render={() => <Home blogs={blogs} />} />
      <Route path="/blog/:id" render={() => <Blog blogs={blogs} />} />
      <Route path="/new" exact component={NewBlogPost} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
