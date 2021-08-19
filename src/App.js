import React from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./views/home";
import Blog from "./views/blog";
import NewBlogPost from "./views/new";
import { BrowserRouter, Route } from "react-router-dom";
import { useState, useEffect} from 'react'




function App() {
  
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])
  
  
  const fetchData = async () => {
    const response = await fetch('http://localhost:3005/posts')
    const posts = await response.json()
    setPosts(posts)
  }
  

  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/" exact render={() => <Home posts = {posts}/>} />
      <Route path="/blog/:id" render={() => <Blog posts = {posts}/>} />
      <Route path="/new" exact component={NewBlogPost} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
